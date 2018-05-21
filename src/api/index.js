/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-17 10:58:41
 * @Description: app 请求集合
 */

import HTTPS from './public.js';
import {
  GET_GOODS_LIST_URL,
  GET_COUPONS_URL
} from './urls.js';

const REQUESTS = {
  //获取商品列表
  getGoosList() {
    return HTTPS.fetchQuickGet(GET_GOODS_LIST_URL);
  },
  //获取优惠券信息
  getCoupons(options){
    return HTTPS.fetchGet(GET_COUPONS_URL,options);
  }
};

export const getGoosList = REQUESTS.getGoosList;
export const getCoupons = REQUESTS.getCoupons;
