<template>
  <div class="detail-profile">
    <div class="column-banner" style="background-image: url('https://img3.doubanio.com/view/ark_column_banner/retina/public/da4db4c2bb2346f190d6a92aa26e9855.jpg')"></div>
    <div class="meta">
        <h2>至少还有你</h2>
        <a href="javascript:;" class="author">
            <img src="https://img3.doubanio.com/icon/up33900749-51.jpg" alt="">
            <span>伊北</span>
        </a>
        <div class="info">
            <p>
                自打楼上的老魏以八十高龄死在家中，被狗啃了半张脸，一个星期后才被人发现，董美凤更加为自己的老年生活担忧了。
她独居
            </p>
            <i class="fa fa-angle-down expand"></i>
        </div>
        <div class="rating">
            <span class="stars-content stars-45">
                <span class="stars-active"></span>
            </span>
            <span class="score">9.4</span>
        </div>
        <div class="kinds-tags">
            <span class="categories">
                <i></i>
                <a href="#" class="tag">悬疑小说</a>
                <a href="#" class="tag">喜剧故事</a>                
            </span>
            <span class="tags">
                <i></i>
                <a href="" class="tag">爱情</a>
            </span>
        </div>
        <div class="info-bottom">
            <p class="objective-items">
                <span class="publish-time">xxxx上架</span>
                <span class="divsion"></span>
                <span class="word-count">约xxxxx字</span>
            </p>
            <p class="subjective-items">
                <span class="rating-count">111评价</span>
                <span class="donator-count">42送花</span>
                <span class="subsciber-num">3900订阅</span>
                <span class="read-count">5287652阅读</span>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-profile'
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
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(0,#fff 0%,rgba(255,255,255,0) 100%)
    }
    .meta {
        position: relative;
        margin-top: -10px;
        font-size: 14px;
        padding-left: 15px;
        padding-right: 15px;
        h2 {
            font-size: 21px;
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
            font-size: 14px;
            margin: 0 auto;
            margin-bottom: 16px;
            line-height: 16px;
            color: #68abb7;
            text-align: center;
            img {
                display: inline-block;
                margin-right: 5px;
                width: .2rem;
                border-radius: 10px;
                text-align: center;
                vertical-align: middle;
            }
        }
        .info {
            position: relative;
            margin: 0 auto;
            margin-bottom: 16px;
            width: 90%;
            text-align: center;
            .expand {
                color: #68abb7;
                font-size: 10px;
            }
        }
        .rating {
            margin-bottom: 24px;
            line-height: 14px;
            text-align: center;
            .stars-content,.stars-active {
                display: inline-block;
                font-size: 14px;
                overflow: hidden;
                width: .73rem;
                height: 14px;
                text-indent: 0;
                background:url('https://img3.doubanio.com/f/ark/d77e4fb55f64b99f5b7f095aa263f0357e17003d/pics/app/stars.svg') no-repeat;
            }
            .stars-content {
                text-align: left;
                vertical-align: -1px;
            }
            .stars-active {
                background-position: 0 -17px;
            }
            .stars-45 .stars-active{
                width: 66px;
            }
            .score {
                color: #fa595f;
                vertical-align: .5px;
            }
        }
        .kinds-tag {
            text-align: center;
            line-height: 15px;
            margin-bottom: -5px;
            .categories{
                text-align: center;
                line-height: 15px;
                margin-bottom: -5px;
                .tag {
                    display: inline-block;
                    vertical-align: top;
                    margin: 0 2px;
                    padding: 0 7px;
                    font-size: 10px;
                    line-height: 1.5;
                    height: 15px;
                    border-radius: 20px;
                    color: #fff;
                    background: #68abb7;
                    margin-bottom: 5px;
                }
            }
        }
    }
}
</style>
