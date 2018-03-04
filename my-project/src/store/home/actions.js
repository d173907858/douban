import {
    DGET_BILLBOARDS,
    DSET_BILLBOARDS,  
} from './const'
import axios from 'axios'
import config from '../../modules/config'

let actions ={
    [DGET_BILLBOARDS] ({commit}) {
        axios.get(config.host+'/db/j/category/',{
        }).then(res => {
            // console.log(res.data.data.billboards)
            commit(DSET_BILLBOARDS,res)
        })
    }
}

export default actions