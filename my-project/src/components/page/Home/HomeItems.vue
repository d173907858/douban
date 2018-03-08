<template>
  <div class="home-items">
  <section class="items"  v-for="(billboard,i) in billboards" :key="i">
      <h3 class="tiltle"  @click="RE_BOOKS()">
           {{billboard.name}}
          <router-link :to="{name:'List',params:{id:billboard.name}}" tag="i" class="fa fa-chevron-circle-right"></router-link>
      </h3>
      <div class="items-box" >
          <div  class="items-book" v-for="(works,index) in billboard.works" :key="index" >
          <router-link :to="{name:'HomeDetail',params:{id:works.id}}" tag="div">
              <img :src="works.cover" alt="">
              <h3 class="book-title">{{works.title}}</h3>
              <p class="book-autor">{{works.autor}}</p>
              <p class="book-price">￥{{works.price | math}}</p>
          </router-link>
          </div>
      </div>
      
  </section>
  </div>
</template>
<script>
import Swiper from 'swiper'
import {mapState,mapMutations} from 'vuex'
import {DGET_BILLBOARDS} from '../../../store/home/const'
import {RE_BOOKS} from '../../../store/list/const'
export default {
  name:'home-items',
  methods:{
      get_billboards(){
          this.$store.dispatch(DGET_BILLBOARDS)
        //   console.log(this.billboards)
      },
      ...mapMutations([RE_BOOKS])
     
  },
  computed:{

      ...mapState({
          billboards:state=>state.home.billboards.data,
          titles:state=>state.home.titles
       
      }),
     

  },
   created () {
      this.get_billboards();
      
      
     
  },
  updated(){

    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
      });
       
 
  },
  mounted(){
      
  }


}
</script>
<style lang="scss" scoped>
    .home-items{
        .items{
                padding-top: 20px;
                    padding: 0 15px;
                        margin-bottom:12px;
                        .tiltle{
                                display: flex;
                                justify-content: space-between;

                                font-weight: bold;
                                color: #333;
                                line-height: 1;
                                font-size: 17px;
                                i{
                                        width: 24px;
                                        height: 24px;
                                        border-radius: 12px;
                                        text-align: center;
                                        margin-top: -3px;
                                        color:#68abb7;
                                        font-size: 28px
                                }
                        }
                        .items-box{
                            margin-top: 20px;
                            display: flex;
                            overflow-x: scroll;
                        .items-book{
                                width: 95px;
                                    margin-right: 15px;
                                    img{
                                            width: 95px;
                                            height: 142px;
                                    }
                                   .book-title{
                                            color: #222;
    margin-top: 6px;
    font-size: 12px;
    line-height: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
                                    }
                                    .book-autor{
                                            font-size: 12px;
                                            color: #737373;
                                            white-space: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                    }
                                    .book-price{
                                            font-size: 12px;
                                             color: #61b39b
                                    }

                        }
                        }
                        .items-box::-webkit-scrollbar {display:none}
        }
    }
</style>
