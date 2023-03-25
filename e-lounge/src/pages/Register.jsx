import React from 'react'
import { useState,useEffect } from 'react'
import { Alert } from '../assets/components/Alert'
import FormRow from '../assets/components/FormRow'
import styled from 'styled-components'


//Initial value for Register page
const initiator = {
    name:'',
    email:'',
    password:'',
    isMember: true,
    showAlert: false
}


const Register = () => {

  const toggleMember = () => {
    setValues({...values,isMember:!values.isMember})
  }

    const [values,setValues] = useState(initiator)

    const receiveChange = (e) => {
        console.log(e.target)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }



  return (
    <Wrapper>
        <div>
            <h3>{values.isMember ? "Login":"Register"}</h3>
            <form className='form' onSubmit={onSubmit}>
                {values.showAlert && <Alert/>}
                <div className='formContainer'>


                {!values.isMember && (<FormRow type='name' name='name' value={values.name} receiveChange={receiveChange}/>)}
                

                <FormRow type='email' name='email' value={values.email} receiveChange={receiveChange}/>

                <FormRow type='password' name='password' value={values.password} receiveChange={receiveChange}/>



                <button type='submit'>submit</button> <br />
                <p>
                  <button type='button' onClick={toggleMember}>
                    {values.isMember ? 'Register' : 'Login'}
                  </button>
                </p>
                </div>
            </form>
        </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.main`
  .row{
    height: 80vh;
  }
`

export default Register

