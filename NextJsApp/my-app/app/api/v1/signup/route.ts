import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

type UserData = {
    password:String,
    email:String
}

const client = new PrismaClient();

export async function POST(req:NextRequest,res:NextResponse) {
    const {email,password} = await req.json();
   try{
     const response = await client.user.create({
        data:{
            email:email,
            password:password,
        }
    })
    return NextResponse.json({
        message:"success",
        data:response
    })
   }catch(error){
    console.log(error)
    return;
   }
}