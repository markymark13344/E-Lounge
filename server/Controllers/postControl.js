import { StatusCodes } from "http-status-codes"
import {BadRequestError} from '../Errors/compiler.js'
import Post from "../models/post.js"

//Controllers
const post = async (req, res) => {
    const {title, content} = req.body

    if(!title || !content){
        throw new BadRequestError('Please provide all values')


    }


    const post = Post.create({title, content})
    res.status(StatusCodes.CREATED).json({title, content})
}
export {post}