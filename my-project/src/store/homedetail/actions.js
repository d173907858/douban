import{
    SET_BOOKDETAIL,
    GET_BOOKDETAIL
}from './const'
import axios from 'axios'
import config from '../../modules/config'

let actions ={
  [GET_BOOKDETAIL]({commit},self){
      let id = self.$route.params.id
      axios.get(config.host+'/db/j/ebook/'+id+'/',{
      
      }).then(res=>{
           console.log(res.data)
           commit(SET_BOOKDETAIL,res.data)
      })
  }
}

export default actions