import express from 'express';
import authenticateUser from '../middleware/auth.js';
const authRouter = express.Router()


import { register,login, updateUser } from "../Controllers/authControl.js";

authRouter.route('/Register').post(register)
authRouter.route('/Login').post(login)
authRouter.route('/updateUser').patch(authenticateUser, updateUser)

export default authRouter