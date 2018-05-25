/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-25 13:56:15
 * @Description: 禁止滚动
 */
export default (function() {
  const fn = function(e) {
    e.preventDefault();
    e.stopPropagation();
  };
  let flag = false;

  return {
    handle(el) {
      if (flag) return;
      flag = true;
      (el || document).addEventListener('touchmove', fn);
    },
    unhandle(el) {
      flag = false;
      (el || document).removeEventListener('touchmove', fn);
    }
  };
})();
