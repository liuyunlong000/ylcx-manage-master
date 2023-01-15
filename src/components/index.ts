import type { App } from 'vue';
import { defineAsyncComponent } from 'vue';

/**
 index.js文件
 公共组件规范：
 1、在src/components/plugins目录下创建目录，目录结构为一级，即 src/components/plugins/组件目录/index.vue
 2、目录名称必须与组件使用时的名称一致, 即目录名就是组件名
 */

/**
 * 加载自定义组件
 * @param app
 */
export function setupCustomComponents(app: App) {
    const modules = import.meta.glob('./plugins/**/*.vue');
    Object.keys(modules).forEach((key) => {
        const nameMatch = key.match(/^\.\/plugins\/(.+)\.vue/);
        if (!nameMatch) {
            return;
        }
        const indexMatch = nameMatch[1].match(/(.*)\/Index$/i);
        let name = indexMatch ? indexMatch[1] : nameMatch[1];
        let value = modules[key];
        app.component(name, defineAsyncComponent(value));
    });
}
