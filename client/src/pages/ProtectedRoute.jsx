import React from 'react'
import { useAppContext } from '../Globals/appContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {user} = useAppContext()
  if(!user){
    return <Navigate to="/landing"/>
  }
  return children
}

export default ProtectedRoute