<template>
  <div class="main-box app-register">
    <h1 class="welcome">欢迎加入豆瓣阅读</h1>
    <form>
        <div class="input" id="getInput">
            <input type="number"  name="number" placeholder="手机号" autocapitalize="off" autocorrect="off">
        </div>
        <div class="input">
            <input :type="[eShow?'text':'password']" name="password" placeholder="密码（最少6位）" autocapitalize="off" autocorrect="off">
            <span @click="isShow" :class="[eShow?'opt eye-open':'opt eye-close']"></span>
        </div>
         <div class="input" id="getNickName">
            <input type="text" name="name" placeholder="昵称" maxlength="10" autocapitalize="off" autocorrect="off">
        </div>
        <div class="form-reg">
            <input class="btn-submit" type="submit" value="注册">
            <p class="agreement">点击注册代表你已阅读并同意用户使用协议</p>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'app-register',
  data () {
      return {
          eShow:false
      }
  },
  methods: {
      isShow () {
          this.eShow = !this.eShow
      }
  }
}
</script>

<style lang="scss" scoped>
.app-register {
    padding: 20px;
    .welcome {
        margin: 10% 0 9%;
        color: #42bd56;
        font-size:.3rem;
        font-weight: 300;
        text-align: center;
    }
    .input {
        position: relative;
        color:#494949;
        height: .44rem;
        background: #fff;
        border: 1px solid #d7d7d7;
        overflow: hidden;
        input{
            border: 0 none;
            background: #fff;
            width: 96%;
            height: .3rem;
            line-height: .3rem;
            margin-top: 7px;
            padding: 0 0 0 .1rem;
        }
        input[name="password"] {
            width: 88%;
        }
        .opt {
            position: absolute;
            font-size: .14rem;
            line-height: .44rem;
            color: #42bd56;
            display: block;
        }
        .eye-close {
            background-image: url('https://img3.doubanio.com/f/accounts/633583c94aee074deb5da23c5bd2babc796569ac/pics/douban_mobile/ic_pwd_privarie@2x.png')
        }
        .eye-open {
            background-image: url('https://img3.doubanio.com/f/accounts/7273e7b7ed01a831197d0b09224964ae0fa2258c/pics/douban_mobile/ic_pwd_open@2x.png')
        }
        .eye-close,.eye-open {
            padding: 0;
            top: .16rem;
            right: .1rem;
            height: .18rem;
            width: .18rem;
            overflow: hidden;
            background-repeat: no-repeat;
            background-size: .18rem .18rem;
        }
        
    }
    #getInput {
        border-bottom: 0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        position: relative;
    }
    #getNickName {
        border-top: 0;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .form-reg {
        margin-top: .1rem;
        .btn-submit {
            display: block;
            font-size: .16rem;
            border: 0;
            border-radius: 3px;
            background: #42bd56;
            width: 100%;
            height: .44rem;
            color: #fff;
            cursor: pointer;
        }
        .agreement {
            font-size: .14rem;
            color: #ccc;
            text-align: center;
            margin: 14px 0;
        }
    }
}
</style>
