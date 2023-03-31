import User from "../model/user.js";
import bcrypt from "bcrypt";
export const getAllUser =async(req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }
    catch(err){
        console.log(err);
    }
    if(!users)
   { return res.status(404).json({message:"No Users FoundS"})}
   return res.status(200).json({users:users});
}
export const signup =async(req,res,next)=>{
    const {name ,email,password}=req.body;
    let existingUser;
    try{
        existingUser= await User.findOne({email});
    }catch(err)
    {
        console.log(err);
    }
    if(existingUser)
        {return res.status(400).json({message:"User Already exists"})};
        const hashedPassword =bcrypt.hashSync(password, bcrypt.genSaltSync(2));
    const user =new User({
        name,
        email,
        password :hashedPassword,
    });
    try{
        user.save();
    }catch(err)
        {
            console.log(err);
        }
            return res.status(201).json({user});

}
export const login = async(req,res,next)=>{
    const {email,password}=req.body;
    let existingUser;
    try{
        existingUser= await User.findOne({email});
    }catch(err)
    {
        console.log(err);
    }
    if(!existingUser)
        {return res.status(404).json({message:"User with email doesnt exist"})};
        const isPAsswordCorrect=bcrypt.compareSync(password,existingUser.password);
        if(!isPAsswordCorrect)
            {
                return res.status(400).json({message:"Incorrect password"})
            }
            return res.status(200).json({message:"login succcessful"});
}
