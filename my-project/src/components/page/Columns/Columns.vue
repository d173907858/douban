<template>
    <div class="main-box app-columns">
        <columns-banner></columns-banner>
        <columns-content></columns-content>
        <columns-categories></columns-categories>
    </div>
</template>

<script>
import ColumnsBanner from './Banner'
import ColumnsContent from './ColumnsContent'
import ColumnsCategories from './ColumnsCategories'
export default {
  name: 'app-columns',
  components: {
      ColumnsBanner,
      ColumnsContent,
      ColumnsCategories
  }
}
</script>

<style lang="scss" scoped>

</style>
