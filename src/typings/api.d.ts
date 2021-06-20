/*
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-07 10:35:41
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2021-06-07 11:01:49
 * @FilePath     : /vue3-1/src/typings/api.d.ts
 */

declare namespace Api {
  // 接口响应通过格式
  export interface HttpResponse {
    status: number;
    statusText: string;
    data: {
      code: number;
      desc: string;
      [key: string]: any;
    };
  }

}
