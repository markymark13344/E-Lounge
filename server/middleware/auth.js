import unauthenticatedError from "../Errors/unauthenticated.js"
import jwt from "jsonwebtoken"

const authenticateUser = async (req,res,next) => {
const authHeader = req.headers.authorization

if(!authHeader || !authHeader.startsWith('Bearer')){
    throw new unauthenticatedError('Authentication Invalid')
}

const token = authHeader.split(' ')[1]

try{
    const payload = jwt.verify(token,process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME})
    req.user = { userId: payload.userId}
    next()
} catch (error) {
    throw new unauthenticatedError('Authentication Invalid')
}


}


export default authenticateUser