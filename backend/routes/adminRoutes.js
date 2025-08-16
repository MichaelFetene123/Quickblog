import express from 'express'
import { adminLogin } from './../controllers/AdminController.js';


const AdminRouter = express.Router()

AdminRouter.post('/login', adminLogin)

export default AdminRouter