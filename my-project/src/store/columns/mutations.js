import {
    SET_BANNERS,
    SET_CHARTS,
    SET_KINDS
} from './const'
let mutations = {
    [SET_BANNERS] (state, banners) {
        state.banners = banners
    },
    [SET_CHARTS] (state, charts) {
        state.charts = charts
    },
    [SET_KINDS] (state, kinds) {
        state.kinds = kinds
    }
}
export default mutations