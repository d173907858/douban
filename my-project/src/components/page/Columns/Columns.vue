<template>
    <div class="columns">
        <columns-banner></columns-banner>
        <columns-content></columns-content>
    </div>
</template>

<script>
import ColumnsBanner from './Banner'
import ColumnsContent from './ColumnsContent'
export default {
  name: 'columns',
  components: {
      ColumnsBanner,
      ColumnsContent
  }
}
</script>

<style lang="scss" scoped>
.columns {
    padding-top: 45px;
    min-height: 260px;
}
</style>
