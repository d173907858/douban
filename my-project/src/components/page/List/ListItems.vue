<template>
  <div class="list-items">
      <section class="items-box">
          <ul>
              <div class="item">
                  <div class="cover"><img src="https://img3.doubanio.com/view/ark_article_cover/retina/public/46803110.jpg?v=1518317908.0"></div>
                  <div class="info">
                      <h4 class="title">
                          <span class="text">印象手绘</span>
                      </h4>
                      <div class="autor">ssss</div>
                      <div class="intro">xuan</div>
                      <div class="price">￥</div>
                  </div>
              </div>
          </ul>
      </section>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {DGET_DATA} from '../../../store/List/const'
export default {
  name:'list-items',
  methods:{
      get_billboards(){
          this.$store.dispatch(DGET_DATA)
          console.log(this.data)
      },
     
  },
  computed:{

      ...mapState({
          data:state=>state.List.data,
        
       
      }),
     

  },
   created () {
      this.get_billboards();
      
      
     
  },

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
                      .autor{
                              white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis ;
        color: #a6a6a6;
                      }
                      .intro{
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

    }
</style>
