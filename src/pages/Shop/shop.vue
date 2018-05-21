<template>
  <section class="container">
    <header class="header">
      <section class="search-box">
        <section class="search-box-content">请输入关键词搜索商品</section>
      </section>
      <section class="mall-info">
        <section class="mall-info-header">
          <section class="mall-info-header-lside">
            <img v-lazy="configs.goodsimg" class="logo" alt="店铺头像">
          </section>
          <section class="mall-info-header-rside">
            <h2 class="mall-name">请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品{{configs.mallName}}</h2>
            <p class="mall-desc">请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品请输入关键词搜索商品{{configs.mallDesc}}</p>
          </section>
        </section>
        <section class="mall-info-notice-wapper">
          <span class="notice-icon"><i class="iconfont icon-shangjia"></i></span>
          <h3>本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖本店产品均为现做现卖</h3>
          <span class="more-icon"><i class="iconfont icon-jiantouyou"></i></span>
        </section>
      </section>
    </header>
    <section class="benefit">

    </section>
    <main class="main">
      <scrolltab>
        <scrolltab-panel :label="item.catname" :icon="item.icon || ''" v-for="item,index in classList" :key="index">
          <section class="class-container">
            <goods-item
              v-for="(sub, key) in item.goodsList"
              :key="key"
              :item="sub"
              :baseurl="BASE_URL"
              :parentIndex="index"
              :currentIndex="key"
              @plus="plus"
              @reduce="reduce"
            ></goods-item>
          </section>
        </scrolltab-panel>
      </scrolltab>
    </main>
  </section>
</template>
<script>
import scrolltabPanel from '@/components/scrolltab/scrolltab-panel.vue';
import scrolltab from '@/components/scrolltab/scrolltab.vue';
import goodsItem from '@/components/goodsItem/goodsItem.vue';
import { BASE_URL } from '@/api/urls.js';
import { setStorage, getStorage, removeStorage } from '@/utils/Storage.js';
import {
  getGoosList
} from '@/api/index.js';
import axios from 'axios';

export default {
  name: 'Shop',
  data() {
    return {
      BASE_URL: BASE_URL,
      classList: [],
      configs:{}
    };
  },
  methods:{
    //购物车添加
    plus(options){
      this.classList[options.parentIndex].goodsList[options.currentIndex].count++;
    },
    //购物车减少
    reduce(options){
      this.classList[options.parentIndex].goodsList[options.currentIndex].count--;
    }
  },
  mounted() {
    let trolley = getStorage('trolley');
    console.log(trolley);
    getGoosList().then(res => {
      console.log(res);
      //记录商品数据
      this.classList = res.data.goods.map(item => {
        let tempItem = item;
        tempItem.goodsList.map(goods => {
          let tempGoods = goods;
          tempGoods.count = 0;
          return tempGoods;
        });
        return tempItem;
      });
      //记录配置数据
      this.configs = res.data.configs;
    }).catch(err => {
      console.log(err);
    });
  },
  components: {
    scrolltabPanel,
    scrolltab,
    goodsItem
  }
};

</script>
<style lang="less" scoped>
@import './Shop.less';

</style>
