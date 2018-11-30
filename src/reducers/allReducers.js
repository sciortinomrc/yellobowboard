import {combineReducers} from 'redux';
import authReducers from './auth';
import categoryFetch from './categoryFetch'
import  modalReducer from './modalReducer'
export default combineReducers({
    auth:authReducers,
    categoryFetch,
    modalReducer
})