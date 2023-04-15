import React from 'react'
import styled from 'styled-components'

export const TrackSearchResult = ({track, chooseTrack}) => {

    function handlePlay() {
        chooseTrack(track)
    }
    
  return (
    <Wrapper className='d-flex m-2 align-items-center' onClick={handlePlay}>
        <img src={track.albumUrl} className='AlbumArt'/>
        <div className="info">
            <div>{track.title}</div>
            <div className='text-muted'>{track.artist}</div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.main`
    .AlbumArt{
        height: 64px;
        width: 64px;
    }
    .info{
        margin-left: 3vh;

    }

    cursor: pointer;
`

