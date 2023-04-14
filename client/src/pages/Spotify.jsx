import React, {useEffect, useState} from 'react'
import useAuth from "../assets/components/useAuth"
import styled from 'styled-components'
import {Container, Form} from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: "b97798b973514506bed7601c91a13bc9"
})


export const Spotify = ({code}) => {
  const accessToken = useAuth(code)
  const [search,setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!accessToken) return

    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    spotifyApi.searchTracks(search).then(res => {
        console.log(res)
    })


  },[search,accessToken])

  return (
    <Wrapper className='d-flex flex-column py-2' style={{height: "100vh"}}>
        <Form.Control 
        type="search" 
        placeholder="Search Song or Artists" 
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
        <div className='flex-grow-1 my-2 scroll'>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.main`
    .scroll{
        overflow-y: auto


    }
`



export default Spotify

