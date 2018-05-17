/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-17 10:58:41
 * @Description: app 请求集合
 */

import HTTPS from './public.js';
import {
  GET_GOODS_LIST_URL
} from './urls.js';

const requests = {
  //获取商品列表
  getGoosList() {
    return HTTPS.fetchQuickGet(GET_GOODS_LIST_URL);
  }
};
