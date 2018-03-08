<template>
   <div class="detail-content">
       <detail-top></detail-top>
       <detail-items></detail-items>
   </div>
</template>
<script>
import DetailTop from './HomeDetailTop'
import DetailItems from './HomeDetailItems'
export default {
  name:'detail-content',
  components:{
      DetailTop,DetailItems
  }
}
</script>
<style>

</style>
