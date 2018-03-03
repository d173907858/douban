<template>
  <div id="app">
    
    <app-header></app-header>
    
  </div>
</template>

<script>
import AppHeader from './components/page/Header/Header'
export default {
  name: 'App',
  components:{
    AppHeader
  }
}
</script>

<style lang="scss">
@import './stylesheets/_reset.scss';
@import './stylesheets/_common.scss';
</style>
