<template>
  <div class="detail-footer">
      <div style="width:20%;" class="footer-col">
          <a href="javascript:;" class="btn btn-share">
              <i class="fa fa-share-square-o"></i>
          </a>
      </div>
      <div style="width:20%;" class="footer-col">
          <a href="javascript:;" class="review" :data-num="detail.totalReviews">
              <i class="fa fa-commenting-o"></i>
          </a>
      </div>
      <div style="width:20%;" class="footer-col">
          <a href="javascript:;" class="donate" :data-num="detail.donatorCount">
              <i class="fa fa-gift"></i>
          </a>
      </div>
      <div style="width:40%;" class="footer-col">
          <div class="subscribe">
            <router-link to="/login" class="btn-subscribe">
                <span class="btn-text">订阅</span>
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'detail-footer',
  computed: {
      ...mapState({
          detail:state=>state.columnsDetail.detail
      })
  }
}
</script>

<style lang="scss" escoped>
.detail-footer::after{
    content: '';
    display: block;
    position: absolute;
    top: .135rem;
    right: -1px;
    width: 1px;
    height: .16rem;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
    -webkit-transform-origin: right 0;
    transform-origin: right 0;
    background: #ddd;
}
.detail-footer {
    height: .47rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    background:#fff;
    overflow: hidden;
    z-index: 200;
    display: flex;
    .footer-col::after {
        content: '';
        display: block;
        position: absolute;
        top: .145rem;
        right: -1px;
        width: 1px;
        height: .18rem;
        -webkit-transform: scaleX(.5);
        transform: scaleX(.5);
        -webkit-transform-origin: right 0;
        transform-origin: right 0;
        background: #ddd;
    }
    .footer-col {
        position: relative;
        height: .48rem;
        line-height: .48rem;
        display: inline-block;
        .fa {
            font-size: .2rem;
            color: #68abb7;
        }
        .btn-share {
            height: .48rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            text-align: center;
        }
        .review::after,.donate::after {
            content: attr(data-num);
            position: absolute;
            top: .11rem;
            left: 50%;
            margin-left: .1rem;
            font-size: .1rem;
            line-height: 1;
        }
        .review,.donate {
            display: flex;
            position: relative;
            width: 100%;
            height: .48rem;
            color: #68abb7;
            text-align: center;
            overflow: auto;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .subscribe {
            position: relative;
            top: -1px;
            padding: 0;
            display: block;
            overflow: auto;
            background: none;
            .btn-subscribe {
                position: relative;
                display: block;
                top: 0;
                width: 100%;
                height: .48rem;
                background: #5dcaad;
                line-height: .48rem;
                font-size: .16rem;
                text-align: center;
                color: #fff;
            }       
        }
    }
}
</style>
