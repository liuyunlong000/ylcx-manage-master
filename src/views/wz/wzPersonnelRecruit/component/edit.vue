<template>
    <div>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="100px" @submit.prevent>
            <el-dialog :title="dialogTitle" v-model="isShowDialog" width="1200px" draggable>
                <el-row :gutter="35">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item prop="title" label="标题">
                      <el-input v-model.trim="ruleForm.title" placeholder="请输入标题"/>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item prop="releaseTime" label="发布时间">
                      <el-date-picker v-model.trim="ruleForm.releaseTime"  type="date" value-format="YYYY-MM-DD" format="YYYY-MM-DD"/>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item prop="source" label="文章来源">
                      <el-input v-model.trim="ruleForm.source" placeholder="请输入文章来源"/>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item prop="source" label="置顶">
                      <el-switch
                          v-model="ruleForm.top"
                          active-color="#13ce66"
                          inactive-color="#7a7a7a"
                          active-value="是"
                          inactive-value="">
                      </el-switch>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item prop="content" label="动态内容">
                      <vue-ueditor-wrap v-model="ruleForm.content" :config="editorConfig"></vue-ueditor-wrap>
                    </el-form-item>
                  </el-col>
                </el-row>
				<template #footer>
					<span class="dialog-footer">
						<el-button @click="onCancel">取 消</el-button>
						<el-button type="primary" @click="submitForm(ruleFormRef)" native-type="submit">保 存</el-button>
					</span>
				</template>
			</el-dialog>
        </el-form>
    </div>
</template>
<script lang="ts">
    export default {
        name: "WzPersonnelRecruitEdit",
        //当前页面需要初始化的数据字典
        metaDataDict: []
    };
</script>
<script setup lang="ts">
    import {reactive, ref, toRefs, getCurrentInstance, defineEmits, defineExpose} from "vue";
    import type {ElForm} from "element-plus";
    import {save_id, update_id, find_id} from "/@/api/wz/wzPersonnelRecruit";

    const {proxy} = <any>getCurrentInstance();
    //接收父组件传来的属性
    const emit = defineEmits(["fetch-data"]);
    type FormInstance = InstanceType<typeof ElForm>
    //定义表单对象
    const ruleFormRef = ref<FormInstance>();
    //定义公共的属性
    const state = reactive({
        isShowDialog: false,//是否显示对话框
        dialogTitle: "",//面板标题
        editorConfig:{
            UEDITOR_HOME_URL : '/UEditor/',
            serverUrl: import.meta.env.VITE_API_URL+"/ueditor/exec",
            initialFrameWidth: '100%',
            initialFrameHeight: 380
        },
        ruleForm: {
            nid:null,
            title:null,
            content:null,
            releaseTime:null,
            source:null,
            top:null
        }
    });
    const {isShowDialog, dialogTitle, editorConfig,ruleForm} = toRefs(state);

    /**表单验证规则**/
    const rules = reactive({
    });

    /**初始化表单**/
    const initForm = () => {
        state.ruleForm.nid=null;
        state.ruleForm.title=null;
        state.ruleForm.content=null;
        state.ruleForm.releaseTime=null;
        state.ruleForm.source=null;
        state.ruleForm.top=null;
    };
    

    /**打开对话框面板**/
    const openDialog = (id: string) => {
        if (id) {
            state.dialogTitle = "修改暂无信息";
            find_id({id: id}).then((response: any) => {
                if (response.code === 200) {
                    state.ruleForm = response.data;
                }
            });
        } else {
            state.dialogTitle = "新增暂无信息";
            initForm();
        }
        state.isShowDialog = true;
    };

    /**关闭面板**/
    const onCancel = () => {
        state.isShowDialog = false;
    };

    /**保存信息**/
    const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        formEl.validate(async (valid) => {
            if (valid) {
                let result: any = {};
                if (state.ruleForm.nid !== null) {
                    result = await update_id(state.ruleForm);
                } else {
                    result = await save_id(state.ruleForm);
                }
                if (result.code && result.code === 200) {
                    proxy.$baseMessage(result.msg, "success");
                    emit("fetch-data");
                    state.isShowDialog = false;
                } else {
                    proxy.$baseMessage(result.msg, "error");
                }
            } else {
                return false;
            }
        });
    };

    /**暴露属性，供父组件调用**/
    defineExpose({openDialog});
</script>
