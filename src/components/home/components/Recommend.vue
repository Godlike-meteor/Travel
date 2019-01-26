<!-- 首页-recommend -->
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home-Recommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
        title: '北京欢乐谷',
        desc: '亚洲唯一飞行式过山车等你来挑战'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_200x200_595cfa1d.jpg',
        title: '金隅凤山温泉',
        desc: '在温泉汤池中增添独享欢乐的私密空间'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background-color #eee
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #aaa
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .2rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>
