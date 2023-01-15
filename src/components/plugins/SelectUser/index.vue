<template>
    <div>
        <el-dialog :title="dialogTitle" v-model="isShowDialog" width="1000px" draggable>
            <el-row :gutter="20">
                <el-col :lg="7" :md="7" :sm="24" :xl="6" :xs="24">
                    <el-tabs type="border-card">
                        <el-tab-pane label="按部门分类">
                            <div :style="'height:450px;width:100%;'">
                                <el-tree
                                    ref="treeRef"
                                    :expand-on-click-node="false"
                                    :data="deptListData"
                                    :props="{ children: 'children', label: 'deptName' }"
                                    node-key="deptId"
                                    @node-click="handleTreeNodeClick"
                                    highlight-current
                                />
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col :lg="17" :md="17" :sm="24" :xl="18" :xs="24">
                    <el-form ref="queryFormRef" :inline="true" :model="queryForm" :rules="rules" label-width="50px"
                             @submit.prevent>
                        <el-form-item prop="userName" label="姓名">
                            <el-input v-model="queryForm.userName" placeholder="请输入姓名"/>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" native-type="submit" @click="queryData(queryFormRef)">
                                <SvgIcon name="ele-Search"/>
                                查询
                            </el-button>
                        </el-form-item>
                    </el-form>
                    <div class="edit_dev">
                        <el-transfer
                            v-loading="loading"
                            v-model="selectedData"
                            :props="{ key: 'userId', label: 'userName' }"
                            :data="userListData"
                            :titles="['未选择', '已选择']"
                        />
                    </div>
                </el-col>
            </el-row>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="onCancel">取 消</el-button>
                    <el-button type="primary" native-type="submit" @click="onSave">保 存</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script lang="ts">
    export default {
        name: "SelectUser",
        metaDataDict: []
    };
</script>
<script setup lang="ts">
    import {ref, toRefs, reactive, getCurrentInstance} from "vue";
    import type {ElForm} from "element-plus";
    import {find_list} from "/@/api/sys/sysUser";
    import {find_list as find_dept_list} from "/@/api/sys/sysDepartment";

    type FormInstance = InstanceType<typeof ElForm>;
    const editRef = ref();
    const queryFormRef = ref<FormInstance>();
    const {proxy} = <any>getCurrentInstance();
    //接收父组件传来的属性
    const emit = defineEmits(["selected-User-data"]);

    const state = reactive({
        isShowDialog: false, //是否显示对话框
        dialogTitle: "选择用户", //面板标题
        // 遮罩层
        loading: true,
        // 用户列表数据
        userListData: [] as any,
        // 部门列表数据
        deptListData: [] as any,
        //选中的用户列表数据
        selectedData: [] as any,
        //记录总数
        total: 0
    });
    const {isShowDialog, dialogTitle, loading, userListData, deptListData, selectedData} = toRefs(state);
    /**表单验证规则**/
    const rules = reactive({
        userName: [
            {required: true, trigger: "blur", message: "请输入姓名"},
            {min: 1, max: 40, trigger: "change", message: "姓名长度应为1-40个字符"}
        ]
    });
    /**查询表单对象**/
    const queryForm = reactive({
        userName: "",
        map: {
            deptId: ""
        }
    });
    /**查询数据**/
    const queryData = (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        formEl.validate(async (valid) => {
            if (valid) {
                queryForm.map.deptId = "";
                await fetchUserData();
            } else {
                return false;
            }
        });
    };
    /**重置表单**/
    const resetQuery = (formEl: FormInstance | undefined) => {
        if (!formEl) {
            return;
        }
        formEl.resetFields();
        fetchUserData();
    };
    /**获取用户列表数据**/
    const fetchUserData = async () => {
        state.loading = true;
        find_list(queryForm)
            .then((response: any) => {
                if (response.code === 200 && response.data) {
                    state.userListData = response.data;
                } else {
                    state.userListData = [];
                    proxy.$baseMessage("获取数据失败，请稍后再试！", "error");
                }
            })
            .finally(() => {
                state.loading = false;
            });
    };
    /**获取部门列表数据**/
    const fetchDeptData = async () => {
        state.loading = true;
        find_dept_list({})
            .then((response: any) => {
                if (response.code === 200 && response.data) {
                    state.deptListData = response.data;
                } else {
                    state.deptListData = [];
                    proxy.$baseMessage("获取数据失败，请稍后再试！", "error");
                }
            })
            .finally(() => {
                state.loading = false;
            });
    };
    /** 处理树节点点击 */
    const handleTreeNodeClick = (data: any) => {
        queryForm.map.deptId = data.deptId;
        queryForm.userName = "";
        fetchUserData();
    };
    /**打开对话框面板**/
    const openDialog = () => {
        fetchDeptData();
        state.isShowDialog = true;
    };

    /**关闭面板**/
    const onCancel = () => {
        state.isShowDialog = false;
    };
    /**返回选择的用户信息**/
    const onSave = () => {
        if (state.selectedData.length == 0) {
            proxy.$baseMessage("您还没有选择用户哦！", "warning");
            return false;
        }
        emit("selected-User-data", state.selectedData);
        state.isShowDialog = false;
    };
    /**暴露属性，供父组件调用**/
    defineExpose({openDialog});
</script>
<style scoped lang="scss">
.edit_dev :deep(.el-transfer-panel) {
    width: 250px;
    background: #fff;
    border: 1px solid #dcdfe6;
}

.edit_dev :deep(.el-transfer-panel__body) {
    height: 430px;
}

.edit_dev :deep(.el-transfer-panel__list) {
    height: 430px;
}
</style>
