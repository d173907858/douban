<template>
  <header class="app-header">
    <tab-bar :isShow="isShow" :tagShow="tagShow"></tab-bar>
    <tab-nav :isShow="isShow" :tagShow="tagShow"></tab-nav>
  </header>
</template>
<script>
import TabBar from './TabBar'
import TabNav from './Nav'
export default {
  name:'app-header',
  data(){
    return{
      isShow : false
    }
  },
  components:{
      TabBar,TabNav
  },
  methods:{
    tagShow(){
      this.isShow = !this.isShow
    }
  }

}
</script>

<style lang="scss" scoped>
 .app-header{
         position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #3e4347;
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    z-index: 999;
 }
</style>
