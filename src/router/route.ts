import { RouteRecordRaw } from 'vue-router';

/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义动态路由
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 * @returns 返回路由菜单数据
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        component: () => import('/@/layout/index.vue'),
        redirect: '',
        meta: {
            isKeepAlive: true,
        },
        children: [
            /*{
                path: '/home',
                name: 'home',
                component: () => import('/@/views/home/my.vue'),
                meta: {
                    title: 'message.router.home',
                    isLink: '',
                    isHide: false,
                    isKeepAlive: true,
                    isAffix: true,
                    isIframe: false,
                    roles: ['admin', 'common'],
                    icon: 'iconfont icon-shouye',
                },
            },*/
        ],
    },
];

/**
 * 定义静态路由
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('/@/views/login/index.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        path: '/404',
        name: 'notFound',
        component: () => import('/@/views/error/404.vue'),
        meta: {
            title: 'message.staticRoutes.notFound',
        },
    },
    {
        path: '/401',
        name: 'noPower',
        component: () => import('/@/views/error/401.vue'),
        meta: {
            title: 'message.staticRoutes.noPower',
        },
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('/@/views/index.vue'),
        meta: {
            title: '首页',
            auth: true,
        },
        children: [
            {
                path: "/index",
                redirect: '/home'
            },
            {
                path: "/home", // 首页
                name: 'home',
                component: () => import("/@/views/home/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/home/",
                        redirect: '/home/swapper'
                    },
                    {
                        path: "/home/swapper",
                        name: 'swapper',
                        component: () => import("/@/views/wz/wzHome/index.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },{
                        path: "/home/scientificDynamic",
                        name: 'scientificDynamic',
                        component: () => import("/@/views/wz/wzScientificDynamic/index.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
            {
                path: "/scientific",
                name: 'scientific',
                component: () => import("/@/views/wz/wzScientific/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                }
            },{
                path: "/innovate",
                name: 'innovate',
                component: () => import("/@/views/wz/wzInnovate/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                }
            },{
                path: "/innovatePlatform",
                name: 'innovatePlatform',
                component: () => import("/@/views/wz/wzInnovatePlatform/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                }
            },{
                path: "/product",
                name: 'product',
                component: () => import("/@/views/wz/wzProduct/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                }
            },
            {
                path: "/survey", // 研究院概况
                name: 'survey',
                component: () => import("/@/views/survey/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/survey/",
                        redirect: '/survey/leader'
                    },
                    {
                        path: "/survey/leader",
                        name: 'leader',
                        component: () => import("/@/views/wz/wzLeader/index.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                ]
            },
            {
                path: "/news", // 新闻中心
                name: 'news',
                component: () => import("/@/views/news/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/news/",
                        redirect: '/news/newscore'
                    },
                    {
                        path: "/news/newscore",
                        name: 'newscore',
                        component: () => import("/@/views/wz/wzNews/index.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },{
                        path: "/news/notice",
                        name: 'notice',
                        component: () => import("/@/views/wz/wzNotice/index.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                ]
            },
            {
                path: "/talent", // 人才队伍
                name: 'talent',
                component: () => import("/@/views/talent/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/talent/",
                        redirect: '/talent/talent'
                    },
                    {
                        path: "/talent/talent",
                        name: 'talent',
                        component: () => import("/@/views/wz/wzPersonnelOverview/index.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },{
                        path: "/talent/recruit",
                        name: 'recruit',
                        component: () => import("/@/views/wz/wzPersonnelRecruit/index.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/talent/dynamic",
                        name: 'dynamic',
                        component: () => import("/@/views/wz/wzPersonnelDynamic/index.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                ]
            },
        ]
    }
];
