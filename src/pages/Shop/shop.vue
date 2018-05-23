<template>
  <section class="container">
    <header class="header">
      <!-- 店铺信息 -->
      <section class="header-wapper">
        <section class="search-box">
          <section class="search-box-content">请输入关键词搜索商品</section>
        </section>
        <section class="mall-info">
          <section class="mall-info-header">
            <section class="mall-info-header-lside">
              <img v-lazy="configs.goodsimg" class="logo" alt="店铺头像">
            </section>
            <section class="mall-info-header-rside">
              <h2 class="mall-name">{{configs.mallName}}</h2>
              <p class="mall-desc">{{configs.mallDesc}}</p>
            </section>
          </section>
          <section class="mall-info-notice-wapper" @click="toggleCouponsShow">
            <span class="notice-icon"><i class="iconfont icon-laba"></i></span>
            <h3>{{configs.couponsDesc}}</h3>
            <span :class="showCoupons ? 'more-icon opened' : 'more-icon'"><i class="iconfont icon-jiantouyou"></i></span>
          </section>
        </section>
      </section>
      <!-- 优惠信息 -->
      <transition name="benefit">
        <section v-if="showCoupons">
          <section class="benefit">
            <coupon v-for="(item,index) of coupons" :key="index" class="coupon" :settings="item"></coupon>
          </section>
          <section class="benefit-info">
            <div v-for="(item,index) in benefits" :key="index">
              <span :style="'color:'+item.color"><i :class="'iconfont '+item.icon"></i></span>
              <p>{{item.content}}</p>
            </div>
          </section>
        </section>
      </transition>
    </header>

    <!-- 商品 -->
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

    <section class="parabola-point" ref="parabolaPoint"></section>

    <!-- 底部 -->
    <footer class="trolley">
      <trolley-icon class="trolley-icon" :total="trolleysTotal"></trolley-icon>
      <div class="count">总计 <span>￥{{totalMoney}}</span> 元</div>
      <div class="btn" @click="handleGoSettlement">选好了</div>
    </footer>
  </section>
</template>

<script>
import scrolltabPanel from '@/components/scrolltab/scrolltab-panel.vue';
import scrolltab from '@/components/scrolltab/scrolltab.vue';
import goodsItem from '@/components/goodsItem/goodsItem.vue';
import coupon from '@/components/coupon/coupon.vue';
import trolleyIcon from '@/components/trolleyIcon/trolleyIcon.vue';
import { BASE_URL } from '@/api/urls.js';
import storageUtils from '@/utils/Storage.js';
import parabola from '@/utils/parabola.js';
import {
  getGoosList,
  getCoupons
} from '@/api/index.js';
import axios from 'axios';

export default {
  name: 'Shop',
  data() {
    return {
      BASE_URL: BASE_URL, //图片根路径
      classList: [], //商品列表
      configs: {}, //商城配置
      trolleys: [], //购物车数据
      trolleysTotal: 0, //购物车总数
      totalMoney:0,
      benefits: [{
        icon: 'icon-man',
        color: '#fb574e',
        content: '满25减12；满49减25；满99减50'
      }, {
        icon: 'icon-zhe1',
        color: '#bf82e1',
        content: '折扣商品五折起'
      }, {
        icon: 'icon-zeng',
        color: '#118eea',
        content: '购买指定商品有赠品'
      }, {
        icon: 'icon-ling',
        color: '#f08118',
        content: '有机会领取商家代金券'
      }],
      showCoupons: false, //是否显示优惠模块
      coupons: [] //优惠券
    };
  },
  methods: {
    //初始化购物车
    initTrolley() {
      let trolleys = storageUtils.getStorage('trolleys');
      this.trolleys = trolleys ? JSON.parse(trolleys) : [];
      this.trolleysTotal = this.trolleys.map(item => item.count).reduce((total, num) => total + num);
      this.totalMoney = this.trolleys.map(item => item.shopprice*item.count).reduce((total,num)=>total+num);
    },

    //购物车添加
    plus(options, e) {
      let currentGoods = this.classList[options.parentIndex].goodsList[options.currentIndex];
      this.trolleysTotal++;
      currentGoods.count++;
      //如果购物车中已经存在当前商品 count +1
      //否则把当前商品存入购物车
      let index = this.trolleys.findIndex(item => currentGoods.goodsid == item.goodsid);
      (index != -1 ? this.trolleys[index].count++ : this.trolleys.push(currentGoods));
      storageUtils.setStorage('trolleys', this.trolleys);
      this.totalMoney = this.trolleys.map(item => item.shopprice*item.count).reduce((total,num)=>total+num);

      //抛物线动画
      let circleRadius = this.$refs.parabolaPoint.offsetWidth/2,
        x = e.clientX,
        y = e.clientY;
      this.$refs.parabolaPoint.style.opacity = 1;
      this.$refs.parabolaPoint.style.left = `${x-circleRadius}px`;
      this.$refs.parabolaPoint.style.top = `${y-circleRadius}px`;
      parabola({
        startPos: { x, y },
        endPos: { x: 40, y: 690 },
        frame: (x, y) => {
          this.$refs.parabolaPoint.style.left = `${x-circleRadius}px`;
          this.$refs.parabolaPoint.style.top = `${y-circleRadius}px`;
        },
        callback: () => {
          this.$refs.parabolaPoint.style.opacity = 0;
        }
      });
    },

    //购物车减少
    reduce(options) {
      let currentGoods = this.classList[options.parentIndex].goodsList[options.currentIndex];
      currentGoods.count--;
      this.trolleysTotal--;
      //如果购物车中当前商品数量大于1 count-1
      //否则把当前商品从购物车中移除
      let index = this.trolleys.findIndex(item => currentGoods.goodsid == item.goodsid);
      (this.trolleys[index].count > 1 ? this.trolleys[index].count-- : this.trolleys.splice(index, 1));
      storageUtils.setStorage('trolleys', this.trolleys);
      this.totalMoney = this.trolleys.map(item => item.shopprice*item.count).reduce((total,num)=>total+num);
    },

    //显示与隐藏优惠券模块
    toggleCouponsShow() {
      this.showCoupons = !this.showCoupons;
    },

    //点击选好了
    handleGoSettlement(){
      if( this.trolleysTotal >= 1 ){
        this.$router.push({
          name:'Settlement'
        });
      }else{

      }
    }
  },
  mounted() {
    this.initTrolley();
    console.log(this.$refs.parabolaPoint.style);
    getGoosList().then(res => {
      console.log(res);

      //记录商品数据
      this.classList = res.data.goods.map(item => {
        let tempItem = item;
        tempItem.goodsList.map(goods => {
          let tempGoods = goods,
            index = this.trolleys.findIndex(sub => sub.goodsid == tempGoods.goodsid);
          tempGoods.count = index != -1 ? this.trolleys[index].count : 0;
          return tempGoods;
        });
        return tempItem;
      });

      // 如果购入车中的商品与本次获取的商品信息不符
      // 更新存储的购物车数据
      this.trolleys = this.trolleys.map(item => {
        for (let i = 0; i < this.classList.length; i++) {
          let currentGoods = this.classList[i].goodsList,
            tempIndex = currentGoods.findIndex(sub => sub.goodsid == item.goodsid);
          if (tempIndex != -1) {
            if (JSON.stringify(currentGoods[tempIndex]) != JSON.stringify(item)) item = currentGoods[tempIndex];
            break;
          }
        }
        return item;
      });
      storageUtils.setStorage('trolleys', this.trolleys);

      //记录配置数据
      this.configs = res.data.configs;
    }).catch(err => {
      console.log(err);
    });

    // 获取优惠券信息
    getCoupons({ userId: 1 }).then(res => {
      console.log(res);
      this.coupons = res.data;
    });
  },
  components: {
    scrolltabPanel,
    scrolltab,
    goodsItem,
    coupon,
    trolleyIcon
  }
};

</script>
<style lang="less" scoped>
@import './Shop.less';

</style>
