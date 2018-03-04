import { 
    DSET_BILLBOARDS
 } from './const'



let mutations ={
    [DSET_BILLBOARDS] (state,billboards) {
        state.billboards = billboards
    }
}
export default mutations