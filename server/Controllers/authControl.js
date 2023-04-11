import User from "../models/user.js"
import {StatusCodes} from 'http-status-codes'
import {BadRequestError, unauthenticatedError} from '../Errors/compiler.js'

//Controllers
const register = async (req,res) => {
    //Get registration information
        const {name,email,password} = req.body
    //Check for errors
        if(!name || !email || !password){
            throw new BadRequestError('Please Provide all values')
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            throw new BadRequestError('Email already in use')
        }
    //Create new user model and token
        const user = await User.create({name,email,password})
        const token = user.createJWT()
    //return created status
        res.status(StatusCodes.CREATED).json({user:{email:user.email,name:user.name}, token})
   
}

const login = async  (req,res) => {
    //Get email and password
    const {email,password} = req.body
    if(!email || !password){
        throw new BadRequestError('Provide all values')
    }

    //Check user credentials
    const user = await User.findOne({email}).select('+password')
    if(!user){
        throw new unauthenticatedError('Invalid Credentials')
    }

    const isPassword = await user.comparePassword(password);
    if(!isPassword){
        throw new unauthenticatedError('Invalid Credentials')
    }

    //Create session token
    const token = user.createJWT()
    //Hide user password
    user.password = undefined
    //Submit login request
    res.status(StatusCodes.OK).json({user,token})
}

const updateUser = async  (req,res) => {
    res.send('register user')
}

export {register,login,updateUser}