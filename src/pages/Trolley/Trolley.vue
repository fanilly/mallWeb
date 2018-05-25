<template>
  <section class="container">
    <header class="header">
      <span @click="handleAddGoods"><i class="iconfont icon-iconjia"></i></span>
      <div class="text" @click="handleAddGoods">继续加菜</div>
      <div class="del-btn" @click="handleClearTrolley"><span><i class="iconfont icon-shanchu"></i></span>清空</div>
    </header>
    <main class="page-main">
      <section class="item" v-for="item,index of trolleys" :key="index">
        <div class="item-lside">{{item.goodsname}}</div>
        <div class="item-center"><span>￥</span>{{item.shopprice}}</div>
        <div class="item-rside">
          <span class="icon-box reduce" @click="reduce(index)"><i class="iconfont icon-iconjian"></i></span>
          <span class="count-box">{{item.count}}</span>
          <span class="icon-box plus" @click="plus(index)"><i class="iconfont icon-iconjia"></i></span>
        </div>
      </section>
    </main>
    <footer-trolley
      lable="去结算"
      :totalMoney="totalMoney"
      :total="trolleysTotal"
      @handleClickBtn="handleGoSettlement"
    ></footer-trolley>
  </section>
</template>
<script>
document.title = '购物车';
import footerTrolley from '@/components/footerTrolley/footerTrolley.vue';
import storageUtils from '@/utils/Storage.js';
// import
export default {
  name: 'trolley',
  data() {
    return {
      trolleys: [],
      trolleysTotal: 0,
      totalMoney: 0
    };
  },
  methods: {
    handleAddGoods() {
      this.$router.go(-1);
    },
    //初始化购物车
    initTrolley() {
      let trolleys = storageUtils.getStorage('trolleys');
      this.trolleys = trolleys ? JSON.parse(trolleys) : [];
      if (this.trolleys.length >= 1) {
        this.trolleysTotal = this.trolleys.map(item => item.count).reduce((total, num) => total + num);
        this.totalMoney = this.trolleys.map(item => item.shopprice * item.count).reduce((total, num) => total + num);
      } else {
        this.trolleysTotal = 0;
        this.totalMoney = 0;
      }
    },
    //改变购物车数据
    changeTrolleys() {
      storageUtils.setStorage('trolleys', this.trolleys);
      this.totalMoney = this.trolleys.length >= 1 ? this.trolleys.map(item => item.shopprice * item.count).reduce((total, num) => total + num) : 0;
    },
    //减
    reduce(index) {
      this.trolleysTotal--;
      if (this.trolleys[index].count > 1)
        this.trolleys[index].count--;
      else
        this.trolleys.splice(index, 1);
      this.changeTrolleys();
    },
    //加
    plus(index) {
      this.trolleysTotal++;
      this.trolleys[index].count++;
      this.changeTrolleys();
    },
    // 去结算
    handleGoSettlement() {
      this.$router.push({
        name:'Settlement'
      });
    },
    //清空购物车
    handleClearTrolley(){
      this.trolleysTotal = 0;
      this.trolleys = [];
      this.totalMoney = 0;
      storageUtils.setStorage('trolleys',this.trolleys);
      this.$router.go(-1);
    }
  },
  mounted() {
    this.initTrolley();
  },
  components: {
    footerTrolley
  }
};

</script>
<style lang="less" scoped>
@import './Trolley.less';

</style>
