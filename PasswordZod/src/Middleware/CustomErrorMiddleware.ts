
import express, {
    Request,
    Response,
    NextFunction
} from 'express'
import CustomError from "../Exception/CustomError.js";



const CustomErrorMiddleware = async (err:Error,req:Request,res:Response,next:NextFunction)=>{
    if (err instanceof CustomError){
        if (err.errorObj){
            res.status(err.statusCode).json({statusCode:err.statusCode,message:err.message,errorObj:err.errorObj});
        }else{
            res.set(err.statusCode).json({
                statusCode:err.statusCode,
                message:err.message,
            })
        }

    }

}

export default CustomErrorMiddleware;