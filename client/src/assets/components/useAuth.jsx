import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AuthCode(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() =>{
        axios.post('/api/v1/Spotify/Login', {
            code
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({},null, "/")
        })
    },[code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return

        const interval = setInterval(() => {
            axios.post('/api/v1/Spotify/Refresh',{
                refreshToken
            })
            .then( res => {
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({},null, "/")
            })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
        
    }, [refreshToken, expiresIn])
    
}