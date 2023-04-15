import React, {useEffect, useState} from 'react'
import useAuth from "../assets/components/useAuth"
import Player from "../assets/components/Player"
import styled from 'styled-components'
import {Container, Form} from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import { TrackSearchResult } from '../assets/components/TrackSearchResult'

//Spotify API Connection
const spotifyApi = new SpotifyWebApi({
    clientId: "b97798b973514506bed7601c91a13bc9"
})


export const Spotify = ({code}) => {
  //Variables
  const accessToken = useAuth(code)
  const [search,setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")
  
  //Choose active track
  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch('')
  }

  //Set access token for api
  useEffect(() => {
    if (!accessToken) return

    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  //Search and Display music 
  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false


    spotifyApi.searchTracks(search).then(res => {
        if(cancel) return
        setSearchResults(res.body.tracks.items.map(track => {


          const smallestAlbumImage = track.album.images.reduce(
            (smallest,image) => {
              if (image.height < smallest.height) return image
              return smallest
            }, track.album.images[0])

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url
            }

        }))
    })

    return () => cancel = true
  },[search,accessToken])

  //HTML DISPLAY
  return (
    <Wrapper className='d-flex flex-column py-2' style={{height: "100vh"}}>
        <Form.Control 
        type="search" 
        placeholder="Search Song or Artists" 
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
        <div className='flex-grow-1 my-2 scroll'>
          {searchResults.map(track => (
            <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
          ))}
          {searchResults.length === 0 && (
            <div className='text-center lyrics'>

            </div>
          )}
        </div>
        <div>
          <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div>
    </Wrapper>
  )
}

//CSS
const Wrapper = styled.main`
    .scroll{
        overflow-y: auto
    }
    .lyrics{
      white-space: pre;
    }
`



export default Spotify

