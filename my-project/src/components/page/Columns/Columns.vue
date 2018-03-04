<template>
    <div class="columns">
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
  name: 'columns',
  components: {
      ColumnsBanner,
      ColumnsContent,
      ColumnsCategories,
      ColumnsContent
  }
}
</script>

<style lang="scss" scoped>
.columns {
    padding-top: .45rem;
    min-height: 2.6rem;
}
</style>
