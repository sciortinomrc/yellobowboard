import  {LOGIN, LOGOUT } from './types'
import {AsyncStorage} from 'react-native'
export const login=(email,password)=>{
    console.log(email,password)
    return(dispatch)=>{
        AsyncStorage.setItem('userToken','suresh')
        dispatch({type:LOGIN,email,password})
    }
}
export const logout =()=>{
    return(dispatch)=>{
        AsyncStorage.clear()
        dispatch({type:LOGOUT})
    }
}