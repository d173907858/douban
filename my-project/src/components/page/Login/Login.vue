<template>
  <div class="main-box app-login">
      <div class="login-content">
        <form>
          <div class="element form-username">
            <input type="text" name="form-username" placeholder="用户名" ref="tel">
          </div>
          <div class="element form-pwd">
            <input :type="[eyeShow?'text':'password']" name="form-password" placeholder="密码" ref="pwd">
            <span @click="isShow" :class="[eyeShow?'openpwd open':'openpwd']"></span>
          </div>
          <div class="element submit-button">
            <input class="btn-submit" type="button" value="登录" @click="login">
          </div>
        </form>
        <div class="item">
          <div class="more-login">使用其他方式登录 & 找回密码</div>
          <div class="btn-register">
            <router-link to="/register" href="#" class="btn-reg">注册账号</router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import { Toast } from 'mint-ui'
import {LOGIN} from '../../../store/login/const'
import{mapActions} from 'vuex'
export default {
  name:'app-login',
  data () {
    return {
      eyeShow:false
    }
  },
  methods: {
    isShow () {
      this.eyeShow = !this.eyeShow
    },
    login(){
       let user_id = this.$refs.tel.value
       let user_pwd = this.$refs.pwd.value
      
      this.$store.dispatch(LOGIN,{user_id,user_pwd})
      if(localStorage.is){
        
          this.$router.replace({name:'Mine'})
           localStorage.removeItem('is');
         
      }else{
      
      }
    },
    ...mapActions([LOGIN])

  },

}
</script>

<style lang="scss" scoped>
.login-content {
  padding: .15rem;
  margin-top: .2rem;
  .element.submit-button {
    margin-top: .1rem;
    text-align: center;
  }
  .element.form-username {
      input[type="text"] {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-top: 1px solid #ccc;
      }
  }
  .element {
    position: relative;
    input[type="text"],input[type="password"] {
      display: inline-block;
      height: .44rem;
      width: 100%;
      font-size: .16rem;
      padding: 0 8px;
      line-height: .32rem;
      background: #fff;
      border: 1px solid #ccc;
    }
    
    span.openpwd {
      display: block;
      height: 100%;
      width:.32rem;
      position: absolute;
      right: 0;
      top: 0;
      background-image:url('https://img3.doubanio.com/f/accounts/633583c94aee074deb5da23c5bd2babc796569ac/pics/douban_mobile/ic_pwd_privarie@2x.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: .22rem;
    }
    span.openpwd.open {
      background-image: url('https://img3.doubanio.com/f/accounts/7273e7b7ed01a831197d0b09224964ae0fa2258c/pics/douban_mobile/ic_pwd_open@2x.png');
    }
    .form-username {
      input {
        border-top: 1px solid #ccc;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }
    }
    .btn-submit {
      cursor: pointer;
      font-size: 18px;
      text-align: center;
      width: 100%;
      padding: .1rem .26rem;
      color: #fff;
      background: #17AA52;
      border: 1px solid #17AA52;
      border-radius: 3px; 
    }
  }
  .item {
    font-size: .16rem;
    margin-top: .15rem;
    color: #aaa;
    text-align: center;
    .btn-register {
      margin-top: .4rem;
      text-align: center;
      font-size: .16rem;
      color: #42bd56;
      .btn-reg {
        color:#42bd56;
      }
    }
  }
}
</style>
