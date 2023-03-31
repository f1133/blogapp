import express from "express";
import { addblog, getById, editblog, getAllBlogs, deleteById } from "../controller/blog_controller.js";
const Blogrouter =express.Router();

Blogrouter.get("/",getAllBlogs);
Blogrouter.post("/add",addblog);
Blogrouter.put("/update/:id",editblog);
Blogrouter.get("/:id",getById);
Blogrouter.delete("/:id",deleteById);
export default Blogrouter;