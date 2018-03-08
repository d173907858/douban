<template>
    <div class="app-columns-banner">
        <h1>专栏连载</h1>
        <span class="link-more">了解更多 <i class="fa fa-angle-right"></i></span>
        <div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
                    <img width="100%" :src="banner.image_url" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
</template>

<script>
// https://read.douban.com/j/column_v2/
import Swiper from 'swiper'
import {mapState} from 'vuex'
import {GET_COLUMNS} from '../../../store/columns/const'
export default {
  name: 'app-columns-banner',
  methods: {
      getBanners () {
        this.$store.dispatch(GET_COLUMNS)
      }
  },
  computed: {
    ...mapState({
        banners: state => state.columns.banners
    })
  },
  created () {
      this.getBanners()
  }
}
</script>

<style lang="scss" scoped>
.app-columns-banner {
    position: relative;
    padding: .17rem .15rem;
    h1{
        margin-bottom: .2rem; 
        font-size: .2rem;
        font-weight: bold;
    }
    .link-more {
        position: absolute;
        top: .2rem;
        right: .15rem;
        color: #68abb7;
        i{
            font-size: .16rem;
        }
    }
    .swiper-container {
        height: 0;
        padding-bottom: 56%;
    }
    .swiper-pagination {
        position: relative;
        bottom: -1.73rem;
    }
    .swiper-pagination >>> .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        border-radius: 3px;
    }
    
}
</style>

