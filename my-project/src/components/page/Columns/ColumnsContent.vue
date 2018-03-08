<template>
  <div class="columns-content">
      <columns-item></columns-item>
  </div>
</template>

<script>
import ColumnsItem from './ColumnsItem'
<<<<<<< HEAD
=======
import {GET_COLUMNS} from '../../../store/columns/const'
import {mapState} from 'vuex'
>>>>>>> 完成专栏详情页
export default {
  name: 'columns-content',
  components: {
      ColumnsItem
<<<<<<< HEAD
=======
  },
  methods: {
      getCharts () {
         this.$store.dispatch(GET_COLUMNS)
      }
  },
  computed: {
    ...mapState({
        charts:state=>state.columns.charts
    })
  },
  created () {
      this.getCharts()
>>>>>>> 完成专栏详情页
  }
}
</script>

<style lang="scss" escoped>
<<<<<<< HEAD

=======
.swiper-scrollbar {
    background: 0;
}
.columns-item {
    margin-top: .4rem;
    padding: 0 .12rem;
    h3 {
        padding: 0 .15rem;
        margin-bottom: .15rem;
        font-size: .16rem;
        font-weight: bold;
    }
    .books {
        overflow-y: hidden;
        overflow-x: scroll;
        .book-box {
            width: .95rem;
            margin-right: .15rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .cover {
                position: relative;
                overflow: hidden;
                box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
                background: #fff;
                img {
                    border: none;
                    max-width: 100%;
                    vertical-align: middle;
                }
            }
            .book-title {
                color: #222;
                font-size: .12rem;
                font-weight: bold;
                margin-top: 6px;
                line-height: .16rem;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                word-break: word-wrap;
            }
            .book-info {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #999;
                font-size: .12rem;
            }
            .subscribe-num {
                font-size: .12rem;
                color: #68abb7;
            }
        }
    }
}
>>>>>>> 完成专栏详情页
</style>
