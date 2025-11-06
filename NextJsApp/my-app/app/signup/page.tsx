"use client"
import axios from "axios"
import { use, useState } from "react"

export default function Signup(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSignUp= async()=>{
        const response = await axios.post("http://localhost:3000/api/v1/signup",{
            email,
            password
        })

        console.log(response.data)

}

    return(
        <div className="bg-white p-6 h-fit w-[30%] rounded-xl text-black">
            <div className="  flex flex-col p-7">
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" className="text-black border-2 border-gray-300 p-2 rounded-xl" />
            </div>

            <div className="  flex flex-col p-7">
                <label htmlFor="password">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" className="text-black border-2 border-gray-300 p-2 rounded-xl" />
            </div>

            <div className=" flex items-center justify-center">
                <button onClick={()=>handleSignUp()} className="bg-black text-white py-2 px-5 rounded-xl">Signup</button>
            </div>
        </div>

    )


}

