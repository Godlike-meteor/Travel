<!-- 详情页 -->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import detailBanner from './compoments/Banner'
import detailHeader from './compoments/Header'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang='stylus' scoped>
  .content
    height 50rem
</style>
