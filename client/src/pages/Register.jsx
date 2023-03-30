import React from 'react'
import { useState,useEffect } from 'react'
import { Alert } from '../assets/components/Alert'
import FormRow from '../assets/components/FormRow'
import styled from 'styled-components'
import { useAppContext } from '../Globals/appContext'


//Initial value for Register page
const initiator = {
    name:'',
    email:'',
    password:'',
    isMember: true,
}


const Register = () => {

  const toggleMember = () => {
    setValues({...values,isMember:!values.isMember})
  }

    const {isLoading,showAlert, displayAlert, registerUser} = useAppContext()

    const [values,setValues] = useState(initiator)

    const receiveChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const {name,email,password,isMember} = values
        if(!email || !password || (!isMember && !name)){
          displayAlert()
          return
        }
        const currentUser = {name,email,password}
        if(isMember){
          console.log("Already a member");
        }
        else{
          registerUser(currentUser)
        }
        console.log(values);
    }



  return (
    <Wrapper>
        <div>
            <h3>{values.isMember ? "Login":"Register"}</h3>
            <form className='form' onSubmit={onSubmit}>
                {showAlert && <Alert/>}
                <div className='formContainer'>


                {!values.isMember && (<FormRow type='name' name='name' value={values.name} receiveChange={receiveChange}/>)}
                

                <FormRow type='email' name='email' value={values.email} receiveChange={receiveChange}/>

                <FormRow type='password' name='password' value={values.password} receiveChange={receiveChange}/>



                <button type='submit' disabled={isLoading}>submit</button> <br />
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

