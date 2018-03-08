import Vue from 'vue'
import Vuex from 'vuex'
import columns from './columns'
import columnsDetail from './columnsDetail'

Vue.use(Vuex)
import home from './home'
import list from './list'
import homedetail from './homedetail'
const store = new Vuex.Store({
    modules:{
        home,list,homedetail,columns,columnsDetail
    }


}) 
export default store