<template>
  <div class="main-box app-home">
    <home-img></home-img>
    <home-content></home-content>
  </div>
</template>
<script>
import HomeImg from './Home-img'
import HomeContent from './HomeContent'
export default {
  name:'app-home',
  components:{
      HomeImg,HomeContent
  }
}
</script>
<style lang="scss" scoped>
  
</style>
