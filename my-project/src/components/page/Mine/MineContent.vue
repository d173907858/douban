<template>
    <div class="mine-content">
     <div class="page">
       <h1>账号信息</h1>
       <div class="user-info">
            <div class="user-img">
                <img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="">
            </div>
            <div class="user-name">{{this.user_name}}</div>
            <div class="user-id">{{this.user_id}}</div>
            <a href="#" class="btn" @click="this.re_local">退出登录</a>
       </div>
       <div class="message">
           <img src="https://img3.doubanio.com/f/ark/33c7821f96d15d9c09914996d7969d12e73999f9/pics/mobile/ic_douban@2x.png" alt="">
           <p>本账号由豆瓣提供</p>
           <p>如需修改昵称,头像等设置项</p>
           <p>请<a href="#">前往豆瓣</a>设置</p>
       </div>
     </div>
    </div>
</template>
<script>
import {RE_USERINFO} from '../../../store/login/const'
import {mapMutations} from 'vuex'
export default {
  name:'mine-content',
  data(){
          return{
                  user_name:localStorage.user_name,
                  user_id : localStorage.user_id,
          }
  },
  methods:{
       re_local(){
                  this.$store.commit(RE_USERINFO)
          this.$router.replace({name:'Home'})
       },
        ...mapMutations([RE_USERINFO])

  }
}
</script>
<style lang="scss" scoped>
.mine-content{
    .page{
    min-height: 260px;
    margin-top: 45px;
    h1{
            color: #aac6d0;
    font-size: 16px;
    font-weight: bold;
    padding: 25px 0;
    text-align: center;
    }
    .user-info{
            text-align: center;
    margin: 0 11px;
    .user-img{
            width: 75px;
    height: 75px;
    overflow: hidden;
    display: inline-block;
    border-radius: 75px;
    position: relative;
    img{
            width: 75px;
    height: 75px;
        border-radius: 100px;
    }
    }
    .user-name{
            font-weight: bold;
    font-size: 15px;
    margin-top: 9px;
    }
    .user-id{
            font-size: 13px;
    color: #a6a6a6

    }
    .btn{
            color: #fa595f;
    background: #fff;
    border: none;
    display: block;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
    padding: 0 15px;
    width: 100%;
 
    box-sizing: border-box;
    position: relative;
    border-radius: 45px;
    margin: 19px auto 0;
    max-width: 260px;
    }
    }
    .message{
            margin-top: 58px;
    text-align: center;
    img{
        width: 36px;
        height: 36px;
            margin-bottom:16px;
    display: inline-block;
      }
    a{
            color: #5dcaad;
    
    }
  
    }


}}
</style>
