import {
    DGET_DATA,
    DSET_BILLBOARDS,  
} from './const'
import axios from 'axios'
import config from '../../modules/config'

let actions ={
    [DGET_DATA] ({commit}) {
        axios.get(config.host+'/db/j/category/new',{
            params:{start:0,limit:10}
        }).then(res => {
            // console.log(res.data.data.billboards)
            commit(DSET_BILLBOARDS,res)
        })
    }
}

export default actions