

import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'

const SharedLayout = () => {
  return<Wrapper>
        <nav>
            <Link to={'/SpotifyDashboard'}>Spotify</Link>
            <Link to={'/Post'}>Posts</Link>
        </nav>
        <Outlet/>
    </Wrapper>
}

const Wrapper = styled.main`
    .nav{
        height: 1000px;
    }
`

export default SharedLayout