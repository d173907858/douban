import { 
    DSET_BILLBOARDS
 } from './const'



let mutations ={
    [DSET_BILLBOARDS] (state,data) {
        state.data = data
    }
}
export default mutations