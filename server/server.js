import express from 'express'
import 'express-async-errors'
import dotenv from 'dotenv'
import { connect } from 'mongoose'

import errorHandlerMiddleware from './middleware/error.js'
import notFoundMiddleware from './middleware/notfound.js'

import connectDB from './db/connect.js'





dotenv.config()

const app = express()

//middleware
notFoundMiddleware
errorHandlerMiddleware

//Routers
import authRouter from './routes/authRoutes.js'



//Routes
app.use(express.json())

app.get('/',(req,res)=>{
    throw Error('error')
    res.send('Welcome!')
})

app.use('/api/v1/auth',authRouter)


//No Route Found
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

//Connect to Port
const port = process.env.PORT || 5000




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,() =>{
            console.log(`Server is listening ${port}...`)
        })
        
    } catch (error){
        console.log(error)
    }
}

start()