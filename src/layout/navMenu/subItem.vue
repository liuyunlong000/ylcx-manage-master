<template>
    <template v-for="val in chils">
        <el-sub-menu :index="val.path" :key="val.path" v-if="val.children && val.children.length > 0">
            <template #title>
                <SvgIcon :name="val.meta.icon"/>
                <span>{{ val.meta.title }}</span><!--目录-->
            </template>
            <sub-item :chil="val.children"/>
        </el-sub-menu>
        <template v-else>
            <el-menu-item :index="val.path" :key="val.path" @click="handleLink(val)">
                <template v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
                    <SvgIcon :name="val.meta.icon"/>
                    <span>{{ val.meta.title }}</span><!--菜单-->
                </template>
                <template v-else>
                    <a :href="val.meta.isLink" target="_blank" rel="opener" class="w100">
                        <SvgIcon :name="val.meta.icon"/><!--外部链接-->
                        {{ val.meta.title }}
                    </a>
                </template>
            </el-menu-item>
        </template>
    </template>
</template>

<script lang="ts">
    import {computed, defineComponent} from "vue";
    import {useRouter} from "vue-router";
    import {handleMenuClick} from "/@/utils/common/menuFunction";

    export default defineComponent({
        name: "navMenuSubItem",
        props: {
            chil: {
                type: Array,
                default: () => []
            }
        },
        setup(props) {
            const router = useRouter();
            // 获取父级菜单数据
            const chils = computed(() => {
                return <any>props.chil;
            });
            const handleLink = (menu: any) => {
                handleMenuClick(menu, router);
            };
            return {
                chils,
                handleLink
            };
        }
    });
</script>
