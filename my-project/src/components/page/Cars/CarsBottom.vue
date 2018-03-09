<template>

  <div class="cars-bottom">
      <footer class="box">
          <div class="footerbar left">
           <span class="one">实际付款</span>
           <span class="two">￥{{all_info.all_price | math}}</span>
          </div>
          
              <div class="footerbar right">
                   <a href="#"  class="btn-self">
                  确认购买
              </a>
              </div>
      </footer>
  </div>
</template>
<script>
import{mapState,mapMutations,mapGetters} from 'vuex'
export default {
  name:'cars-bottom',
  computed:{
       ...mapGetters(['all_info'])
  }
}
</script>
<style lang="scss" scoped>
    .cars-bottom{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        height: 47px;
        color: #333;
        footer{
            display:flex;
            .left{
                display: flex;
                align-items: center;
                justify-content: space-between;
                    -webkit-box-flex: 1;
                    font-size: 16px;
                        flex: 1 1 auto;
                        padding-left: 15px;
                        .two{
                                font-weight: bold;
   
    color: #61b39b;
                        }
            }
            .right{
                border: none;
    border-radius: 0;
    width: 100px;
    height: 46px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100px;
    flex: 0 0 100px;
    line-height: 46px;
   
    background: #5dcaad;
    margin-left: 15px;
            }
            .footerbar{
                height: 47px;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                     color: #fff;
                    line-height: 47px;
                      font-size: 17px;
                    
                }
               
               
                .btn-self{
                    background: #7dd5bd;
                }
               
            }
        }
    }
</style>