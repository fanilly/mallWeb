<template>
  <section :class="settings.isSelf*1 === 1 ? 'coupon-item received' : 'coupon-item'">
    <span class="horn top-left"></span>
    <span class="horn top-right"></span>
    <span class="horn bottom-left"></span>
    <span class="horn bottom-right"></span>
    <span class="line bottom-line"></span>
    <span class="line top-line"></span>
    <span class="line right-line"></span>
    <span class="line left-line"></span>
    <section class="coupon-item-content">
      <section class="coupon-item-content-lside">
        <h3><span>$</span> 300</h3>
        <h4>满 2000 可用</h4>
        <p>有效期至2018-09-09</p>
      </section>
      <section class="coupon-item-content-rside">
        <span>{{settings.isSelf*1 === 1 ? '已' : ''}}领取</span>
      </section>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    settings: {
      type: Object,
      default: {},
      required: true
    }
  },
  data() {
    return {};
  }
};

</script>
<style lang="less" scoped>
@import './coupon.less';

</style>
