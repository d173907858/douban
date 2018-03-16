import{
    SET_BOOKDETAIL,
    GET_BOOKDETAIL
}from './const'
import axios from 'axios'
import config from '../../modules/config'
import qs from 'qs'
let actions ={
  [GET_BOOKDETAIL]({commit},self){
      let id = self.$route.params.id
      axios.post(config.host+'/j/ebook/'+id+'/',qs.stringify({
        target:'https://read.douban.com/',
        method:'get'
      })).then(res=>{
        //    console.log(res.data)
           commit(SET_BOOKDETAIL,res.data)
      })
  }
}

export default actions