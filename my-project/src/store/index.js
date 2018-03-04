import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home'
import List from './list'

const store = new Vuex.Store({
    modules:{
        home,List
    }


}) 
export default store