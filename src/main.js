/*
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-03 21:39:17
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2021-06-07 11:07:36
 * @FilePath     : /vue3-1/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AntdUse from "./components/Ant/index";
import "./common/styles/global.scss";
// 引入mitt
import mitt from "mitt";
const mitter = mitt();
const app = createApp(App);
AntdUse(app);
// 加入全局变量中
app.config.globalProperties.$mitter = mitter;
app.use(store).use(router).mount("#app");
//# sourceMappingURL=main.js.map