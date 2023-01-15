import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { directive } from '/@/utils/directive';
import { i18n } from '/@/i18n/index';
import other from '/@/utils/other';
import { dataDictMixin } from '/@/utils/mixin/dataDictMixin';
import { addDateRange, removeDateRange, parseTime, removePropFromMap, addPropToMap, expandTreeNode, convertTime } from '/@/utils/common/tools';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '/@/theme/index.scss';
import mitt from 'mitt';
import VueGridLayout from 'vue-grid-layout';
import { setupCustomComponents } from '/@/components';
import { setupElMessageBox } from '/@/utils/common/messageBox';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// @ts-ignore
import BaiduMap from 'vue-baidu-map-3x';
//全局引入Vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
//注册自定义指令
directive(app);
//导出全局注册 element plus svg 图标
other.elSvg(app);
//加载自定义组件,将组件放在src/components/plugins
setupCustomComponents(app);
//注册全局消息提示框
setupElMessageBox(app);
//注册全局方法
app.config.globalProperties.addDateRange = addDateRange;
app.config.globalProperties.removeDateRange = removeDateRange;
app.config.globalProperties.addPropToMap = addPropToMap;
app.config.globalProperties.removePropFromMap = removePropFromMap;
app.config.globalProperties.parseTime = parseTime;
app.config.globalProperties.expandTreeNode = expandTreeNode;
app.config.globalProperties.convertTime = convertTime;
//注册全局mittBus方法
app.config.globalProperties.mittBus = mitt();
//注册路由
app.use(router);
//注册vuex
app.use(store, key);
//混入数据字典
app.mixin(dataDictMixin);
//注册ElementPlus
app.use(ElementPlus, { locale: zhCn });
app.use(i18n);
app.use(VueGridLayout);
app.use(BaiduMap, {
    ak: 'SBFIFnKwniNOH19IkIxZMfppoQGMjSZi',
    // v:'2.0',  // 默认使用3.0
    // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
});
app.use(Vant);
app.mount("#app");
