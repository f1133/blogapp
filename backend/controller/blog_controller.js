
import Blog from "../model/blog.js";

export const getAllBlogs= async(req,res,next)=>{
    let blogs;
    try {
        blogs=await Blog.find();
    } catch (error) {
        console.log(error);
    }
    if(!blogs){
       { return res.status(404).json({message:"No blogs found"})}
    }
    return res.status(200).json({blogs});
}
export const addblog= async(req,res,next)=>{
    const{title,desc,img,user} =req.body;
    let ExistingUser ;
    try {
        ExistingUser =await user.findById(user);
    } catch (error) {
        console.log(error);
    }
    if(!ExistingUser){
        return res.status(400).json({message:"Unable to Find User"});
    }
    return res.status(200).json({message:"User Found"});
     const blogg=new Blog({
        title,
        desc,
        img, 
        user,
     })
     try{
        const seesiion =await mongoose.startSession();
        sessionStorage.startTransaaction();
        await blog.save({session});
        ExistingUser.blogs.push(blos);
        await ExistingUser.save({seesiion});
        await session.commitTransaction();
    }catch(err){
        { console.log(err);
           return res.status(500).json({message:err})                 }
        return res.status(200).json({blog});
    }
    
}
export const editblog= async(req,res,next)=>{
    const blogid =req.params.id;
    const {title,desc}=req.body;
   
    let blogg;
    try {
        const blogg= await Blog.findByIdAndUpdate(blogid,{
            title,desc
        });
    } catch (error) {
        return console.log(error);
    }
    if(!blogg)
        {
            return res.status(500).json({message:"blog updated"})
        }
        return res.status(200).json({json});

}
export const getById=async(req,res,next)=>{
    const id=req.params.id;
    let blog; 
    try{
        blog =await Blog.findById(id);
    }catch(err){
        return console.log(err);
    }
    if(!blog)
        {
            return res.status(404).json({message:"no such blog found for the qeury"});
        }
        return res.status(200).json({blog});
}
export const deleteById=async(req,res,next)=>{
    const id=req.params.id;
    console.log(id);
    let blog; 
    try{
        blog =await Blog.findByIdAndRemove(id);
        console.log(blog);
    }catch(err){
        return console.log(err);
    }
    if(!blog)
        {
            return res.status(500).json({message:"not able to find for the qeury"});
        }
        return res.status(200).json({message:`deleted succesfully `});
}
