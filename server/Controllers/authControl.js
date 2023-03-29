import User from "../models/user.js"
import {StatusCodes} from 'http-status-codes'
import {BadRequestError} from '../Errors/compiler.js'

//Controllers
const register = async (req,res) => {
        const {name,email,password} = req.body

        if(!name || !email || !password){
            throw new BadRequestError('Please Provide all values')
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            throw new BadRequestError('Email already in use')
        }

        const user = await User.create({name,email,password})
        const token = user.createJWT()
        res.status(StatusCodes.CREATED).json({user:{email:user.email,name:user.name}, token})
   
}

const login = async  (req,res) => {
    res.send('register user')
}

const updateUser = async  (req,res) => {
    res.send('register user')
}

export {register,login,updateUser}