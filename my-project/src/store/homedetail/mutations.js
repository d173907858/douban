import {
    SET_BOOKDETAIL,
    CONSTROL_CAR_GOODS
} from './const'


let mutations ={
    [SET_BOOKDETAIL](state,bookdetail){
       state.bookdetail = bookdetail
    },
    [CONSTROL_CAR_GOODS] (state,{id,name,price,num=1,type}){
       
        let isHas = state.cars.some((good,i) => {
            if(id == good.id){
            
                good.num += type==1?num:-num
                if(good.num<=0){
                    console.log('木有啦')
                    state.cars.splice(i,1)
                }
                return true
            }else{
                 return false;
            }
        })
        if(!isHas){
            state.cars.push({
                id,name,price,num,
            })
        }

       
    }
}
export default mutations