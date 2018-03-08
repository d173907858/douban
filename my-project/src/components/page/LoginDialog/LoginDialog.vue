<template>
    <div class="model">
        <div class="overlay-dialog" style="{width:375px;height:2168px}"></div>
        <div class="login-dialog">
            <div class="dialog-header">
                <a href="#" class="close"></a>
            </div>
            <div class="dialog-content">
                <h2 class="label">使用豆瓣账号登录</h2>
                <div class="btn-group">
                    <a href="#" class="btn btn-login-db">登录</a>
                    <a href="#" class="btn btn-signup-db">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'model'
}
</script>

<style lang="scss" scoped>
.overlay-dialog {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 1000;
}
.login-dialog {
    position: fixed!important;
    padding: 12px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    max-width: 300px;
    border-radius: 3px;
    text-align: center;
    font-size: 16px;
    z-index: 1100;
    .dialog-header {
        position: relative;
        min-height: 36px;
        font-size: 16px;
        .close {
            position: absolute;
            top: -12px;
            right: -12px;
            width: 44px;
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
        .btn-grounp {
            margin-bottom: 65px;
            margin-top: 18px;
            text-align: center;
            .btn {
                display: block;
                max-width: 260px;
                margin: 0 auto 10px;
                height: 45px;
                line-height: 45px;
                padding: 0 15px;
                border-radius: 45px;
                color: #fff;
                text-align: center;
                font-size: 16px;
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
</style>
