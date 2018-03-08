import {
    GET_COLUMNS,
    SET_BANNERS,
    SET_CHARTS,
    SET_KINDS
} from './const'
import axios from 'axios'
import config from '../../modules/config'
import Vue from 'vue'
import Swiper from 'swiper'
let actions = {
    [GET_COLUMNS] ({commit}) {
        axios.get(config.host + '/db/j/column_v2/').then(res =>{
            commit(SET_BANNERS, res.data.banners)
            commit(SET_CHARTS, res.data.charts)
            commit(SET_KINDS, res.data.kinds)
            Vue.nextTick(function () {
                new Swiper('.books', {
                    slidesPerView : 3,
                    resistance : false,
                    centeredSlides : false,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: true
                    }
                })
                 new Swiper('.banner', {
                    loop:true,
                    autoplay: true,
                    disableOnInteraction: false,
                    allowTouchMove: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    }
                })
            })
        })
    }
}
export default actions