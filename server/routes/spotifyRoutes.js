import express from 'express'
const spotifyRouter = express.Router()

import {spotifyRegister, refresh} from "../Controllers/spotifyControl.js"

spotifyRouter.route('/Login').post(spotifyRegister)
spotifyRouter.route('/Refresh').post(refresh)

export default spotifyRouter