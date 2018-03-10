<template>

  <div class="detail-bottom">
      <footer class="box">
          <div class="footerbar" style="width:20%">
              <a href="#" class="btn-share">
                  <i class="fa fa-share-square-o"></i>
              </a>
          </div>
            <div class="footerbar" style="width:20%">
                 <a href="#" class="btn-gift">
                  <i class="fa fa-gift"></i>
              </a>
            </div>
               <div v-if="!is" @click="CONTROL_MODEL({modelShow:true})" class="footerbar" style="width:30%" ><a href="#"  class="btn-self">
                  请登录
              </a></div>
              <router-link  v-else class="footerbar" style="width:30%" :to="{name:'Cars',params:{
                  id:id,
                  price:bookdetail.price,
                  name:bookdetail.title,
                  num:1,
                  type:1
              }
              }" tag="div">
                   <a href="#"  class="btn-self">
                  购买
              </a>
              </router-link>
                <div class="footerbar" style="width:30%">
                     <a href="#"  class="btn-read">
                 试读
              </a>
                </div>
      </footer>
  </div>
</template>
<script>
import{GET_BOOKDETAIL} from '../../../store/homedetail/const'
import {mapMutations} from 'vuex'
import {CONTROL_MODEL} from '../../../store/columnsDetail/const'
import{mapState,mapActions} from 'vuex'
export default {
  name:'detail-bottom',
  data(){
   return{
       id:this.$route.params.id,
       is : localStorage.user_id?true:false
   }
  },
   computed:{
      ...mapState({
          bookdetail:state=>state.homedetail.bookdetail
      })
  },
  methods:{
       ...mapMutations([CONTROL_MODEL]),
  },
  mounted(){
     
     
  }

}
</script>
<style lang="scss" scoped>
    .detail-bottom{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        height: 47px;
        color: #333;
        footer{
            display:flex;
            .footerbar{
                height: 47px;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-align: center;

                    line-height: 47px;
                    i{
                         line-height: 47px;
                         font-size: 25px;
                          color: darkcyan;
                    }
                }
                .btn-share{
                    color: darkcyan;
                    position: relative;
                }
                .btn-share::after{
                    content: '';
    display: block;
    position: absolute;
    top: 13.5px;
    right: -1px;
    width: 1px;
    height: 16px;
        background: #ddd;
            transform-origin: right 0;
                transform: scaleX(.5);
                    top: 14.5px;
                        height: 18px;
                }
                .btn-self{
                    background: #7dd5bd;
                }
                .btn-read{
                        background: #5dcaad;
                }
            }
        }
    }
</style>
