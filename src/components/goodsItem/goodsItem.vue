<template>
  <section class="goods-item">
    <section class="goods-item-lside">
      <img v-lazy="baseurl+item.goodsthums">
    </section>
    <section class="goods-item-rside">
      <h3 class="goods-item-rside-title">{{ item.goodsname }}</h3>
      <p class="goods-item-rside-info">{{ item.goodsname }}</p>
      <div class="goods-item-rside-control-box">
        <template v-if="item.count>=1">
          <span class="icon-box reduce" @click="reduce()"><i class="iconfont icon-iconjian"></i></span>
          <span class="count-box">{{item.count}}</span>
        </template>
        <span class="icon-box plus" @click="plus()"><i class="iconfont icon-iconjia"></i></span>
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
    plus() {
      this.$emit('plus',{
        parentIndex:this.parentIndex,
        currentIndex:this.currentIndex,
        goodsId:this.item.goodsid
      });
    },
    reduce() {
      this.$emit('reduce',{
        parentIndex:this.parentIndex,
        currentIndex:this.currentIndex,
        goodsId:this.item.goodsid
      });
    }
  },
  mounted() {

  }
};

</script>
<style lang="less" scoped>
@import './goodsItem.less';

</style>
