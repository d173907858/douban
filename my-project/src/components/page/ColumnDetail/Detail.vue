<template>
  <div class="main-box column-detail">
      <detail-profile  :id='id'></detail-profile>
      <profile-chapters :id='id'></profile-chapters>
      <detail-footer></detail-footer>
  </div>
</template>

<script>
import DetailProfile from './DetailProfile'
import ProfileChapters from './ProfileChapters'
import DetailFooter from './DetailFooter'
export default {
  name:'column-detail',
  props: ['id'],
  components: {
      DetailProfile,
      ProfileChapters,
      DetailFooter
  }
}
</script>

<style lang="scss" scoped>
</style>
