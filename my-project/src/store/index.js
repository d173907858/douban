import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home'
import list from './list'
import homedetail from './homedetail'
import columns from './columns'
const store = new Vuex.Store({
    modules:{
        home,list,homedetail,columns
    }


}) 
export default store