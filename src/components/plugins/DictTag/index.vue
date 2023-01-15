<template>
    <div>
        <template v-for="(item, index) in options">
            <template v-if="values.includes(item.dictValue)">
                <span v-if="item.listClass == 'default' || item.listClass == ''" :key="item.dictValue"
                      :class="item.cssClass" :index="index">
                    {{ item.dictName }}
                </span>
                <el-tag
                    v-else
                    :key="item.dictValue"
                    :class="item.cssClass"
                    :disable-transitions="true"
                    :index="index"
                    :type="item.listClass == 'primary' ? '' : item.listClass">
                    {{ item.dictName }}
                </el-tag>
            </template>
        </template>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "DictTag",
        props: {
            options: {
                type: Array,
                default: () => {
                }
            },
            value: {
                type: [Number, String, Array],
                default: () => []
            }
        },
        computed: {
            values() {
                if (this.value !== null && typeof this.value !== "undefined") {
                    return Array.isArray(this.value) ? this.value : [String(this.value)];
                } else {
                    return [];
                }
            }
        }
    });
</script>
<style scoped>
.el-tag + .el-tag {
    margin-left: 10px;
}
</style>
