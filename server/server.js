import express from 'express'
import 'express-async-errors'
import dotenv from 'dotenv'
import { connect } from 'mongoose'

import cors from 'cors'
import bodyParser from 'body-parser'


import errorHandlerMiddleware from './middleware/error.js'
import notFoundMiddleware from './middleware/notfound.js'
import authenticateUser from './middleware/auth.js'

import connectDB from './db/connect.js'

import morgan from 'morgan'




//Pull env information
dotenv.config()

//Create express app
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//middleware
notFoundMiddleware
errorHandlerMiddleware

//Routers
import authRouter from './routes/authRoutes.js'
import spotifyRouter from './routes/spotifyRoutes.js'



//Routes
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({msg: 'Welcome'})
})

app.get('/api/v1',(req,res)=>{
    res.json({msg: 'API'})
})



app.use('/api/v1/auth',authRouter)
app.use('/api/v1/Spotify', spotifyRouter)


//No Route Found
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

//Connect to Port
const port = process.env.PORT || 5000



//Start method
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

//Start
start()