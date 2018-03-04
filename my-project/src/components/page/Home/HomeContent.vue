<template>
   <div class="home-content">
    <home-items></home-items>
   </div>
</template>
<script>
import HomeItems from '../Home/HomeItems'
export default {
  name:'home-content',
    components:{
      HomeItems
  }
  
}
</script>
<style lang="scss" scoped>
  .home-content{
      margin-top: 30px;
  }
</style>
