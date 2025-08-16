import express from "express";
import { addBlog } from "../controllers/blogController.js";
import upload from './../middleware/multer.js';
import auth from './../middleware/auth';

const addRouter= express.Router();

addRouter.post("/add", auth, upload.single('image'), addBlog);

export default addRouter;