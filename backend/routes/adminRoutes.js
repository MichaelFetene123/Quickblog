import express from 'express'
import {adminLogin} from "./../controllers/AdminController.js";
import { getAllBlogsAdmin, getAllComments } from "./../controllers/blogController.js";
import auth from "./../middleware/auth.js";



const AdminRouter = express.Router()

AdminRouter.post('/login', adminLogin)
AdminRouter.get("/comments",auth, getAllComments);
AdminRouter.get("/blogs", auth, getAllBlogsAdmin);

export default AdminRouter;