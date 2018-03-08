import {
    SET_BOOKDETAIL
} from './const'


let mutations ={
    [SET_BOOKDETAIL](state,bookdetail){
       state.bookdetail = bookdetail
    }
}
export default mutations