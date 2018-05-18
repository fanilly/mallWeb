<template>
  <section class="goods-item">
    <section class="goods-item-lside">
      <img v-lazy="baseurl+item.goodsthums">
    </section>
    <section class="goods-item-rside">
      <h3 class="goods-item-rside-title">{{ item.goodsname }}</h3>
      <p class="goods-item-rside-info">{{ item.goodsname }}</p>
      <section class="goods-item-rside-footer">

      </section>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    baseurl: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  mounted(){
    // console.log(this.item);
  }
};

</script>
<style lang="less" scoped>
  @import './goodsItem.less';
</style>
