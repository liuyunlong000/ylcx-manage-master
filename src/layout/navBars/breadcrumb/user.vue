<template>
    <div class="layout-navbars-breadcrumb-user" :style="{ flex: layoutUserFlexNum }">
        <el-dropdown :show-timeout="70" :hide-timeout="50" trigger="click" @command="onComponentSizeChange">
            <div class="layout-navbars-breadcrumb-user-icon">
                <i class="iconfont icon-ziti" :title="$t('message.user.title0')"></i>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="large" :disabled="disabledSize === 'large'">
                        {{ $t('message.user.dropdownLarge') }}
                    </el-dropdown-item>
                    <el-dropdown-item command="default" :disabled="disabledSize === 'default'"
                    >{{ $t('message.user.dropdownDefault') }}
                    </el-dropdown-item>
                    <el-dropdown-item command="small" :disabled="disabledSize === 'small'">
                        {{ $t('message.user.dropdownSmall') }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-dropdown :show-timeout="70" :hide-timeout="50" trigger="click" @command="onLanguageChange" v-show="false">
            <div class="layout-navbars-breadcrumb-user-icon">
                <i
                    class="iconfont"
                    :class="disabledI18n === 'en' ? 'icon-fuhao-yingwen' : 'icon-fuhao-zhongwen'"
                    :title="$t('message.user.title1')"
                ></i>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="zh-cn" :disabled="disabledI18n === 'zh-cn'">简体中文</el-dropdown-item>
                    <el-dropdown-item command="en" :disabled="disabledI18n === 'en'">English</el-dropdown-item>
                    <el-dropdown-item command="zh-tw" :disabled="disabledI18n === 'zh-tw'">繁體中文</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <div class="layout-navbars-breadcrumb-user-icon" @click="onSearchClick" v-show="false">
            <el-icon :title="$t('message.user.title2')">
                <ele-Search/>
            </el-icon>
        </div>
        <div class="layout-navbars-breadcrumb-user-icon" @click="onLayoutSetingClick" v-show="true">
            <i class="icon-skin iconfont" :title="'布局配置'"></i>
        </div>
        <div class="layout-navbars-breadcrumb-user-icon" v-show="false">
            <el-popover placement="bottom" trigger="click" :width="300">
                <template #reference>
                    <el-badge :is-dot="true">
                        <el-icon :title="'消息'">
                            <ele-Bell/>
                        </el-icon>
                    </el-badge>
                </template>
                <UserNews/>
            </el-popover>
        </div>
        <div class="layout-navbars-breadcrumb-user-icon mr10" @click="onScreenfullClick">
            <i
                class="iconfont"
                :title="isScreenfull ? '退出全屏' : '全屏'"
                :class="!isScreenfull ? 'icon-fullscreen' : 'icon-tuichuquanping'"
            ></i>
        </div>
        <el-dropdown :show-timeout="70" :hide-timeout="50" @command="onHandleCommandClick">
            <span class="layout-navbars-breadcrumb-user-link">
                <img :src="getUserInfos.photo" class="layout-navbars-breadcrumb-user-link-photo mr5"/>
                {{ getUserInfos.userName === '' ? 'common' : getUserInfos.userName }}
                <el-icon class="el-icon--right">
                    <ele-ArrowDown/>
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <!--                    <el-dropdown-item command="/home">{{ $t('message.user.dropdown1') }}</el-dropdown-item>-->
                    <!--                    <el-dropdown-item command="/personal">{{ $t('message.user.dropdown2') }}</el-dropdown-item>-->
                    <!--                    <el-dropdown-item command="/404">{{ $t('message.user.dropdown3') }}</el-dropdown-item>-->
                    <!--                    <el-dropdown-item command="/401">{{ $t('message.user.dropdown4') }}</el-dropdown-item>-->
                    <el-dropdown-item divided command="logOut">退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <Search ref="searchRef"/>
    </div>
</template>

<script lang="ts">
    import {ref, getCurrentInstance, computed, reactive, toRefs, onMounted, defineComponent} from "vue";
    import {useRouter} from "vue-router";
    import screenfull from "screenfull";
    import {useI18n} from "vue-i18n";
    import {resetRoute} from "/@/router/index";
    import {useStore} from "/@/store/index";
    import other from "/@/utils/other";
    import {Session, Local} from "/@/utils/common/storage";
    import UserNews from "/@/layout/navBars/breadcrumb/userNews.vue";
    import Search from "/@/layout/navBars/breadcrumb/search.vue";
    import {logout} from "/@/api/login";

    export default defineComponent({
        name: "layoutBreadcrumbUser",
        components: {UserNews, Search},
        setup() {
            const {t} = useI18n();
            const {proxy} = <any>getCurrentInstance();
            const router = useRouter();
            const store = useStore();
            const searchRef = ref();
            const state = reactive({
                isScreenfull: false,
                disabledI18n: "zh-cn",
                disabledSize: "large"
            });
            // 获取用户信息 vuex
            const getUserInfos = computed(() => {
                return <any>store.state.userInfos.userInfos;
            });
            // 获取布局配置信息
            const getThemeConfig = computed(() => {
                return store.state.themeConfig.themeConfig;
            });
            // 设置分割样式
            const layoutUserFlexNum = computed(() => {
                let num: string | number = "";
                const {layout, isClassicSplitMenu} = getThemeConfig.value;
                const layoutArr: string[] = ["defaults", "columns"];
                if (layoutArr.includes(layout) || (layout === "classic" && !isClassicSplitMenu)) num = "1";
                else num = "";
                return num;
            });
            // 全屏点击时
            const onScreenfullClick = () => {
                if (!screenfull.isEnabled) {
                    proxy.$baseMessage("暂不不支持全屏", "warning");
                    return false;
                }
                screenfull.toggle();
                screenfull.on("change", () => {
                    if (screenfull.isFullscreen) {
                        state.isScreenfull = true;
                    } else {
                        state.isScreenfull = false;
                    }
                });
            };
            // 布局配置 icon 点击时
            const onLayoutSetingClick = () => {
                proxy.mittBus.emit("openSetingsDrawer");
            };
            // 下拉菜单点击时
            const onHandleCommandClick = (path: string) => {
                if (path === "logOut") {
                    proxy.$baseConfirm("此操作将退出登录, 是否继续?", "提示", async () => {
                        await logout();
                        Session.clear(); // 清除缓存/token等
                        await resetRoute(); // 删除/重置路由
                        proxy.$baseMessage("安全退出成功！", "success");
                        setTimeout(() => {
                            window.location.href = ""; // 去登录页
                        }, 500);
                    });
                } else {
                    router.push(path);
                }
            };
            // 菜单搜索点击
            const onSearchClick = () => {
                searchRef.value.openSearch();
            };
            // 组件大小改变
            const onComponentSizeChange = (size: string) => {
                Local.remove("themeConfig");
                getThemeConfig.value.globalComponentSize = size;
                Local.set("themeConfig", getThemeConfig.value);
                initComponentSize();
                window.location.reload();
            };
            // 语言切换
            const onLanguageChange = (lang: string) => {
                Local.remove("themeConfig");
                getThemeConfig.value.globalI18n = lang;
                Local.set("themeConfig", getThemeConfig.value);
                proxy.$i18n.locale = lang;
                initI18n();
                other.useTitle();
            };
            // 设置 element plus 组件的国际化
            const setI18nConfig = (locale: string) => {
                proxy.mittBus.emit("getI18nConfig", proxy.$i18n.messages[locale]);
            };
            // 初始化言语国际化
            const initI18n = () => {
                switch (Local.get("themeConfig").globalI18n) {
                    case "zh-cn":
                        state.disabledI18n = "zh-cn";
                        setI18nConfig("zh-cn");
                        break;
                    case "en":
                        state.disabledI18n = "en";
                        setI18nConfig("en");
                        break;
                    case "zh-tw":
                        state.disabledI18n = "zh-tw";
                        setI18nConfig("zh-tw");
                        break;
                }
            };
            // 初始化全局组件大小
            const initComponentSize = () => {
                switch (Local.get("themeConfig").globalComponentSize) {
                    case "large":
                        state.disabledSize = "large";
                        break;
                    case "default":
                        state.disabledSize = "default";
                        break;
                    case "small":
                        state.disabledSize = "small";
                        break;
                }
            };
            // 页面加载时
            onMounted(() => {
                if (Local.get("themeConfig")) {
                    initI18n();
                    initComponentSize();
                }
            });
            return {
                getUserInfos,
                onLayoutSetingClick,
                onHandleCommandClick,
                onScreenfullClick,
                onSearchClick,
                onComponentSizeChange,
                onLanguageChange,
                searchRef,
                layoutUserFlexNum,
                ...toRefs(state)
            };
        }
    });
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb-user {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-link {
        height: 100%;
        display: flex;
        align-items: center;
        white-space: nowrap;

        &-photo {
            width: 25px;
            height: 25px;
            border-radius: 100%;
        }
    }

    &-icon {
        padding: 0 10px;
        cursor: pointer;
        color: var(--next-bg-topBarColor);
        height: 50px;
        line-height: 50px;
        display: flex;
        align-items: center;

        &:hover {
            background: var(--next-color-user-hover);

            i {
                display: inline-block;
                animation: logoAnimation 0.3s ease-in-out;
            }
        }
    }

    ::v-deep(.el-dropdown) {
        color: var(--next-bg-topBarColor);
    }

    ::v-deep(.el-badge) {
        height: 40px;
        line-height: 40px;
        display: flex;
        align-items: center;
    }

    ::v-deep(.el-badge__content.is-fixed) {
        top: 12px;
    }
}
</style>
