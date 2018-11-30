import {LOGIN,LOGOUT} from '../actions/types'
const initialState={
    isLogin: false,
    email : '',
    password : ''
}
export default authReducers=(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                email:action.email,
                password:action.password,
                isLogin: true
            }
        case LOGOUT:
            return{
                ...state,
                email:'',
                password:'',
                isLogin: false
            }
        default:
            return state;
    }
}