<template>
    <div class="app-columns-banner">
        <h1>专栏连载</h1>
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
import axios from 'axios'
export default {
  name: 'app-columns-banner',
  data () {
      return {
          banners: []
      }
  },
  methods: {
      getBanners () {
          axios.get(this.$root.config.host + '/db/j/column_v2/').then(res =>{
              this.banners = res.data.banners
          })
      }
  },
  created () {
      this.getBanners()
  },
  updated () {
      new Swiper('.banner', {
          loop:true,
          autoplay: true,
          disableOnInteraction: false,
          allowTouchMove: false,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
            }
      })
  }
}
</script>

<style lang="scss" scoped>
.app-columns-banner {
    padding: 17px 15px;
    h1{
        margin-bottom: 10px; 
        font-size: 20px;
        font-weight: bold;
    }
    .swiper-container {
        height: 0;
        padding-bottom: 56%;
    }
    .swiper-pagination {
        position: relative;
        bottom: -173px;
    }
    .swiper-pagination >>> .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        border-radius: 3px;
    }
    
}
</style>

