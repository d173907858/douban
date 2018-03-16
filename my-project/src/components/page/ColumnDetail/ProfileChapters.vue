<template>
  <div class="detail-profile-chapters">
      <div class="hd">
          <h3>已发表&nbsp;&nbsp;{{chapters.total}}&nbsp;&nbsp;篇文章
            <label class="latest-first">
                <input type="checkbox" name="latestFirst" checked="checked">最新发表在前
            </label>
          </h3>
      </div>
      <div class="chapters-container">
          <ul class="chapters-list">
              <li class="chapter-item" v-for="info in chapters.list" :key="info.id">
                  <div class="item-title">
                      <h4>{{info.title}}</h4>
                  </div>
                  <p class="abstract">{{info.abstract}}</p>
                  <div class="foot">
                      <time>{{info.onSaleTime}}</time>
                      <span class="fa fa-comment-o comment">{{info.commentCount}}</span>
                      <span class="fa fa-book read">{{info.readCount}}</span>
                  </div>
              </li>
          </ul>
          <a href="javascript:;" v-if="hasMore" @click="loadMore" class="load-more" v-text="loadmore">{{loadmore}}</a>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name:'detail-profile-chapters',
  props:['id'],
  data () {
    return {
        chapters: {
            list:[],
            total:''
        },
        count:10,
        start:0,
        hasMore:true,
        loadmore:'点击加载更多'
    }
  },
  methods: {
      getChapters () {
          let {count,start} = this
          axios.post(this.$root.config.host + '/j/column_v2/' + this.id +'/chapters',qs.stringify({
            target:'https://read.douban.com/',
            method:'get',
            start:this.start,limit:this.count,latestFirst:1
        })).then(res=>{
              this.loadmore = '点击加载更多'
              this.chapters.total = res.data.total
              this.chapters.list = this.chapters.list.concat(res.data.list)
              this.hasMore = Boolean(!(res.data.total === this.chapters.list.length))
               this.start += this.hasMore?10:0
          })
      },
      loadMore () {
        if(this.hasMore) {
            this.getChapters()
        }
        this.loadmore = '加载中...'
      }
  },
  created () {
      this.getChapters()
  }
}
</script>

<style lang="scss" escoped>
.detail-profile-chapters {
    .hd{
        width: 100%;
        background:#ebf0f2;
        overflow: hidden;
        h3{
            line-height: .38rem;
            font-size: .14rem;
            font-weight: bold;
            color: #333;
            padding: .15rem 0;
            .latest-first {
                float: right;
                cursor: default;
            }
        }
    }
    .chapters-container {
        .load-more{
            margin-bottom:.5rem;
            line-height: .42rem;
            height: .42rem;
            display: block;
            width: 100%;
            color: #68abb7;
            background:#fff;
            text-align: center;
            position: relative;
        }
        .load-more::after{
            content: '';
            position: absolute;
            pointer-events: none;
            top: 0;
            left: 0;
            bottom: -100%;
            right: -100%;
            border: 1px solid #ddd;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
        }
        .chapter-item::after{
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 0;
            border-bottom: 1px solid #ddd;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
            -webkit-transform-origin: 0 bottom;
            transform-origin: 0 bottom;
        }
        .chapter-item {
            padding: .12rem .15rem;
            color: #333;
            position: relative;
            display: list-item;
             text-align: -webkit-match-parent;
            .item-title {
                margin-bottom: 2px;
                margin-top: 5px;
                height: auto;
                width: 100%;
                overflow: hidden;
                h4{
                    font-size: .16rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #333;
                    font-weight: bold;
                }
            }
            .abstract {
                font-size: .14rem;
                overflow: hidden;
                word-wrap: break-word;
                line-height: 1.4;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }
            .foot {
                margin-top: 6px;
                color: #6a6a6a;
                line-height: .12rem;
                font-size: .12rem;
                .comment,.read {
                    margin-left: .1rem;
                    float: right;
                }
            }
        }
    }
   
}
</style>
