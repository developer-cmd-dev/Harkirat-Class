
import axios from "axios"

async function getUserDetails() {
    const response = axios.get(`https://dogapi.dog/api/v2/breeds?page%5Bnumber%5D=1&page%5Bsize%5D=10
`);
    return response;
}

export  default async function User(){

    const data = await getUserDetails()
    const responseData:ResponseDataI[] = data.data.data;
    console.log(responseData)


    return <div className="flex flex-col items-center justify-center p-6">
            {
                responseData.map((values)=>(
                      <div className="w-[90%] text-2xl text-black m-2 bg-white h-35 rounded-2xl">
                        <h1>{values .name}</h1>
                        <h1>{values.type}</h1>
                </div>
                ))
            }     

    </div>

    
}

interface ResponseDataI{
    name:String;
    type:String;
}