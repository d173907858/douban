import {
    GET_BOOKS,
    SET_BOOKS,
    GET_FRISTBOOKS
} from './const'

import axios from 'axios'
import config from '../../modules/config'
import { Toast } from 'mint-ui'
import qs from 'qs'
let start = 0;
let bookid =''


let actions ={
    
    [GET_BOOKS] ({commit},self,cb) {
        
         let id= self.$route.params.id
         let toast = Toast({
            message: '正在加载...',
            iconClass: 'fa fa-spinner fa-pulse',
            duration:-1
        });
        
        axios.post(config.host+'/j/category/'+id,qs.stringify({
            target:'https://read.douban.com/',
            method:'get',
            start,limit:10
          })).then(res => {
             toast.close()
            commit(SET_BOOKS,res.data)
            // console.log(res.data)
            start+=10
        })
    },
    [GET_FRISTBOOKS] ({commit},self,cb) {
        let id= self.$route.params.id
        let toast = Toast({
           message: '正在加载...',
           iconClass: 'fa fa-spinner fa-pulse',
           duration:-1
       });
        
            start = 0
            bookid = id
        
        // let params = new URLSearchParams()
        // params.append('start','0')
        // params.append('limit','10')
       axios.post(config.host+'/j/category/'+id,qs.stringify({
        target:'https://read.douban.com/',
        method:'get',
        start,limit:10
      })).then(res => {
            toast.close()
           commit(SET_BOOKS,res.data)
           // console.log(res.data)
           start+=10
       })
   }
}

export default actions