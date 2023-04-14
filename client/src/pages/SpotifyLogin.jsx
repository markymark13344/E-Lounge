import React from 'react'
import {Container} from 'react-bootstrap'
import styled from 'styled-components'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b97798b973514506bed7601c91a13bc9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const SpotifyLogin = () => {
 return <Wrapper className='d-flex justify-content-center align-items-center' style={{ minHeight: "100vh"}}>
    <a className='btn btn-success btn-large' href={AUTH_URL}>
        Login with Spotify
    </a>
 </Wrapper>
}

const Wrapper = styled.main`
    
`

export default SpotifyLogin