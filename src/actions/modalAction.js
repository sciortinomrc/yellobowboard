import {MODAL_CLOSE,MODAL_OPEN} from '../constants/modal'
export const modalOpen=(index)=>{
    return{
        type:MODAL_OPEN,
        payload:index
    }
}
export const modalClose=()=>{
    return{
        type:MODAL_CLOSE
    }
}