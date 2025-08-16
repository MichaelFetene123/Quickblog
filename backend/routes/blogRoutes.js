import express from "express";
import { addBlog } from "../controllers/blogController.js";

const addRouter= express.Router();

addRouter.post("/add", addBlog);

export default addRouter;