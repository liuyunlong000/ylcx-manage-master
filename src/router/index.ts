import { createRouter, createWebHashHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { store } from '/@/store/index.ts';
import { Session } from '/@/utils/common/storage';
import { NextLoading } from '/@/utils/common/loading';
import { staticRoutes, dynamicRoutes } from '/@/router/route';
import { dynamicImportByName, initBackEndControlRoutes } from '/@/router/backEnd';

/**
 * 创建一个可以被 Vue 应用程序使用的路由实例
 * @method createRouter(options: RouterOptions): Router
 * @link 参考：https://next.router.vuejs.org/zh/api/#createrouter
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes,
});

/**
 * 定义404界面
 * @link 参考：https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#netlify
 */
const pathMatch = {
    path: '/:path(.*)*',
    redirect: '/404',
};

/**
 * 路由多级嵌套数组处理成一维数组
 * @param arr 传入路由菜单数据数组
 * @returns 返回处理后的一维路由菜单数组
 */
export function formatFlatteningRoutes(arr: any) {
    if (arr.length <= 0) return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].children) {
            arr = arr.slice(0, i + 1).concat(arr[i].children, arr.slice(i + 1));
        }
    }
    return arr;
}

/**
 * 一维数组处理成多级嵌套数组（只保留二级：也就是二级以上全部处理成只有二级，keep-alive 支持二级缓存）
 * @description isKeepAlive 处理 `name` 值，进行缓存。顶级关闭，全部不缓存
 * @link 参考：https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive
 * @param arr 处理后的一维路由菜单数组
 * @returns 返回将一维数组重新处理成 `定义动态路由（dynamicRoutes）` 的格式
 */
export function formatTwoStageRoutes(arr: any) {
    if (arr.length <= 0) {
        return false;
    }
    const newArr: any = [];
    const cacheList: Array<string> = [];
    arr.forEach((v: any) => {
        if (v.path === '/') {
            newArr.push({
                component: v.component,
                name: v.name,
                path: v.path,
                redirect: v.redirect,
                meta: v.meta,
                children: [],
            });
        } else {
            // 判断是否是动态路由（xx/:id/:name），用于 tagsView 等中使用
            // 修复：https://gitee.com/lyt-top/vue-next-admin/issues/I3YX6G
            if (v.path.indexOf('/:') > -1) {
                v.meta['isDynamic'] = true;
                v.meta['isDynamicPath'] = v.path;
            }
            //如果外部链接不为空
            if (v.meta.isLink != '') {
                if (v.meta.isIframe == 1) {
                    v.component = dynamicImportByName('../layout/routerView/iframes.vue'); //iframe的方式
                } else {
                    v.component = dynamicImportByName('../layout/routerView/link.vue'); //新开页面方式
                }
            }
            if (v.meta.inherit) {
                //作为主框架的二级路由
                newArr[0].children.push({ ...v });
            } else {
                //不使用主框架的样式，直接作为一级路由
                newArr.push({ ...v });
            }
            // 存 name 值，keep-alive 中 include 使用，实现路由的缓存
            // 路径：/@/layout/routerView/parent.vue
            if (newArr[0].meta.isKeepAlive && v.meta.isKeepAlive) {
                cacheList.push(v.name);
                store.dispatch('keepAliveNames/setCacheKeepAlive', cacheList).then(() => {});
            }
        }
    });
    return newArr;
}

/**
 * 缓存多级嵌套数组处理后的一维数组
 * @description 用于 tagsView、菜单搜索中：未过滤隐藏的(isHide)
 */
export function setCacheTagsViewRoutes() {
    // 添加到 vuex setTagsViewRoutes 中
    store.dispatch('tagsViewRoutes/setTagsViewRoutes', formatTwoStageRoutes(formatFlatteningRoutes(dynamicRoutes))[0].children).then(() => {});
}

/**
 * 设置递归过滤有权限的路由到 vuex routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
 * @description 用于左侧菜单、横向菜单的显示
 * @description 用于 tagsView、菜单搜索中：未过滤隐藏的(isHide)
 */
export function setFilterMenuAndCacheTagsViewRoutes(menuList: any) {
    store.dispatch('routesList/setRoutesList', menuList).then(() => {});
    setCacheTagsViewRoutes();
}

/**
 * 获取有当前用户权限标识的路由数组，进行对原路由的替换
 * @description 替换 dynamicRoutes（/@/router/route）第一个顶级 children 的路由
 * @returns 返回替换后的路由数组
 */
export function setFilterRouteEnd() {
    let filterRouteEnd: any = formatTwoStageRoutes(formatFlatteningRoutes(dynamicRoutes));
    filterRouteEnd[0].children = [...filterRouteEnd[0].children, { ...pathMatch }];
    return filterRouteEnd;
}

/**
 * 添加动态路由
 * @method router.addRoute
 * @description 此处循环为 dynamicRoutes（/@/router/route）第一个顶级 children 的路由一维数组，非多级嵌套
 * @link 参考：https://next.router.vuejs.org/zh/api/#addroute
 */
export async function setAddRoute() {
    await setFilterRouteEnd().forEach((route: RouteRecordRaw) => {
        const routeName: any = route.name;
        if (!router.hasRoute(routeName)) {
            router.addRoute(route);
        }
    });
}

/**
 * 删除/重置路由
 * @method router.removeRoute
 * @description 此处循环为 dynamicRoutes（/@/router/route）第一个顶级 children 的路由一维数组，非多级嵌套
 * @link 参考：https://next.router.vuejs.org/zh/api/#push
 */
export async function resetRoute() {
    await setFilterRouteEnd().forEach((route: RouteRecordRaw) => {
        const routeName: any = route.name;
        router.hasRoute(routeName) && router.removeRoute(routeName);
    });
}

// 路由加载前
router.beforeEach(async (to, from, next) => {
    NProgress.configure({ showSpinner: false });
    if (to.meta.title) {
        NProgress.start();
    }
    const token = Session.get('token');
    // console.log('11111111=' + to.path + ',token=' + token);
    if (to.path === '/login' && !token) {
        // console.log('1.1');
        next();
        NProgress.done();
    } else {
        if (!token) {
            if (to.meta.auth === true || to.path === '/') {
                //如果需要授权访问，则转到登录页
                await toLoginPage(to, next);
            } else {
                next();
                NProgress.done();
            }
        } else if (token && to.path === '/login') {
            // console.log('转到/home');
            next('/index');
            NProgress.done();
        } else if (token && to.path === '/') {
            next('/index');
            NProgress.done();
        } else {
            next();
        }
    }
});

/**
 * 转到登录页
 * @param to
 * @param next
 */
export async function toLoginPage(to: RouteLocationNormalized, next: NavigationGuardNext) {
    next(`/login?redirect=${to.path}&params=${JSON.stringify(to.query ? to.query : to.params)}`);
    Session.clear();
    await resetRoute();
    NProgress.done();
}

// 路由加载后
router.afterEach(() => {
    NProgress.done();
    NextLoading.done();
});

// 导出路由
export default router;
