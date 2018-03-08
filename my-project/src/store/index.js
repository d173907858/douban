import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home'
import list from './list'
import homedetail from './homedetail'
const store = new Vuex.Store({
    modules:{
        home,list,homedetail
    }


}) 
export default store