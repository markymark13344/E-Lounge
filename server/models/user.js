import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserScheme = new mongoose.Schema({
    name: {type: String, required:[true,'Please Provide name'],
        minlength:3,
        maxlength:20,
        trim:true},
    email: {type: String,
        required:[true,'Please Provide email'],
        validate:{
            validator: validator.isEmail,
            messsage: "Please provide a valid email"
        },
        unique:true},
    password: {type: String, 
        required:[true,'Please Provide password'],
        minlength:6,
        trim:true,
        select: false,
    },
})

UserScheme.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})

UserScheme.methods.createJWT = function () {
    return jwt.sign({userId:this._id},process.env.JWT_SECRET,{ expiresIn: process.env.JWT_LIFETIME})
}
export default mongoose.model('User', UserScheme)