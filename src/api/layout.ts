/*
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-07 10:38:27
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2021-06-07 11:24:09
 * @FilePath     : /vue3-1/src/api/layout.ts
 */

import request from "@/utils/request";
import base from "./base"; // 导入接口域名列表

const layout = {
  // 获取 Menu
  async getMenuList() {
    return await request.get(`/report/deptTree/list`);
  },
};

export default layout;
