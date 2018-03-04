import Vue from 'vue'
import Vuex from 'vuex'
import columns from './columns'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        columns
    }
})
export default store