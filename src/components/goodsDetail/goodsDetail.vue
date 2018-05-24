<template>
  <section class="container">
    <section class="mask" @click="maskHandle"></section>
    <section class="content">
      <section class="content-wapper">
        <img class="goods-poster" v-lazy="baseurl+goodsData.goodsimg" alt="">
        <div class="title-box">
          <h2>{{goodsData.goodsname}}</h2>
          <div class="control-box">
            <template v-if="goodsData.count>=1">
              <span class="icon-box reduce" @click.stop="reduce"><i class="iconfont icon-iconjian"></i></span>
              <span class="count-box">{{goodsData.count}}</span>
            </template>
            <span class="icon-box plus" @click.stop="plus"><i class="iconfont icon-iconjia"></i></span>
          </div>
        </div>
        <div class="content-box">
          <p>{{goodsData.goodsspec}}</p>
        </div>
        <div class="desc"></div>
      </section>
    </section>
  </section>
</template>
<script>
export default {
  name: 'goodsDetail',
  props: {
    goodsData: {
      type: Object
    },
    baseurl: {
      type: String
    },
    detailCurrentIndex:{
      type:Number
    },
    detailParentIndex:{
      type:Number
    }
  },
  data() {
    return {};
  },
  methods: {
    plus(e) {
      console.log({
        parentIndex:this.detailParentIndex,
        currentIndex:this.detailCurrentIndex,
        goodsId:this.goodsData.goodsid
      });
      this.$emit('plus',{
        parentIndex:this.detailParentIndex,
        currentIndex:this.detailCurrentIndex,
        goodsId:this.goodsData.goodsid
      },e);
    },
    reduce(e) {
      this.$emit('reduce',{
        parentIndex:this.detailParentIndex,
        currentIndex:this.detailCurrentIndex,
        goodsId:this.goodsData.goodsid
      },e);
    },
    maskHandle() {
      this.$emit('maskHandle');
    }
  },
  mounted() {
    console.log(this.goodsData);
  }
};

</script>
<style lang="less" scoped>
@import './goodsDetail.less';

</style>
