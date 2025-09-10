import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import { Request, Response, NextFunction } from 'express';
import UserModel from "./db.js";
import bodyParser from "body-parser";
import bcrypt from 'bcrypt'
import * as z from 'zod';
import CustomErrorMiddleware from "./Middleware/CustomErrorMiddleware.js";
import CustomError from "./Exception/CustomError.js";
import customError from "./Exception/CustomError.js";
dotenv.config();


const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const User = z.object({
    email:z.string().min(5).max(100),
    password:z.string().min(8).max(100)
        .refine((password)=>/[A-Z]/.test(password),{message:"Password should contains Capital Letter."})
        .refine((password)=>/[a-z]/.test(password),{message:"Password should contains Small Letter."})
        .refine((password)=>/[0-9]/.test(password),{message:"Password should contains Number."}),

})


const authmiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const parsedUser = z.safeParse(User,req.body);

    if (!parsedUser.success){
       const errorResponse =  z.treeifyError(parsedUser.error);
       throw new CustomError("this comes from custom error handler",404,errorResponse)
    }

    const {email,password}=parsedUser.data

   const response =await UserModel.findOne({email:email});
   if(!response) throw new CustomError("User not found",404);
    // @ts-ignore
   const comparePass = bcrypt.compare(password,response.password);

   if(!comparePass) throw new CustomError("Bad Credentials",401);
    req.body=response;
    next();

}

app.post('/api/v1/signup', async (req, res) => {

    const parsedUser = z.safeParse(User,req.body);
    if (!parsedUser.success){
        throw new CustomError("",404,parsedUser.error)
    }

    const {email,password}=parsedUser.data;
    const response = await UserModel.create({
        email,
        password
    })

    if (!response) res.status(500).json({ message: "Internal Server error", data: null });
    res.status(200).json({ message: "Success", data: null });
})

app.use(authmiddleware).get('/api/v1/signin',(req,res)=>{
    console.log(req.body);
    res.set(200).json({message:"Signin success"});
})


app.use(CustomErrorMiddleware);



mongoose.connect("mongodb://localhost:27017/password_zod")
    .then(() => {
        console.log("Mongodb is connected!");
        app.listen(4000, () => console.log(`App is running on ${4000}`))
    }).catch((err) => console.log(err));