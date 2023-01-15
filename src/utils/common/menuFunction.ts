import { Router } from 'vue-router';

/**
 * 处理菜单点击事件
 * @param menu
 * @param router
 */
export function handleMenuClick(menu: any, router: Router) {
    if (menu.meta.isLink != '' && menu.meta.isIframe != 1) {
        //如果为外部链接则直接返回
        return false;
    }
    //内嵌
    if (menu.meta.isIframe == 1) {
        //带参数
        if (menu.meta.params) {
            router.push({ name: menu.name, params: JSON.parse(menu.meta.params) });
        } else {
            router.push(menu.path);
        }
    } else {
        //打开新页面
        if (menu.meta.params) {
            const { href } = router.resolve({ name: menu.name, params: JSON.parse(menu.meta.params) });
            window.open(href, '_blank');
        } else {
            window.open('/#' + menu.path);
        }
    }
}
