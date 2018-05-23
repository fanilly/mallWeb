<template>
  <section class="goods-item">
    <section class="goods-item-lside">
      <img v-lazy="baseurl+item.goodsthums">
    </section>
    <section class="goods-item-rside">
      <h3 class="goods-item-rside-title">{{ item.goodsname }}</h3>
      <p class="goods-item-rside-info">{{ item.goodsname }}</p>
      <div class="goods-item-rside-control-box">
        <h4><span>￥</span>{{item.shopprice}}</h4>
        <template v-if="item.count>=1">
          <span class="icon-box reduce" @click.stop="reduce"><i class="iconfont icon-iconjian"></i></span>
          <span class="count-box">{{item.count}}</span>
        </template>
        <span class="icon-box plus" @click.stop="plus"><i class="iconfont icon-iconjia"></i></span>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    parentIndex: {
      type: Number,
      require: true
    },
    currentIndex: {
      type: Number,
      require: true
    },
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
  methods: {
    plus(e) {
      this.$emit('plus',{
        parentIndex:this.parentIndex,
        currentIndex:this.currentIndex,
        goodsId:this.item.goodsid
      },e);
    },
    reduce(e) {
      this.$emit('reduce',{
        parentIndex:this.parentIndex,
        currentIndex:this.currentIndex,
        goodsId:this.item.goodsid
      },e);
    }
  },
  mounted() {

  }
};

</script>
<style lang="less" scoped>
@import './goodsItem.less';

</style>
