import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const pathArr = window.location.pathname.split("/");
//定義頁面路徑
const routes = [
    { path: '', redirect: '/home' },
    {
        path: '/home',
        component: () => import('./pages/home.vue'),
        name: "Home",
        meta: {
            breadcrumbName: '首頁'
        }
    },
    {
        path: `/about`,
        component: () => import("./pages/about.vue"),
        name: "About",
        meta: {
            breadcrumbName: '關於五六'
        }
    },
    {
        path: `/blog`,
        component: () => import("./pages/blog.vue"),
        name: "Blog",
        meta: {
            breadcrumbName: '五六觀點'
        }
    },
    {
        path: `/blog/1`,
        component: () => import("./pages/blog/1.vue"),
        name: "Blog1"
    },
    {
        path: `/media`,
        component: () => import("./pages/media.vue"),
        name: "Media",
        meta: {
            breadcrumbName: '媒體報導'
        }
    },
    {
        path: '/media/1',
        name: 'Media1',
        component: () => import('./pages/media/1.vue')
    },
    {
        path: `/projects`,
        component: () => import("./pages/projects.vue"),
        name: "Projects",
        meta: {
            breadcrumbName: '案例分享'
        }
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: () => import('./pages/projects/_id.vue')
    },
    // {
    //     path: '/projects/1',
    //     name: 'Project1',
    //     component: () => import('./pages/projects/1.vue')
    // },
    {
        path: `/service`,
        component: () => import("./pages/service.vue"),
        name: "Service",
        meta: {
            breadcrumbName: '服務流程'
        }
    },
    {
        path: `/terms`,
        component: () => import("./pages/terms.vue"),
        name: "Terms",
        meta: {
            breadcrumbName: '法律條款'
        }

    },
    {
        path: `/contact`,
        component: () => import("./pages/contact.vue"),
        name: "Contact",
        meta: {
            breadcrumbName: '連絡五六'
        }
    },
]

//創建路徑並傳遞 本地
const router = createRouter({
    //history 模式實現
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 每次跳轉都捲動到頂部
        return { top: 0 }
    }
});

// 上伺服器
// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes,
//     scrollBehavior(to, from, savedPosition) {
//         // 每次跳轉都捲動到頂部
//         return { top: 0 }
//     }
// });

export default router;
