import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import home from './home'
import list from './list'
import homedetail from './homedetail'
import columns from './columns'
import columnsDetail from './columnsDetail'
import login from './login'
const store = new Vuex.Store({
    modules:{
        home,list,homedetail,columns,columnsDetail,login
    }
}) 
export default store