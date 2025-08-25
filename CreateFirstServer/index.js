console.log("Hello this is node js server")
import express from 'express'


const app = express();

app.get("/",(req,res)=>res.status(200).send("Server is running"))

app.listen(3000,()=>console.log(`Server is running on ${3000} port`))