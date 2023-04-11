import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//User model
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

//Presave user with hashed password
UserScheme.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})

//create user token
UserScheme.methods.createJWT = function () {
    return jwt.sign({userId:this._id},process.env.JWT_SECRET,{ expiresIn: process.env.JWT_LIFETIME})
}

//Compare user password with given password
UserScheme.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword,this.password);
    return isMatch
}
export default mongoose.model('User', UserScheme)