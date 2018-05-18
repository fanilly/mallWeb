<template>
  <section class="container">
    <header class="header">
      <section class="search-box">
        <section class="search-box-content">请输入关键词搜索商品</section>
      </section>
      <section class="shop-info">
      </section>
    </header>
    <main class="main">
      <scrolltab>
        <scrolltab-panel :label="item.catname" :icon="item.icon || ''" v-for="item,key in classList" :key="key">
          <section class="class-container">
            <goods-item v-for="(sub, key) in item.goodsList" :key="key" :item="sub" :baseurl="BASE_URL"></goods-item>
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
import {
  getGoosList
} from '@/api/index.js';
import axios from 'axios';

export default {
  name: 'Shop',
  data() {
    return {
      BASE_URL:BASE_URL,
      classList: []
    };
  },
  mounted() {
    getGoosList().then(res => {
      console.log(res);
      this.classList = res.data.goods;
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
