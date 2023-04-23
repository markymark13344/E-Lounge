import React from 'react'
import { useState } from 'react'
import FormRow from '../assets/components/FormRow'
import Alert from '../assets/components/Alert'
import { useAppContext } from '../Globals/appContext'
import styled from 'styled-components'

const Profile = () => {
    const {user,showAlert,displayAlert,updateUser,isLoading} = useAppContext()

    const [name,setName] = useState(user?.name)
    const [email,setEmail] = useState(user?.email)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!name || !email){
            displayAlert()
            return
        }
        updateUser({name,email})
        
    }
  return (
    <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
            <h3>Profile</h3>
            {showAlert && <Alert/>}
            <div className='form-center'>
                <FormRow type='email' name='email' value={email} receiveChange={e => setEmail(e.target.value)}/>
                <FormRow type='text' name='name' value={name} receiveChange={e => setName(e.target.value)}/>
            </div>
            <button className='btn btn-block' type='submit' disabled={isLoading}>{isLoading?'Please Wait':'Save Changes'}</button>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.main`

`

export default Profile