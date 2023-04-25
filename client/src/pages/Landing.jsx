import React from 'react'
import styled from 'styled-components';
import useAuth from '../assets/components/Utility components/useAuth'


const Landing = () => {
  return (
    <Wrapper> 
    <div className='landingPage'>
      <div className='row'>
        <div className='landingInfo border border-dark col'>
          <p className=''>
            Welcome to E-Lounge! E-Lounge is a social media platform where users can find and share all sorts of media.
            With E-Lounge, you can natively share music and videos with your friends, have group parties where you can play
            games and watch vidoes together, or just come to find out the latest news. E-Lounge is honestly a joke a right now, 
            but here is a placeholder introduction!
          </p>
          <button className='btn btn-primary'>Login</button> <br /> <br />
          <button className='btn btn-primary'>Sign-up</button>
        </div>
        <div className='landingPic border border-dark col'>
        
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .row{
    height: 80vh;
  }
`

export default Landing