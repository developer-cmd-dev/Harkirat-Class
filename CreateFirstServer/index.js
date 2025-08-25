import express from 'express'


const app = express();

app.get("/",(req,res)=>res.status(200).json({status:200,message:"Success"}))

app.listen(3000,()=>console.log(`Server is running on ${3000} port`))