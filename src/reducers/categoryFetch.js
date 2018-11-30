import allList from '../data/category'
import  {FETCH_ALL_CATEGORY} from '../constants/category'
const initialState={
    category:allList,
}
export default (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_ALL_CATEGORY:
           return state
        default:
            return state
    }
}