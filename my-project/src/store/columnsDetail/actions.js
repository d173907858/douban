import {
    SET_DETAIL,
    GET_DETAIL
} from './const'
import axios from 'axios'
import config from '../../modules/config'
let actions = {
    [GET_DETAIL] ({commit},id) {
        axios.get(config.host + '/db/j/column_v2/'+id+'/').then(res => {
            commit(SET_DETAIL,res.data)
        })
    }
}
export default actions