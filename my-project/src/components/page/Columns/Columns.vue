<template>
    <div class="columns">
        <columns-banner></columns-banner>
    </div>
</template>

<script>
import ColumnsBanner from './Banner'
export default {
  name: 'columns',
  components: {
      ColumnsBanner
  }
}
</script>

<style lang="scss" scoped>
.columns {
    padding-top: 45px;
    min-height: 260px;
}
</style>
