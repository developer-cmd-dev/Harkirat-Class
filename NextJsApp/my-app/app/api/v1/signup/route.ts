import { NextRequest, NextResponse } from "next/server";

type UserData = {
    password:String,
    email:String
}

export async function POST(req:NextRequest,res:NextResponse) {
    const {email,password}:UserData = await req.json();
    console.log(email,password)
    return NextResponse.json({
        message:"success"
    })
}