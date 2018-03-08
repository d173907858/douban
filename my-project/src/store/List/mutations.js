import { 
    SET_BOOKS,
    RE_BOOKS
 } from './const'



let mutations ={
    [SET_BOOKS] (state,books) {
        console.log(books)
        state.books = state.books.concat(books)

    },
    [RE_BOOKS](state){
        state.books = []
        
    
    }
}
export default mutations