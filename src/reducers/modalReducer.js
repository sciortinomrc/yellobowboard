import {MODAL_CLOSE,MODAL_OPEN} from '../constants/modal'
const modalInitinalState={
    isModalOpen:false,
    data:''
}
export default modalReducer=(state=modalInitinalState,action)=>{
    switch (action.type) {
        case MODAL_OPEN:
            return{
                ...state,
                isModalOpen:true,
                data:action.payload
            }
        case MODAL_CLOSE:
            return{
                ...state,
                isModalOpen:false,
                data:null
            }
        default:
            return state;
    }
}