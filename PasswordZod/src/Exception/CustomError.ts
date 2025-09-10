
class CustomError extends Error{
    statusCode:number;
    errorObj:object;
    constructor(message:string,statusCode:number,errorObj:object) {
        super(message);
        this.statusCode=statusCode;
       this.errorObj=errorObj;
       Object.setPrototypeOf(this, CustomError.prototype);
    }



}


export default CustomError;