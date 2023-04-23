import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAppContext } from '../Globals/appContext';
import axios from 'axios'


<link rel="stylesheet" href="src/styles.css"/>

const modules = {
  toolbar:[
    [{'header': [1,2,false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
  
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];



const Post = () => {
  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');

  const {showAlert,displayAlert,createPost,isLoading} = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title || !content){
        return
    }
    createPost({title,content})
  }
 
  return (
    <Wrapper> 
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)} /><br/>
        <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats}/>
        <button style={{marginTop:'5px'}}>{isLoading?'Loading Please Wait':'Post'}</button>

      </form>

     
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .row{
    height: 80vh;
  }
`

export default Post