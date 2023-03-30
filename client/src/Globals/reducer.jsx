import React from 'react'
import { DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTRE_USER_ERROR, REGISTER_USER_SUCCESS } from './actions'

export const reducer = (state,action) => {
    if(action.type === DISPLAY_ALERT){
        return {...state,showAlert:true,alertType:'danger',alertText:'Provide Any Missing Values'}
    }
    if(action.type == CLEAR_ALERT) {
        return {...state,showAlert:false,alertType:'',alertText:''}
    }
    throw new Error(`Invalid Action : ${action.type}`)
}

export default reducer
