import {
    SET_DETAIL,
    GET_DETAIL
} from './const'
import axios from 'axios'
import config from '../../modules/config'
import { Toast } from 'mint-ui'
let actions = {
    [GET_DETAIL] ({commit},id) {
        let toast = Toast({
            message: '正在加载...',
            iconClass: 'fa fa-spinner fa-pulse',
            duration:-1
        })
        axios.get(config.host + '/db/j/column_v2/'+id+'/').then(res => {
            toast.close()
            commit(SET_DETAIL,res.data)
        })
    }
}
export default actions