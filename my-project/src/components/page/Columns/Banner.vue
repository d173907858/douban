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
            <div class="swiper-pagination"></div>
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
      new Swiper('.swiper-container', {
          loop:true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
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
}
</style>

