<template>
    <div class="model" v-if="modelShow">
        <div class="overlay-dialog"></div>
        <div class="login-dialog">
            <div class="dialog-header">
                <a href="#" @click="CONTROL_MODEL({modelShow:false})" class="close"></a>
            </div>
            <div class="dialog-content">
                <h2 class="label">使用豆瓣账号登录</h2>
                <div class="btn-group" @click="CONTROL_MODEL({modelShow:false})">
                    <router-link to="/login"  class="btn btn-login-db">登录</router-link>
                    <router-link to="/register" class="btn btn-signup-db">注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import {CONTROL_MODEL} from '../../../store/columnsDetail/const'
export default {
  name: 'model',
  computed: {
      ...mapState({
          modelShow:state=>state.columnsDetail.modelShow
      })
  },
  methods: {
      ...mapMutations([CONTROL_MODEL])
  }
}
</script>

<style lang="scss" scoped>
.model {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .overlay-dialog {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 10000;
    }
    .login-dialog {
        position: fixed;
        top: 1.8rem;
        left: .4rem;
        padding: 12px;
        background: #fff;
        width: 90%;
        max-width: 3rem;
        border-radius: 3px;
        text-align: center;
        font-size: .16rem;
        z-index: 11000;
        .dialog-header {
            position: relative;
            min-height: .36rem;
            font-size: .16rem;
            .close::before {
                content: '×';
                display: block;
                width: 44px;
                height: 44px;
                line-height: 44px;
                color: #68abb7;
                font-size: 30px;
            }
            .close {
                position: absolute;
                top: -12px;
                right: -12px;
                width: .44rem;
                color: #68abb7;
            }
        }
        .dialog-content {
            overflow: hidden;
            .label {
                font-weight: normal;
                word-wrap: break-word;
                font-size: 16px;
            }
            .btn-group {
                margin-bottom: .65rem;
                margin-top: .18rem;
                text-align: center;
                .btn {
                    display: block;
                    max-width: 2.6rem;
                    margin: 0 auto .1rem;
                    height: .45rem;
                    line-height: .45rem;
                    padding: 0 .15rem;
                    border-radius: .45rem;
                    color: #fff;
                    text-align: center;
                    font-size: .16rem;
                }
                .btn-login-db {
                    background: #70ceb5;
                }
                .btn-signup-db {
                    background: #aae1d3;
                }
            }
        }
    }
}

</style>
