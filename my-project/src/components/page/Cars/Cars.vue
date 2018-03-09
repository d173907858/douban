<template>
    <div class="main-box cars">
      <cars-content></cars-content>
      <cars-bottom></cars-bottom>
    </div>
</template>
<script>
import CarsContent from './CarsContent'
import CarsBottom from './CarsBottom'
export default {
  name:'cars',
 components:{
      CarsContent,CarsBottom
  }
}
</script>
<style lang="scss" scoped>
.cars{
    height: 100%;
   
}
</style>
