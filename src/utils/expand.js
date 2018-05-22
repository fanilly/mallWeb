/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-22 16:13:54
 * @Description: js 原型拓展
 */

export default function() {
  //修改原型链添加的写法
  Function.prototype.addMethods = !Function.addMethods ? function(methods) {
    for (let method in methods) this.prototype[method] = methods[method];
  } : Function.prototype.addMethods;
  Object.prototype.mjEqual = function(obj) {
    console.log(this)
    // let props1 = this.getOwnPropertyNames(this),
    //   props2 = obj.getOwnPropertyNames(obj);
    // console.log('sd');
    // if (props1.length != props2.length) return false;
    // for (let i = 0, max = props1.length; i < max; i++) {
    //   let propName = props1[i];
    //   if (this[propName] !== obj[propName]) return false;
    // }
    // return true;
  };
}
