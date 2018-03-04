<template>
  <div class="columns column-detail">
      <detail-profile></detail-profile>
  </div>
</template>

<script>
import DetailProfile from './DetailProfile'
export default {
  name:'column-detail',
  components: {
      DetailProfile
  }
}
</script>

<style lang="scss" scoped>
.column-detail{
    padding-top: .45rem;
    min-height: 2.6rem;
}
</style>
