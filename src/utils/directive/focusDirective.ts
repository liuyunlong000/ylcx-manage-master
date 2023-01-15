import type { App } from 'vue';

/**
 * 注册一个全局自定义指令 `v-focus`,好像没效果，后续继续研究
 */
export function focusDirective(app: App) {
    /**
     * 注册一个全局自定义指令 `v-focus`
     */
    app.directive('focus', {
        mounted(el) {
            el.focus();
        },
    });
}
