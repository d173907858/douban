import {
    SET_DETAIL,
    SET_MODEL,
    CONTROL_MODEL
} from './const'
let mutations = {
    [SET_DETAIL] (state, detail) {
        state.detail = detail
    },
    [CONTROL_MODEL] (state,{modelShow=true}) {
        state.modelShow = modelShow
    }
}
export default mutations