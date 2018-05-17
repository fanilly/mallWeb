/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-17 10:40:03
 * @Description: 请求共用部分
 */

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded';
const publicRequests = {
  fetchGet(url, options = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, options).then(res => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  fetchPost(url, options = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, options).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  fetchQuickGet(url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
};
export default publicRequests;
