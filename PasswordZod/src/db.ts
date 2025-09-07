import {Schema,model} from "mongoose";
import bcrypt from 'bcrypt'
import { NextFunction } from "express";

const UserSchema =new Schema({
    "email":{type:String,unique:true,require:true},
    "password":{type:String, require:true}
})

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) next();
    if(!this.password) throw new Error("Password not provided to hash");
       const hashed =await bcrypt.hash(this.password,10)
       this.password=hashed;
       next();
       
})


UserSchema.methods.comparePassword=function(password:string){
  return bcrypt.compare(password,this.password);
}


const UserModel = model("User",UserSchema);

export default UserModel;