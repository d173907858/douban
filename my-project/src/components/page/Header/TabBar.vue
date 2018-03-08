<template>
<div class="tab-bar">
<div class="logo" @click="tagShow">
<span></span>
<div class="more">

</div>
</div>

<div class="tab-right">
    <div class="serch">
    <span class="fa fa-search"></span>
    </div>
    <div  class="ren">
    <span class="fa fa-user"></span>
    
    </div>
</div>
<div class="mask"  @click="tagShow" v-if="isShow"></div>
</div>
</template>
<script>
export default {
    name:"tab-bar",
    props:['isShow','tagShow']
  
}
</script>
<style lang="scss" scoped>
    .tab-bar{
         
        .mask{
            width: 100%;
            height: 45px;
        }
         z-index: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
                display: flex;
                justify-content: space-between;
    width: 130px;
    height: 100%;
    white-space: nowrap;
    color: #5dcaad;
        span{
            width: 95px;
            background-image:url('/static/img/logo.png');
            background-size: 95px 16px;
                background-repeat: no-repeat;
    background-position: left center;
            display: inline-block;
            margin-left: 10px;
                height: 45px
        }
        .more{
            margin-left: 15px;
        }
        .more::before{
            
                height: 22px;
    top: 12px;
    bottom: auto;
    border-left-width: 2px;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-left: 1px solid #262a2d

        }
        .more::after{
                content: '';
    border: 5px solid transparent;
    border-top-color: #68abb7;
    display: inline-block;
    vertical-align: top;
    margin-top: 21px;
        }
        }
        .tab-right{
            width: 60px;
             display: flex;
                justify-content: space-between;
                position: absolute;
    right: 0;
    height: 45px;
    top: 0;
        .serch{
            span{
                width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-top: 12px;
    text-align: center;
    color: #68abb7;font-size: 18px
    }

        }
        .ren{
    padding-right: 9px;
        display: inline-block;
    width: 32px;
    height: 45px;
    text-align: center;
    
    span{
            width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-top: 12px;
    text-align: center;
      color: #68abb7;
      font-size: 18px
    }
        }
        }
    }
</style>
