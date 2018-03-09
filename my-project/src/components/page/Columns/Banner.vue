<template>
    <div class="app-columns-banner">
        <h1>专栏连载</h1>
        <span class="link-more">了解更多 <i class="fa fa-angle-right"></i></span>
        <mt-swipe class="columns-banner" :auto="4000">
                <mt-swipe-item class="swiper-slide" v-for="(banner,index) in banners" :key="index">
                    <img width="100%" :src="banner.image_url">
                </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
// https://read.douban.com/j/column_v2/
import {mapState} from 'vuex'
import Vue from 'vue'
import {GET_COLUMNS} from '../../../store/columns/const'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem); 
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
    .columns-banner {
        width: 100%;
        height: 200px;
    }
    
}
</style>

