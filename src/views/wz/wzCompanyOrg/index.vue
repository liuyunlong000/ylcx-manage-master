<template>
    <div>
        <el-card shadow="hover">
            <el-form ref="queryFormRef" :inline="true" :model="queryForm" label-width="100px" @submit.prevent>
			<el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center">
                    <el-form-item>
                        <el-button type="primary" native-type="submit" @click="queryData">
                            <SvgIcon name="ele-Search"/>
                            查询
                        </el-button>
                        <el-button @click="resetQuery(queryFormRef)">
                            <SvgIcon name="ele-Refresh"/>
                            重置
                        </el-button>
                    </el-form-item>
        </el-col>
			</el-row>
            </el-form>
            <el-table
                :data="tableData"
                :border="true"
                :header-cell-style="{'background-color': '#f5f7fa'}"
                style="width: 100%"
                row-key=""
                v-loading="loading"
                @sort-change="handleSortChange">
                <el-table-column align="center" label="序号" type="" width="60">
                    <template #default="{ $index }">
                        {{ $index + 1 }}
                    </template>
                </el-table-column>
              <el-table-column prop="title" label="标题" :sortable="false" :sort-orders="['ascending', 'descending']" width="auto" align="center" show-overflow-tooltip/>
                <el-table-column label="操作" width="auto" align="center">
                    <template #default="scope">
                        <el-button :text="true" class="btnPd0" @click="openEditDialog(scope.row)">
                            <SvgIcon name="ele-Edit"/>
                            修改
                        </el-button>
                    </template>
                </el-table-column>
                <template #empty>
                    <el-empty description="暂无数据"/>
                </template>
            </el-table>
            <el-pagination
                :current-page="queryForm.pageNum"
                :layout="layout"
                :page-size="queryForm.pageSize"
                :total="total"
                class="mt15"
                background
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"/>
        </el-card>
        <WzComplanyOrgEdit ref="editRef" @fetch-data="fetchData"/>
    </div>
</template>
<script lang="ts">
    export default {
        name: "WzComplanyOrgIndex",
        metaDataDict: []
    };
</script>
<script setup lang="ts">
    import {ref, toRefs, reactive, onMounted, getCurrentInstance} from "vue";
    import type {ElForm} from "element-plus";
    import {IWzComplanyOrg} from "/@/views/wz/wzCompanyOrg/interface/IWzComplanyOrg";
    import WzComplanyOrgEdit from "/@/views/wz/wzCompanyOrg/component/edit.vue";
    import {find_list_by_page, delete_id} from "/@/api/wz/wzComplanyOrg";

    type FormInstance = InstanceType<typeof ElForm>;
    const editRef = ref();
    const queryFormRef = ref<FormInstance>();
    const {proxy} = <any>getCurrentInstance();

    const state = reactive({
        // 遮罩层
        loading: true,
        // 菜单表格树数据
        tableData: [] as any,
        //分页栏布局
        layout: "total, sizes, prev, pager, next, jumper",
        //记录总数
        total: 0
    });
    const {loading, tableData, layout, total} = toRefs(state);
    /**查询表单对象**/
    const queryForm = reactive({
        pageNum: 1,//当前页码
        pageSize: 20,//每页大小
        sortOrder:undefined,//排序方式
        sortField:undefined,//排序属性
    });
    /** 打开编辑弹窗**/
    const openEditDialog = (row: IWzComplanyOrg) => {
        editRef.value.openDialog(row.nid);
    };
    /**删除当前行**/
    const handleDelete = (row: IWzComplanyOrg) => {
        proxy.$baseConfirm(`此操作将永久删除：${row.nid}, 是否继续?`, "提示", async () => {
            delete_id({id: row.nid}).then((response: any) => {
                if (response.code && response.code === 200) {
                    proxy.$baseMessage(response.msg, "success");
                    fetchData();
                } else {
                    proxy.$baseMessage("删除失败，请稍后再试！", "error");
                }
            });
        });
    };
    /**查询数据**/
    const queryData = () => {
        queryForm.pageNum = 1;
        fetchData();
    };
    /** 排序事件 */
    const handleSortChange = (column: any, prop: any, order: any) => {
        queryForm.sortField = column.prop;
        queryForm.sortOrder = column.order;
        fetchData();
    };
    /**处理当前页码变化**/
    const handleCurrentChange = (val:number) => {
        queryForm.pageNum = val;
        fetchData();
    };
    /**响应每页大小变化**/
    const handleSizeChange = (val:number) => {
        queryForm.pageSize = val;
        fetchData();
    };
    /**重置表单**/
    const resetQuery = (formEl: FormInstance | undefined) => {
        if (!formEl) {
            return;
        }
        queryForm.pageNum = 1;
        queryForm.sortField=undefined;
        queryForm.sortOrder=undefined;
        formEl.resetFields();
        fetchData();
    };
    /**获取数据**/
    const fetchData = async () => {
        state.loading = true;
        find_list_by_page(queryForm).then((response: any) => {
            if (response.code === 200) {
                state.tableData = response.data.list;
                state.total = response.data.total;
            } else {
                state.tableData = [];
                state.total = 0;
                proxy.$baseMessage("获取数据失败，请稍后再试！", "error");
            }
        }).finally(() => {
            state.loading = false;
        });
    };
    onMounted(() => {
        fetchData();
    });
</script>
