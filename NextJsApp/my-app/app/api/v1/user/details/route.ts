import { NextResponse } from "next/server";


export function GET(){
    return NextResponse.json({
        "email":"devkmandal0@gmail.com",
        "username":"devkmandal"
    })
}