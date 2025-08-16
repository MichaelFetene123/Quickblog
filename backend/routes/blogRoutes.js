import express from "express";
import { addBlog } from "../controllers/blogController.js";
import upload from './../middleware/multer.js';

const addRouter= express.Router();

addRouter.post("/add", upload.single('image'),addBlog);

export default addRouter;