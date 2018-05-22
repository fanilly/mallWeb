/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-17 10:22:27
 * @Description: localStorage 的基本操作
 */
const Storage = {
  setStorage(name, value) {
    if (!name) return;
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(name, value);
  },

  removeStorage(name) {
    if (!name) return;
    return window.localStorage.removeItem(name);
  },

  getStorage(name) {
    if (!name) return;
    return window.localStorage.getItem(name);
  }
};

export default Storage;
