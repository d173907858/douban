<template>
  <div class="detail-profile">
    <div class="column-banner" :style="{backgroundImage: 'url(' + detail.banner 
    +')'}"></div>
    <div class="meta">
        <h2>{{detail.title}}</h2>
        <a href="javascript:;" class="author">
            <img :src="detail.agent.picture">
            <span>{{detail.agent.name}}</span>
        </a>
        <div class="info">
            <p v-if="isShow" class="info-truncated">{{detail.abstract.slice(0,60)}}</p>
            <p v-else class="info-all">{{detail.abstract}}</p>
            <i :class="[isShow?'fa fa-angle-down expand':'fa fa-angle-up expend']" @click="showInfo"></i>
        </div>
        <div class="rating">
            <span :class="['stars-content stars-'+ Math.round(detail.averageRating*10)]">
                <span class="stars-active" :style="{width:(Math.round(1.44*(detail.averageRating*10))) + 'px'}"></span>
            </span>
            <span :class="[detail.averageRating?'score':'lack']">{{detail.averageRating?(detail.averageRating*2 || ''):'少于10 人评价'}}</span>
        </div>
        <div class="kinds-tags">
            <span class="categories">
                <i class="fa fa-bars icon"></i>
                <a href="#" class="tag" v-for="(kind,index) in detail.kinds" :key="index">{{kind.name}}</a>              
            </span>
            <span class="tags">
                <i class="fa fa-tags icon"></i>
                <a href="" class="tag" v-for="(tag,i) in detail.tags" :key="i">{{tag.name}}</a>
            </span>
        </div>
        <div class="info-bottom">
            <p class="objective-items">
                <span class="publish-time">{{detail.onSaleTime}}上架</span>
                <span class="divsion"></span>
                <span class="word-count">{{detail.wordCount}}</span>
            </p>
            <p class="subjective-items">
                <span class="rating-count">{{detail.ratingCount}}评价</span>
                <span class="divsion"></span>
                <span class="donator-count">{{detail.donatorCount}}送花</span>
                <span class="divsion"></span>
                <span class="subsciber-num">{{detail.subscriberNum}}订阅</span>
                <span class="divsion"></span>
                <span class="read-count">{{detail.readCount}}阅读</span>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
// https://read.douban.com/j/column_v2/7364387/

import axios from 'axios'
import {mapState} from 'vuex'
import {GET_DETAIL} from '../../../store/columnsDetail/const'
export default {
  name: 'detail-profile',
  props: ['id'],
  data () {
      return {
          isShow:true
      }
  },
  methods: {
      getDetail () {
        this.$store.dispatch(GET_DETAIL,this.id)
      },
      showInfo () {
          this.isShow = !this.isShow
      }
  },
  computed: {
      ...mapState({
        detail:state=>state.columnsDetail.detail
      })
  },
  created () {
      this.getDetail()
  }
}
</script>

<style lang="scss" escoped>
.detail-profile {
    background:#fff;
    .column-banner {
        position: relative;
        width: 100%;
        height: 1.4rem;
        background-position: center;
        background-size: cover;
    }
    .column-banner::after{
        content: '';
        position: absolute;
        top: 0;
        bottom: -1px;
        left: 0;
        right: 0;
        background: linear-gradient(0,#fff 0%,rgba(255,255,255,0) 100%)
    }
    .meta {
        position: relative;
        margin-top: -.1rem;
        font-size: .14rem;
        padding-left: .15rem;
        padding-right: .15rem;
        h2 {
            font-size: .22rem;
            margin-bottom: 6px;
            max-width: 90%;
            margin: 0 auto;
            margin-bottom: 6px;
            color: #333;
            font-weight: bold;
            text-align: center;
        }
        .author {
            display: table;
            font-size: .14rem;
            margin: 0 auto;
            margin-bottom: .16rem;
            line-height: .16rem;
            color: #68abb7;
            text-align: center;
            img {
                display: inline-block;
                margin-right: 5px;
                width: .2rem;
                border-radius: .1rem;
                text-align: center;
                vertical-align: middle;
            }
        }
        .info {
            position: relative;
            margin: 0 auto;
            margin-bottom: .16rem;
            width: 90%;
            text-align: center;
            .expand {
                color: #68abb7;
                font-size: .1rem;
            }
            .info-all {
                padding-bottom: .1rem;
                text-align: left;
            }
        }
        .rating {
            margin-bottom: .24rem;
            line-height: .14rem;
            text-align: center;
            .stars-content,.stars-active {
                display: inline-block;
                font-size: .14rem;
                overflow: hidden;
                width: .75rem;
                height: 14px;
                text-indent: 0;
                background:url('https://img3.doubanio.com/f/ark/d77e4fb55f64b99f5b7f095aa263f0357e17003d/pics/app/stars.svg') no-repeat;
            }
            .stars-content {
                text-align: left;
                vertical-align: -1px;
            }
            .stars-active {
                background-position: 0 -.17rem;
            }
            // .stars-active{
            //     width: .66rem;
            // }
            .score {
                color: #fa595f;
                vertical-align: .5px;
            }
            .lack {
                color: #a6a6a6;
                font-size: 12px;
            }
        }
        .kinds-tags {
            text-align: center;
            line-height: .16rem;
            margin-bottom: -5px;
            .categories{
                text-align: center;
                line-height: .16rem;
                margin-bottom: -5px;
            }
            .tag {
                display: inline-block;
                vertical-align: top;
                margin: 0 2px;
                padding: 0 7px;
                font-size: .1rem;
                height: .15rem;
                border-radius: .2rem;
                color: #fff;
                background: #68abb7;
                margin-bottom: 5px;
            }
            .icon {
                color: #a6a6a6
            }
        }
        .info-bottom {
            padding-bottom:.11rem;
            color: #a6a6a6;
            font-size: .12rem;
            margin-top: .25rem;
            text-align: center; 
            .subjective-items {
                margin-top: 5px;
            }
            .divsion {
                margin: 0 .5em;
            }
            .divsion::after{
                content: '·';
                font-weight: bold;
            }
        }
    }
}
</style>
