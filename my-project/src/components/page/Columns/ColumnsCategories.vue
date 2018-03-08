<template>
    <div class="columns-categories">
        <h2>专栏连载分类</h2>
        <ul class="categories-list">
            <li v-for="kind in kinds" :key="kind.id">
                <a href="javascript:;">{{kind.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {SET_KINDS} from '../../../store/columns/const'
export default {
  name: 'columns-categories',
  methods: {
      getKinds () {
          this.$store.dispatch(SET_KINDS)
      }
  },
  computed: {
      ...mapState({
          kinds: state => state.columns.kinds
      })
  }
}
</script>

<style lang="scss" scoped>
.columns-categories {
    padding: .12rem .15rem;
    margin-bottom: .4rem;
    margin-top: .4rem;
    h2 {
        font-size: .16rem;
        padding-bottom: 6px;
        position: relative;
        font-weight: bold;
    }
    h2::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        border-bottom: 1px solid #d8d8d8;
        -webkit-transform: scaleY(.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 bottom;
        transform-origin: 0 bottom;
    }
    .categories-list {
        margin-top: 8px;
        li {
            font-size: 16px;
            text-align: center;
            margin: 4px 0;
            margin-right: 2%;
            width: 31%;
            box-sizing: border-box;
            display: inline-block;
            background: #eee;
            a {
                padding: 4px 8px;
                display: block;
                color: #626262;
                font-size: .14rem;
            }
        }
    }
}
</style>