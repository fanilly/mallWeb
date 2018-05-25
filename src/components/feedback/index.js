/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2018-05-25 15:00:35
 * @Description: feedback 插件
 */
import Alert from './src/alert';
import Confirm from './src/confirm';
import Toast from './src/toast';
import Notify from './src/notify';
import Loading from './src/loading';

export default Vue => {
  Vue.prototype.feedback = {

    /**
     * {
     *   title:标题
     *   msg: 内容
     *   options:[{
     *      txt: String, //按钮文字
     *      color: Boolean or String, //按钮颜色
     *      stay: Boolean, //是否保留提示框
     *      callback: Function //按钮回调函数
     *   }]
     * }
     */

    Confirm,

    /**
     * {
     *   msg:提示信息
     *   callback:回调函数
     * }
     */

    Alert,

     /**
     * {
     *   msg:提示信息
     *   icon:success,error,none
     *   timeout:显示时长
     *   callback:回调函数
     * }
     */

    Toast,

    /**
     * {
     *   msg:提示信息
     *   timeout:显示时长
     *   callback:回调函数
     * }
     */

    Notify,

    /**
     * title: 提示信息
     */

    Loading
  };
};
