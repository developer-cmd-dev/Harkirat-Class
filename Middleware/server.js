import express from 'express'

const app = express();


const ticketChecker=async(req,res,next)=>{
    const ticket = req.query.ticket
    if(ticket=="free") next();
    else res.status(403).json({status:403,message:"Access Denied! Purchase ticket"})
}


app.use(ticketChecker).get('/',(req,res)=>{
    res.send("You are welcome to the Amusement Park")
})


app.listen(3000,(err)=>{
    if(err)console.log(err.message)
    console.log(`Server is runing on Port|| ${3000}`)
})