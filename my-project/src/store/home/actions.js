import {
    DGET_BILLBOARDS,
    DSET_BILLBOARDS,  
} from './const'
import axios from 'axios'
import config from '../../modules/config'
import qs from 'qs'

let actions ={
    [DGET_BILLBOARDS] ({commit}) {
        axios.post(config.host+'/j/category/',qs.stringify({
                target:'https://read.douban.com/',
                method:'get'
        })).then(res => {
            // console.log(res.data.data.billboards)
            commit(DSET_BILLBOARDS,res)
        })
    }
}

export default actions