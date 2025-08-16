import express from 'express'
import { adminLogin } from './../controllers/AdminController';


const AdminRouter = express.Router()

AdminRouter.post('/login', adminLogin)