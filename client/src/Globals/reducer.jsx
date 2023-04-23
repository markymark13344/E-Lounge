import { DISPLAY_ALERT, CLEAR_ALERT, SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR, UPDATE_USER_BEGIN,UPDATE_USER_ERROR, UPDATE_USER_SUCCESS  } from './actions'

export const reducer = (state,action) => {
    if(action.type === DISPLAY_ALERT){
        return {...state,showAlert:true,alertType:'danger',alertText:'Provide Any Missing Values'}
    }
    if(action.type === CLEAR_ALERT) {
        return {...state,showAlert:false,alertType:'',alertText:''}
    }
    

    if(action.type === SETUP_USER_BEGIN){
        return {...state, isLoading: true}
    }
    if(action.type === SETUP_USER_SUCCESS){
        return {...state, isLoading: false, token: action.payload.token, user: action.payload.user, showAlert: true, alert: 'success', alertText: action.payload.alertText}
    }
    if(action.type === SETUP_USER_ERROR){
        return {...state, isLoading: false, showAlert : true, alertType: 'danger', alertText: action.payload.msg}
    }

    if(action.type === UPDATE_USER_BEGIN){
        return {...state, isLoading: true}
    }
    if(action.type === UPDATE_USER_SUCCESS){
        return {...state, isLoading: false, token: action.payload.token, user: action.payload.user, showAlert: true, alert: 'success', alertText: 'User Profile Updated'}
    }
    if(action.type === UPDATE_USER_ERROR){
        return {...state, isLoading: false, showAlert : true, alertType: 'danger', alertText: action.payload.msg}
    }
    
    
    
    
    
    
    throw new Error(`Invalid Action : ${action.type}`)
}

export default reducer
