import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: {type: String,
        minlength:3,
        maxlength:20,
        trim:true},
    content: {
        type:String,   
    }

})

export default mongoose.model('Post', PostSchema)
