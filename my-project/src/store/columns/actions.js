import {
    GET_COLUMNS,
    SET_BANNERS,
    SET_CHARTS,
    SET_KINDS
} from './const'
import axios from 'axios'
import config from '../../modules/config'
import { Toast } from 'mint-ui'
import qs from 'qs'
let actions = {
    [GET_COLUMNS] ({commit}) {
        let toast = Toast({
            message: '正在加载...',
            iconClass: 'fa fa-spinner fa-pulse',
            duration:-1
        })
        axios.post(config.host + '/j/column_v2/',qs.stringify({
            target:'https://read.douban.com/',
            method:'get'
    })).then(res =>{
            toast.close()
            commit(SET_BANNERS, res.data.banners)
            commit(SET_CHARTS, res.data.charts)
            commit(SET_KINDS, res.data.kinds)
        })
    }
}
export default actions