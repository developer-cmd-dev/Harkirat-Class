import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import e, { Request, Response, NextFunction } from 'express';
import UserModel from "./db.js";
import bodyParser from "body-parser";
import bcrypt from 'bcrypt'
import {string, z} from 'zod'
import { da } from "zod/locales";
dotenv.config();


const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const authmiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const { email, password } = req?.body;

    if (!email && !password) res.status(400).json({ message: "Empty fields", data: null });

   const response =await UserModel.findOne({email:email});
   if(!response) res.status(404).json({ message: "User not found", data: null });
    // @ts-ignore
   const comparePass =await bcrypt.compare(password,response.password);
   console.log(comparePass)

   if(!comparePass) res.status(401).json({ message: "Bad Credentials", data: null });
    // req.body=response;
    next();

}

app.post('/api/v1/signup', async (req, res) => {

    const requiredBody = z.object({
        email:z.string().min(3).max(100),
        password:z.string().min(3).max(8),
    })

    
    const {success,data}=requiredBody.safeParse(req?.body);
    if(!success){
        console.log(data)
        res.status(400).json({message:"Incorrect format"})
        return
    }


    const { email, password } = req?.body;
     

    if (!email && !password) res.set(400).json({ message: "Empty fields", data: null });


       const response = await UserModel.create({
        email,
        password})
 
    if (!response) res.set(500).json({ message: "Internal Server error", data: null });
    res.status(200).json({ message: "Success", data: null });
})

app.use(authmiddleware).get('/api/v1/signin',(req,res)=>{
    console.log(req.body);
    res.status(200).json({message:"Signin success"});
})




mongoose.connect("mongodb://localhost:27017/password_zod")
    .then(() => {
        console.log("Mongodb is connected!");
        app.listen(4000, () => console.log(`App is running on ${4000}`))
    }).catch((err) => console.log(err));