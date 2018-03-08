<template>
  <div class="detail-items">
      <section class="profile">
          <div class="profile-main">
              <div class="cover">
                  <img :src="bookdetail.cover">
              </div>
              <h2>{{bookdetail.title}}</h2>
              <div class="rating">{{bookdetail.average_rating==0?'暂无评价':bookdetail.average_rating*2}}</div>
              <div class="meta">
                  <div class="author">{{bookdetail.original_author}}</div>
                  <div class="category">{{bookdetail.kind}}</div>
                  <div class="publishing" >{{bookdetail.publisher}}/{{bookdetail.publish_time}}</div>
                  <div class="words-num">{{bookdetail.round_word_count}}</div> 
                  <div class="price">￥{{bookdetail.price | math}}</div>
              </div>
          </div>
      </section>
      <div class="other">
          <section class="inner">
              <h3>简介</h3>
              <div class="bd collapsed-box">
                  <div v-if="isZhuan" class="abstract">
                       <p>{{bookdetail.abstract.slice(0,140)}}</p>
                  </div>
                  <div v-else class="full">
                         <p>{{bookdetail.abstract}}</p>
                  </div>
                  <i @click="isZhuan=!isZhuan" class="open" :class="[isZhuan?'fa fa-angle-down':'fa fa-angle-up']"></i>
              </div>
              
          </section>
          <section class="toc">
             <div class="toc-inner">
                 <h3>目录</h3>
                 <div class="toc-box">
                     <ul v-if="isZhuan1" class="list">
                         <li v-for="(table_of_content,i) in bookdetail.table_of_contents.slice(0,4)" :key="i" >{{table_of_content.title}}</li>
                         
                     </ul>
                     <ul  v-else class="list-more">
                         <li  v-for="(table_of_content,i) in bookdetail.table_of_contents" :key="i">{{table_of_content.title}}</li>
                          
                     </ul>
 <div  @click="isZhuan1=!isZhuan1" class="open"><i :class="[isZhuan1?'fa fa-angle-down':'fa fa-angle-up']"></i></div>

                 </div>
             </div>

          </section>
          <section class="tags">
              <div class="tags-inner">
                  <h3>标签</h3>
                  <div class="bd">
                      <ul>
                          <li v-for="(tag,i) in bookdetail.tags" :key="i">{{tag.tag }}</li>
                          
                      </ul>
                  </div>
              </div>
          </section>
          <section class="author">
              <div class="author-inner">
                  <h3>出版方</h3>
                  <div class="hd">
                      <div class="col-media">
                          <div class="m-cover"><img :src="bookdetail.agent.picture"></div>
                          <div class="m-name">{{bookdetail.agent.name}}</div>
                      </div>
                      <div class="co-box">
                          <p>{{bookdetail.agent.intro}}</p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
      </div>   
</template>
<script>
import{GET_BOOKDETAIL} from '../../../store/homedetail/const'
import{mapState,mapActions} from 'vuex'
export default {
  name:"detail-items",
  data(){
      return{
          isZhuan : true,
          isZhuan1 :true,
          
          
      }
  },
  methods:{
      getbookdetail(){
             console.log(this)
             let self = this
             this.$store.dispatch(GET_BOOKDETAIL,self)
             
      }
  },
  computed:{
      ...mapState({
          bookdetail:state=>state.homedetail.bookdetail
      })
  },
  created(){
      this.getbookdetail()
      
      
  }

}
</script>
<style lang="scss" scoped>
   .detail-items{
      
       .profile{
               color: #a6a6a6;
    font-size: 14px;
    background: #fff;
    padding: 0;
    .profile-main{
            padding: 20px 15px 10px;
                overflow: hidden;
                .cover{
                        float: right;
                        margin: 5px 2px 0 0;
                            margin-left: 13px;
                            margin-bottom: 5px;
                            img{
                                    width: 95px;
                                     height: 142px;
                            }
                }
                h2{
                        color: #333;
                        font-weight: bold;
                        line-height: 1.3;
                            font-size: 21px;
                }
                .rating{
                        line-height: 13px;
                         margin: 12px 0 11px;
                }
                .price{
                        color: #61b39b;
                        font-size: 16px;
                        font-weight: 500;
                        margin-top: 25px;
                }
                
    }
       }
       .other{
           .inner{
                   padding: 0;
               font-size: 16px;
                   border-bottom: 1px solid #ddd;
               h3{
                   margin-top: 20px;
                       padding: 0 15px;
                           margin-bottom: 12px;
                               font-weight: bold;
                        color: #333;
                        line-height: 1;
                            font-size: 17px;
               }
               .bd{
                   padding-bottom: 20px;
                       padding: 0 15px;
               }
               .collapsed-box{
                   margin-top: 10px;
                   .abstract{
                       transform-origin: 0px 0px 0px;
                        opacity: 1;
                        transform: scale(1, 1);
                        p{
                            color:#333;
                            font-weight:100;
                        }
                   }
                   .full{
                           transform-origin: 0px 0px 0px;
                            opacity: 1;
                            transform: scale(1, 1);
                            p{
                            color:#333;
                            font-weight:100;
                        }
                   }
               }
               .open{
                     
                           text-align: center;
                     
                        height: 25px;
                        line-height: 1.4;
                         display: block;
                          color:#61b39b 
                        
               }
           }
           .toc{
               .toc-inner{
                       font-size: 16px;
                           border-bottom: 1px solid #ddd;
                           h3{
                                   margin-top: 20px;
                       padding: 0 15px;
                           margin-bottom: 12px;
                               font-weight: bold;
                        color: #333;
                        line-height: 1;
                            font-size: 17px;
                           }
                           .toc-box{
                                   padding-bottom: 20px;
                                       padding: 0 15px; 
                                           -webkit-tap-highlight-color: rgba(255,255,255,0);
                                           ul{
                                               li{
                                                       margin-left: 1.2em;
                                               }
                                               li::before{
                                          display: inline-block;
                                            text-align: center;
                                            content: '•';
                                            color: #a6a6a6;
                                            width: 1.2em;
                                            line-height: 1;
                                            margin-left: -1.2em;
                                               }
                                           }
                           }
               }
               .open{
                       margin-bottom: 10px;
                           text-align: center;
                        cursor: pointer;
                        height: 25px;
                        line-height: 1.4;
                        i{
                            color:#61b39b 
                        }
               }
           }
           .tags{
               .tags-inner{
                     padding: 0;
               font-size: 16px;
                   border-bottom: 1px solid #ddd;
                   min-height: 110px;
                   h3{
                       
                                   margin-top: 20px;
                       padding: 0 15px;
                           margin-bottom: 12px;
                               font-weight: bold;
                        color: #333;
                        line-height: 1;
                            font-size: 17px;
                   }
                   .bd{
                           padding-bottom: 20px;
                               padding: 0 15px;
                               margin-bottom: 20px;
                               ul{     
                                       margin-right: -5px;
                                    
                                       li{   
                                            float: left;
                                               display: inline-block;
                                                color: #fff;
                                                height: 35px;
                                                line-height: 35px;
                                                padding: 0 10px;
                                                background-color: #68abb7;
                                                margin: 0 5px 5px 0;
                                                color: #fff !important;
                                                
                                       }
                               }
                   }
               }

           }
           .author{
               margin-bottom: 20px;
               .author-inner{
                    padding: 0;
               font-size: 16px;
                   border-bottom: 1px solid #ddd;

               }
                h3{
                       
                                   margin-top: 20px;
                       padding: 0 15px;
                           margin-bottom: 12px;
                               font-weight: bold;
                        color: #333;
                        line-height: 1;
                            font-size: 17px;
                   }
                   .hd{
                       padding: 0 15px;
                           padding-bottom: 20px;
                           .col-media{
                               margin-bottom: 13px;
                               display: flex;
                               .m-cover{
                                       margin-right: 13px;
                                           width: 40px;
                                     height: 40px;
                                     img{
                                             width: 100%;
                                            height: 100%;
                                            border-radius: 100px;
                                            display: block;
                                            border: none;
                                            max-width: 100%;
                                            vertical-align: middle;
                                     }
                               }
                               .m-name{
                                       height: 48px;
                                        line-height: 48px;
                                        margin: 0;
                                            color: #333;
                               }
                           }
                           .co-box{
                               font-size: 16px;
                               margin-bottom: 20px;
                           }
                   }
           }
       }
   }
</style>

