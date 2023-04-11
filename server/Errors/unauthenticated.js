import { StatusCodes } from 'http-status-codes'

class unauthenticatedError extends Error{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

export default unauthenticatedError