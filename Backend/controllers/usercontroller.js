import usermodel from "../models/usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { response } from "express";

//login user

const loginuser=async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await usermodel.findOne({email});
        if(!user){
            return res.json({success:false,message:"user not found"})
        }
        else{
            const ismatch=await bcrypt.compare(password,user.password)
            if(!ismatch){
                return res.json({success:false,message:"password is incorrect"})
        }
        const token =createtoken(user._id);
        res.json({success:true,message:"login successfull",token:token})
    }
}
    catch(error)
    {
        res.json({success:false,message:"error"})
    }

}
const createtoken = (id)=> {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
//register
const registeruser=async (req,res)=>{
    const {name,password,email}=req.body;
    try{
        const exists=await usermodel.findOne({email});
        if(exists)
        {
            return res.json({success:false,message:"user already exist"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"enter a valid email"})
        }
        if(!validator.isStrongPassword(password)){
            return res.json({success:false,message:"enter a strong password"})
        }

        const salt=await bcrypt.genSalt(10)
        const hash=await bcrypt.hash(password,salt)

        const newuser = new usermodel({name:name,email:email,password:hash});
        const user = await newuser.save()
        const token = createtoken(user._id)
        res.json({success:true,token});
        
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {loginuser,registeruser}