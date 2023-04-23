import express from  'express'
const postRouter = express.Router()

import {post} from "../Controllers/postControl.js";

postRouter.route('/Post').post(post)

export default postRouter