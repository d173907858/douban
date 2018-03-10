import {LOGIN,GET_USERINFO} from './const'
let actions = {
         LOGIN({commit},user_info){
           commit(GET_USERINFO,{user_info})
           
         }
}
export default actions