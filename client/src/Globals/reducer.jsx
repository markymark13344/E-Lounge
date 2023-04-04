import { DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from './actions'

export const reducer = (state,action) => {
    if(action.type === DISPLAY_ALERT){
        return {...state,showAlert:true,alertType:'danger',alertText:'Provide Any Missing Values'}
    }
    if(action.type === CLEAR_ALERT) {
        return {...state,showAlert:false,alertType:'',alertText:''}
    }
    if(action.type === REGISTER_USER_BEGIN){
        return {...state, isLoading: true}
    }
    if(action.type === REGISTER_USER_SUCCESS){
        return {...state, isLoading: false, token: action.payload.token, user: action.payload.user, showAlert: true, alert: 'success', alertText: 'User Created! Redirecting....'}
    }
    if(action.type === REGISTER_USER_ERROR){
        return {...state, isLoading: false, showAlert : true, alertType: 'danger', alertText: action.payload.msg}
    }
    throw new Error(`Invalid Action : ${action.type}`)
}

export default reducer
