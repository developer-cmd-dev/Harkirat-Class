
import axios from "axios"

async function getUserDetails() {
    const response = axios.get(`http://localhost:3000/api/v1/user/details`);
    return response;
}

export  default async function User(){

    const data:ResponseDataI = (await getUserDetails()).data
    


    return <div className="flex flex-col items-center justify-center p-6">
            <h1>{data.email}</h1>
            <h1>{data.username}</h1>

    </div>

    
}

interface ResponseDataI{
    email:String;
    username:String;
}