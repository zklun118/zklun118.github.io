/*
 * @Description: 路由模块
 * @Author: HTMoon 社区人员
 * @Date: 2021-06-10 11:00:54
 * @LastEditTime: 2021-06-10 16:34:14
 */


export const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import("@/layout/index.vue")
    },
]