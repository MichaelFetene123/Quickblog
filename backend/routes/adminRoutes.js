import express from 'express'
import {adminLogin} from "./../controllers/AdminController.js";
import {
  getAllBlogsAdmin,
  getAllComments,
  deleteCommentById,
  approveCommentById,
  getDashboard,
} from "./../controllers/blogController.js";
import auth from "./../middleware/auth.js";



const AdminRouter = express.Router()

AdminRouter.post('/login', adminLogin)
AdminRouter.get("/comments",auth, getAllComments);
AdminRouter.get("/blogs", auth, getAllBlogsAdmin);
AdminRouter.post("/delete-comment", auth, deleteCommentById);
AdminRouter.post("/approve-comment", auth, approveCommentById);
AdminRouter.get("/dashboard", auth, getDashboard);

export default AdminRouter; 