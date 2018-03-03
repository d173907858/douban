<template>
  <div class="columns-content">
      <div class="columns-item" v-for="chart in charts" :key="chart.id">
          <h3>{{chart.name}}</h3>
          <div class="swiper-container books">
            <div class="swiper-wrapper">
                <div class="swiper-slide book-content" v-for="column in chart.columns" :key="column.id">
                    <div class="book-box">
                        <div class="cover">
                            <img :src="column.retina_cover_url" alt="">
                        </div>
                        <h4 class="book-title">{{column.title}}</h4>
                        <p class="book-info">{{column.author}}</p>
                        <p class="subscribe-num">{{column.subscriber_num}}人订阅</p>
                    </div>
                </div>
            </div>
            <div class="swiper-scrollbar"></div>
        </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name: 'columns-content',
  data () {
      return {
         charts: {
             columns:{}
         }
      }
  },
  methods: {
      getCharts () {
          axios.get(this.$root.config.host + '/db/j/column_v2/').then(res =>{
              this.charts = res.data.charts
          })
      }
  },
  created () {
      this.getCharts()
  },
  updated () {
      new Swiper('.books', {
          slidesPerView : 3,
          resistance : false,
          centeredSlides : false,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          }
      })
  }
}
</script>

<style lang="scss" escoped>
.swiper-scrollbar {
    background: 0;
}
.columns-item {
    margin-top: 40px;
    padding: 0 12px;
    h3 {
        padding: 0 15px;
        margin-bottom: 15px;
        font-size: 16px;
        font-weight: bold;
    }
    .books {
        overflow-y: hidden;
        overflow-x: scroll;
        .book-box {
            width: 95px;
            margin-right: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .cover {
                position: relative;
                overflow: hidden;
                box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
                background: #fff;
                img {
                    border: none;
                    max-width: 100%;
                    vertical-align: middle;
                }
            }
            .book-title {
                color: #222;
                font-size: 12px;
                font-weight: bold;
                margin-top: 6px;
                line-height: 16px;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                word-break: word-wrap;
            }
            .book-info {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #999;
                font-size: 12px;
            }
            .subscribe-num {
                font-size: 12px;
                color: #68abb7;
            }
        }
    }
}
</style>
