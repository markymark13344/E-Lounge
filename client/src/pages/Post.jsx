import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';


const Post = () => {
  return (
    <Wrapper> 
      <div>
        <div className="panel panel-default post-editor">
          <h2>Post Feed</h2>
          <div class="panel-body">
          <textarea className="form-control"/>
          <button className="btn btn-primary post-button">Post</button>
          </div>
          <ul>
            <li>First discussion post</li>
            <li>Second discussion post</li>
            <li>Third discussion post</li>
          </ul>
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

export default Post