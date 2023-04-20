import express from 'express'
const spotifyRouter = express.Router()

import {spotifyRegister, refresh, lyrics} from "../Controllers/spotifyControl.js"

spotifyRouter.route('/Login').post(spotifyRegister)
spotifyRouter.route('/Refresh').post(refresh)
spotifyRouter.route('/Lyrics').get(lyrics)

export default spotifyRouter