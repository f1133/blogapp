import mongoose from "mongoose";

const Schema =mongoose.Schema;

const blogschema=new Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    blogs:[{type: mongoose.Types.ObjectId,ref:"Blog",required :true}]
});

export default mongoose.model("Blog",blogschema);