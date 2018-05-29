/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-17 10:58:41
 * @Description: app 请求集合
 */

import HTTPS from './public.js';
import {
  GET_GOODS_LIST_URL,
  GET_COUPONS_URL,
  RECEIVE_COUPON_URL,
  UPLOAD_URL
} from './urls.js';

const REQUESTS = {
  //获取商品列表
  getGoosList() {
    return HTTPS.fetchQuickGet(GET_GOODS_LIST_URL);
  },
  //获取优惠券信息
  getCoupons(options){
    return HTTPS.fetchGet(GET_COUPONS_URL,options);
  },
  //领取优惠券
  receiveCoupon(options){
    return HTTPS.fetchGet(RECEIVE_COUPON_URL,options);
  },
  //图片上传
  uploadImg(options){
    return HTTPS.fetchFilePost(UPLOAD_URL,options);
  }
};

export const getGoosList = REQUESTS.getGoosList;
export const getCoupons = REQUESTS.getCoupons;
export const receiveCoupon = REQUESTS.receiveCoupon;
