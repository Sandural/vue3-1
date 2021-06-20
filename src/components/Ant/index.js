/*
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-06 14:27:31
 * @LastEditors  :
 * @LastEditTime : 2021-06-07 10:12:24
 * @FilePath     : /vue3-1/src/components/Ant/index.ts
 */
import { Button, Layout, Menu, Breadcrumb, Icon, Input } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const com = [Button, Layout, Icon, Menu, Breadcrumb, Input];
export default function AntdUse(app) {
    com.forEach((item) => {
        app.use(item);
    });
}
//# sourceMappingURL=index.js.map