<template>
  <div class="list-items">
      <section class="items-box">
          <ul>
              <router-link class="item" v-for="book in books" :key="book.id" :to="{name:'HomeDetail',params:{id:book.id}}" tag="div">
                  <div class="cover"><img :src="book.cover"></div>
                  <div class="info">
                      <h4 class="title">
                          <span class="text">{{book.title}}</span>
                      </h4>
                      <div class="autor">{{book.author}}</div>
                      <div class="intro">{{book.abstract}}</div>
                      <div class="price">￥{{book.price | math}}</div>
                  </div>
              </router-link>
          </ul>
          <div class="loadmore" @click="get_billboards()"><i v-if="is" >点击加载更多</i></div>
          
      </section>
  </div>
</template>
<script>
import {mapState, Store,mapActions,mapMutations} from 'vuex'
import {GET_BOOKS,RE_BOOKS,GET_FRISTBOOKS} from '../../../store/list/const'
import { Spinner } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name:'list-items',
  props:['id'],
  data(){
    return {
        is:true
    }
  },
   beforeCreate(){
      this.$store.commit(RE_BOOKS)
  },
  methods:{
      get_billboards(){
        
          let self = this
          this.$store.dispatch(GET_BOOKS,self)
          
       
        
      },
         get_fristbillboards(){
        
          let self = this
          this.$store.dispatch(GET_FRISTBOOKS,self)
          
       
        
      },
      getparams(){
          var self = this
          
      },
      loadmore(){
        this.is = !this
       
      },
     
     ...mapActions ([GET_BOOKS,GET_FRISTBOOKS]),
     ...mapMutations([RE_BOOKS])
  },
  computed:{

      ...mapState({
          books:state=>state.list.books
          
       
      })
     

  },
   created () {
      this.get_fristbillboards();
      console.log(this.books)
      
     
  }
}
</script>
<style lang="scss" scoped>
    .list-items{
    ul{
        height: auto;
        .item{
                
                    padding: 20px 15px;
                      overflow: hidden;
                  border-bottom: 1px solid #ddd;
                  display: flex;
                  
                  .cover{
                          margin-bottom: 0;
                              width: 95px;
                           height: 142px;
                               overflow: hidden;
                               img{
                                       width: 95px;
                                        height: 142px;
                               }
                  }
                  .info{
                      margin-left: 10px;
                      .title{
                              font-size: 16px;
                                  font-weight: bold;
                                line-height: 1.4;
                                margin-bottom: 2px;
                                color: #333;
                                display: -webkit-box;
                                overflow: hidden;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                .text{
                                        margin-right: 5px;
                                }
                      }
                      .autor{margin-top: 10px;
                              white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis ;
        color: #a6a6a6;
                      }
                      .intro{
                          margin-top: 10px;
                          width: 237px;
                             color: #a6a6a6;
                              display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
                      }
                      .price{
                              margin: 6px 0 8px;
                          
                                 color: #61b39b;
                           
                      }
                  }
        }
    }
.loadmore{
        cursor: pointer;
    text-align: center;
    font-size: 15px;
    padding: 0;
    height: 45px;
    line-height: 45px;
    color: #8e8e8e;
    background: #fff;
    background-size: 13px;
    position: relative;
    margin-bottom: 50px;
}
    }
</style>
