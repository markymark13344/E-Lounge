import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema({
    name: {type: String, required:[true,'Please Provide name'], minlength:3, maxlength:20, trim:true},
    email: {type: String, required:[true,'Please Provide email'], unique:true},
    password: {type: String, required:[true,'Please Provide password'], minlength:6, trim:true},
})

export default mongoose.model('User', UserScheme)