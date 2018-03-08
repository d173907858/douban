<template>
    <div class="columns-item">
        <div class="item-content" v-for="chart in charts" :key="chart.id">
            <h3>{{chart.name}}</h3>
            <div class="swiper-container books">
                <div class="swiper-wrapper">
                    <div class="swiper-slide book-content" v-for="column in chart.columns" :key="column.id">
                        <router-link :to="{name:'Column',params:{id:column.id}}">
                            <div class="cover">
                                <img :src="column.retina_cover_url" alt="">
                            </div>
                            <h4 class="book-title">{{column.title}}</h4>
                            <p class="book-info">{{column.author}}</p>
                            <p class="subscribe-num">{{column.subscriber_num}}人订阅</p>
                        </router-link>
                    </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import {mapState} from 'vuex'
import {GET_COLUMNS} from '../../../store/columns/const'
export default {
  name: 'columns-item',
  methods: {
      getCharts () {
          this.$store.dispatch(GET_COLUMNS)
      }
  },
  computed: {
    ...mapState({
        charts: state => state.columns.charts
    })
  },
  created () {
      this.getCharts()
  },
  updated () {
      new Swiper('.books', {
          slidesPerView : 3,
          resistanceRatio : 0.1,
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
.item-content {
    margin-top: .4rem;
    h3 {
        margin-bottom: .15rem;
        font-size: .16rem;
        font-weight: bold;
    }
    .books {
        .book-content {
            width: .95rem!important;
            margin-right: .15rem;
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
                font-size: .12rem;
                font-weight: bold;
                margin-top: 6px;
                line-height: .16rem;
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
                font-size: .12rem;
            }
            .subscribe-num {
                font-size: .12rem;
                color: #68abb7;
            }
        }
    }
}
</style>
