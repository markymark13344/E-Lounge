import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
  //const[summary, setSummary] = useState('');
  const[content, setContent] = useState('');
  const[files, setFiles] = useState('');

  function createNewPost(ev){
    const data = new FormData()
    data.set('title', title);  
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    console.log(files);
    axios.post('/api/v1/Post', data)
  
  };

  return (
    <Wrapper> 
      <form onSubmit={createNewPost}>
        <input type="text" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)} /><br/>
        
        <input type="file" onChange={ev => setFiles(ev.target.files)}/><br/>
        <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats}/>
        <button style={{marginTop:'5px'}}>Create Post</button>

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