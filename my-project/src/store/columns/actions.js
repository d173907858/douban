import {
    GET_COLUMNS,
    SET_BANNERS,
    SET_CHARTS,
    SET_KINDS
} from './const'
import axios from 'axios'
import config from '../../modules/config'
let actions = {
    [GET_COLUMNS] ({commit}) {
        axios.get(config.host + '/db/j/column_v2/').then(res =>{
            commit(SET_BANNERS, res.data.banners)
            commit(SET_CHARTS, res.data.charts)
            commit(SET_KINDS, res.data.kinds)
        })
    }

}
export default actions