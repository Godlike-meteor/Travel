<!-- 详情页 -->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import detailBanner from './compoments/Banner'
import detailHeader from './compoments/Header'
import detailList from './compoments/List'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票 - 特惠'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  .content
    height 50rem
</style>
