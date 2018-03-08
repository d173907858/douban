import Vue from 'vue'
import Vuex from 'vuex'
import columns from './columns'
import columnsDetail from './columnsDetail'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        columns,columnsDetail
    }
})
export default store