import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const pathArr = window.location.pathname.split("/");
//定義頁面路徑
const routes = [
    { path: '', redirect: '/home' },
    {
        path: '/home',
        component: () => import('@/pages/home.vue'),
        name: "Home"
    },
    {
        path: `/about`,
        component: () => import("@/pages/about.vue"),
        name: "About"
    },
    {
        path: `/blog`,
        component: () => import("@/pages/blog.vue"),
        name: "Blog"
    },
    {
        path: `/blog/1`,
        component: () => import("@/pages/blog/1.vue"),
        name: "Blog1"
    },
    {
        path: `/media`,
        component: () => import("@/pages/media.vue"),
        name: "Media"
    },
    {
        path: '/media/1',
        name: 'Media1',
        component: () => import('@/pages/media/1.vue')
    },
    {
        path: `/projects`,
        component: () => import("@/pages/projects.vue"),
        name: "Projects",
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: () => import('@/pages/projects/_id.vue')
    },
    {
        path: '/projects/1',
        name: 'Project1',
        component: () => import('@/pages/projects/1.vue')
    },
    {
        path: `/service`,
        component: () => import("@/pages/service.vue"),
        name: "Service"
    },
    {
        path: `/terms`,
        component: () => import("@/pages/terms.vue"),
        name: "Terms"
    },
    {
        path: `/contact`,
        component: () => import("@/pages/contact.vue"),
        name: "Contact"
    },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// //創建路徑並傳遞
// const router = createRouter({
//     //history 模式實現
//     history: createWebHistory(),
//     routes,
//     scrollBehavior(to, from, savedPosition) {
//         // 每次跳轉都捲動到頂部
//         return { top: 0 }
//     }
// });
export default router;
