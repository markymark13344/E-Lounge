import mongoose from 'mongoose'
import validator from 'validator'

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
    password: {type: String, required:[true,'Please Provide password'], minlength:6, trim:true},
})

export default mongoose.model('User', UserScheme)