import {
    SET_DETAIL,
    GET_DETAIL
} from './const'
import axios from 'axios'
import config from '../../modules/config'
import { Toast } from 'mint-ui'
import qs from 'qs'
let actions = {
    [GET_DETAIL] ({commit},id) {
        let toast = Toast({
            message: '正在加载...',
            iconClass: 'fa fa-spinner fa-pulse',
            duration:-1
        })
        axios.post(config.host + '/j/column_v2/'+id+'/',qs.stringify({
            target:'https://read.douban.com/',
            method:'get'
    })).then(res => {
            toast.close()
            commit(SET_DETAIL,res.data)
        })
    }
}
export default actions