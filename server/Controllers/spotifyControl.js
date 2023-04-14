import User from '../models/user.js'
import dotenv from 'dotenv'
import { StatusCodes } from 'http-status-codes'
import SpotifyWebApi from 'spotify-web-api-node'
import {BadRequestError, unauthenticatedError} from '../Errors/compiler.js'

dotenv.config()

const spotifyRegister = async (req,res) => {

    const code = req.body.code
    const spotifyAPI = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET
    })

    spotifyAPI.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(() => {
        res.status(StatusCodes.BAD_REQUEST)
    })
}

const refresh = async (req,res) => {
    const refreshToken = req.body.refreshToken
    const spotifyAPI = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        refreshToken
    })

    spotifyAPI.refreshAccessToken().then(
        (data) => {
            accessToken: data.body.access_Token
            expiresIn: data.body.expires_In
        }).catch(() =>{
            res.status(StatusCodes.BAD_REQUEST)
        })


}

export {spotifyRegister, refresh}