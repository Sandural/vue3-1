/**
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-03 21:39:17
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2021-06-08 16:02:24
 * @FilePath     : /vue3-1/src/router/index.ts
 */
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../App.vue"),
    },
    {
        path: "/user",
        name: "user",
        component: () => import("@/views/User/index.vue"),
        children: [
            {
                path: "/user/areas",
                name: "userAreas",
                component: () => import("@/views/User/userAreas.vue"),
            },
        ],
    },
    {
        path: "/user/:id",
        name: "userProfile",
        component: () => import("@/views/User/userProfile.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map