/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-17 10:31:53
 * @Description: api 请求地址
 */

const HOST = 'http://mall-seo.hohu.cc';
const URLS = {
  HOST,
  BASE_URL: `${HOST}/public/uploads/`,
  GET_GOODS_LIST_URL: `${HOST}/goods/index`,
  GET_COUPONS_URL: `${HOST}/Coupons/index`,
  RECEIVE_COUPON_URL: `${HOST}/Coupons/getCoupons`
};
module.exports = URLS;
