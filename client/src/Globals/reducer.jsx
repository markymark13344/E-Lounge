import React from 'react'
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions'

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
