<template>
  <div id="app">
    
    <app-header></app-header>
    <router-view></router-view>
    <login-dialog></login-dialog>
  </div>
</template>

<script>
import AppHeader from './components/page/Header/Header'
import LoginDialog from './components/commons/LoginDialog/LoginDialog'
export default {
  name: 'App',
  components:{
    AppHeader,LoginDialog
  }
}
</script>

<style lang="scss">
@import './stylesheets/_reset.scss';
@import './stylesheets/_common.scss';
</style>
