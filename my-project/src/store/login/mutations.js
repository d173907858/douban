import{SET_USERINFO,GET_USERINFO,RE_USERINFO} from './const'
import { Toast } from 'mint-ui';
let mutations={
    [SET_USERINFO](state,user_info,cb){
        let {user_id,user_pwd,user_name} = user_info
       
    
        if(user_id == ""||user_name==""||user_pwd==""){
            Toast({
                message: '不能为空',
                iconClass: 'fa fa-close'
              })
              return false
        } 
        

        
        
        
         let is=  state.user_info.some(function(user_infos){
           
            if(user_infos.user_id == user_id){
                Toast({
                    message: '用户已存在',
                    iconClass: 'fa fa-close'
                  })
                  return true
            }else {
                return false
            }
           
        })
        if(!is){
     state.user_info.push(user_info)
        Toast({
            message: '注册成功',
            iconClass: 'fa fa-check'
          })
        }
    },
    [GET_USERINFO](state,user_info){
         
        
        let {user_id,user_pwd} = user_info.user_info
        
         let is=  state.user_info.some(function(user_infos){
             
            

             if(user_infos.user_id ==user_id&&user_infos.user_pwd == user_pwd){
                localStorage.user_id = user_infos.user_id
                localStorage.user_name = user_infos.user_name
                 return true
                
             }else{
                 return false
             }
            
         })
         if(is){
             localStorage.is = is
             state.is = is
         }else{
            Toast({
                message: '用户名或密码错误',
                iconClass: 'fa fa-close'
              })
         }
         
    },
    [RE_USERINFO](state){
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        state.is = false
    }
  
}
export default mutations