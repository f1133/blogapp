import express from "express";
import mongoose from "mongoose"
import Blogrouter from "./backend/routes/blog_routes.js";
import {router} from "./backend/routes/user-routes.js"

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/Blog",Blogrouter);
mongoose.connect('mongodb+srv://f20191133:hb3oSDo9qvWG9QGV@cluster0.ewlia3o.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(8080))
.then(()=>console.log("connected"))
.catch((err)=>console.log(err));
