<template>
     <div class="cars-content">
         <div class="payment">
           <div class="bill">
             <div class="price-info">
               <span>共计： {{all_info.all_price | math}}</span>
             </div>
             <div class="book-detail">
               <ul>
                 <li v-for="good in cars" :key="good.id">
                   <div class="title"><p>{{good.name}}</p></div>
                   <div class="num">
                     <button class="sub"  @click="CONSTROL_CAR_GOODS({
                        id:good.id,type:-1
                    })">-</button>
                     <span>{{good.num}}</span>
                     <button class="add"  @click="CONSTROL_CAR_GOODS({
                        id:good.id,type:1
                    })">+</button>
                   </div>
                   <div class="price">{{good.num*good.price | math}}</div>
                 </li>
               </ul>
             </div>
             <div class="final-price">
               <span>￥</span>
             {{all_info.all_price | math}}
             </div>
           </div>
           <div class="pay-from">
             <div class="pay-balance">
               <h2>余额支付：</h2>
               <span>￥0.00</span>
             </div>
             <div class="pay-other">
               <div class="title">
                 <h2>其他方式支付：</h2>
                 <span> {{all_info.all_price | math}}</span>
               </div>
             
             <div class="pay-selectors">
               <div class="zfb" @click="ispay = true" :class="[ispay?'native' : '']">
                 <div class="zfbbox">
                 <i class="iconfont icon-alipay"></i>
                 <span>支付宝</span></div>
                 <i v-if="ispay" class="fa fa-check-circle"></i>
               </div>
               <div class="wx" @click="ispay = false" :class="[!ispay?'native' : '']" >
                 <div class="wxbox">
                 <i class="iconfont icon-wx"></i>
                 <span>微信支付</span></div>
                 <i v-if="!ispay" class="fa fa-check-circle"></i>
               </div>
             </div>
             </div>
             <div class="announcements-section"><h3>说明</h3><ul><li>你正在购买豆瓣阅读提供的数字阅读作品</li><li>购买成功后不可退回</li><li>已购买的内容可通过豆瓣账号同步到其他设备上阅读</li><li>如遇到问题，请关注微信服务号「豆瓣阅读服务号」后进行反馈，或致电客服 4008353331（工作日 10:00–18:00）</li></ul></div>
           </div>
         </div>
     </div>
</template>
<script>
import {CONSTROL_CAR_GOODS} from '../../../store/homedetail/const' 
import{mapState,mapMutations,mapGetters} from 'vuex'
export default {
  name:'cars-content',
  data(){
    return{
      ispay:true
    }
  },
  created(){
    

    
     console.log(this.$route.params)
     let params = this.$route.params
     let id = params.id
     let num = params.num
     let type = params.type
     let price = params.price
     let name = params.name
   
     this.setcars({id,num,type,price,name})
  },

  methods:{
    setcars({id,num,type,price,name}){
       this.$store.commit(CONSTROL_CAR_GOODS,{id,num,type,price,name})
      
    },
    ...mapMutations([CONSTROL_CAR_GOODS])
  },
  computed:{
      ...mapState({
        cars:state=>state.homedetail.cars
      }),
       ...mapGetters(['all_info'])
  }

}
</script>
<style lang="scss" scoped>
      .cars-content{
        height:100%;
         background: #e4ecee;
         
        .payment{
         
          padding-left: 15px;
    padding-right: 15px;
    .bill{
      position: relative;
          font-size: 13px;
          padding: 122px 13px 18px;
    margin-top: -100px;
    background-color: #fff;
    .price-info{
          box-sizing: border-box;
    border-bottom: 1px solid #333;
 
    padding-bottom: 22px;
    margin-bottom: 22px;
        text-align: center;
    }
    .book-detail{
          box-sizing: border-box;
    border-bottom: 1px solid #333;
    ul{
      li{
            margin-bottom: 19px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
       .title{
             font-size: 12px;
             width: 180px;
             
       }
       .price{
         width: 50px;
       }
      }
    }
    }
    .final-price{
font-size: 39px;
    text-align: right;
    font-weight: bold;
    line-height: 1;
    margin: 18px 0 45px;
    color: #61b39b;
    span{
      font-size: 17px;
    margin-right: .1em;
    }
    }
    }
    .bill::after{
       background-size: 12px 12px;
    bottom: -6px;
    height: 6px;
    margin-top: -6px;
    content: '';
    background-image: linear-gradient(135deg,#fff 46%,#abc6cf 50%,transparent 50%),linear-gradient(-135deg,#fff 46%,#abc6cf 50%,transparent 50%);
    background-position: bottom center;
    background-repeat: repeat-x;
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
    background-size: 14px 14px;
    bottom: -7px;
    height: 7px;
    margin-top: -7px;
    }
    .pay-from{
          margin-top: 28px;
          .pay-balance{
               display: flex;
              background: #fff;
              padding: 0 13px;
              h2{
                font-size: 14px;
                    height: 47px;
    line-height: 47px
              }
              span{
                line-height: 47px;
              }
              i{
                font-size: 14px;
                color: #5dcaad;

              }
          }
          .pay-other{
            height: 100px;
                margin-top: 8px;
    padding-bottom: 24px;
    position: relative;
    background: #fff;
    padding: 0 13px;
    .title{
          height: 47px;
    line-height: 47px;
    display: flex;
    h2{
       height: 47px;
    line-height: 47px
    }
    span{
          line-height: 47px;
    }
    }
    .pay-selectors{
      .native{
        border-color: #5dcaad!important;
      }
    margin-right: -7px;
        display: flex;
       
        .zfb{
          width: 50%;
            border: 0.01rem solid #ccc;
          margin-right: 7px;
    position: relative;
    height: 37px;
        display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 2px;
              .zfbbox{
                margin-left: 5px;
          display: flex;
          align-content: center;
          line-height: 30px;
            i{
               font-size: 30px;
              color: 	#00BFFF
            }
            i::before{
               line-height: 40px;
            }
            span{
                   margin-left: 7px;
                  line-height: 40px; 
                 
            }
              }
            .fa{
                font-size: 17px;
               color: #5dcaad;
                margin-right: 10px;
            }
        }
        .wx{

              border:1px solid #ccc;
              margin-right: 7px;
              width: 50%;
              justify-content: space-between;
            border-radius: 2px;
   
    height: 37px;
        display: flex;
        align-items: center;
        .wxbox{
            margin-left: 5px;
          display: flex;
          align-content: center;
          line-height: 30px;  i{
              font-size: 30px;
              color: #62b900;
              
            }
            i::before{
              line-height: 40px;
            }
            span{
                  margin-left: 7px;
                  line-height: 40px;  
            }}
      
            .fa{
              font-size: 16 px;
               color: #5dcaad;
               margin-right: 10px;
               font-size: 17px;
            }
        }
    }
          }
          .announcements-section{
            margin-top:30px;
            margin-bottom: 50px;
            h3{
                  margin: 5px 0 10px;
                      font-size: 18px;
                          font-weight: bold;
            }
            li{
              list-style: 	disc;
              margin-left: 20px;
              margin-top: 5px;
            }
          }
    }
        }
      }
</style>
