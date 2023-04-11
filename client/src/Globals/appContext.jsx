import React, { useReducer,useContext } from "react";

import reducer from "./reducer";

import axios from 'axios'

import { DISPLAY_ALERT, CLEAR_ALERT,SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR  } from "./actions";

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const initialState = {
    isLoading: false,
    showAlert: false,
    user: user ? JSON.parse(user):null,
    token: token,
    alertText: '',
    alterType: '',
}

const AppContext = React.createContext()


const AppProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = () =>{
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000)
    }

    const addUsertoLocal = ({user,token}) => {
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('token',token)
    }

    const removeUserfromLocal = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const setupUser = async ({currentUser,endpoint,alertText}) => {
        dispatch({ type: SETUP_USER_BEGIN })

        try{
            const {data} = await axios.post(`/api/v1/auth/${endpoint}`,currentUser)
            const {user,token} = data
            dispatch({type: SETUP_USER_SUCCESS, payload: { user, token, alertText }})
            // Add local storage
            addUsertoLocal({user,token})
        } catch (error) {
            dispatch({type:SETUP_USER_ERROR, payload: {msg: error.response.data.msg}})
            clearAlert()
        }
    }

    return <AppContext.Provider value={{...state, displayAlert, setupUser}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}
