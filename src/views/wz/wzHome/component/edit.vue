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
                    <el-form-item prop="imgUrl" label="图片">
                      <el-upload
                          name="upfile"
                          class="avatar-uploader"
                          :action="apiUrl+'/ueditor/exec?action=uploadimage'"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess">
                        <img v-if="ruleForm.imgUrl" :src="ruleForm.imgUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item prop="sortNum" label="排序">
                      <el-input v-model.trim="ruleForm.sortNum" placeholder="请输入排序"/>
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
        name: "WzHomeEdit",
        //当前页面需要初始化的数据字典
        metaDataDict: []
    };
</script>
<script setup lang="ts">
    import {reactive, ref, toRefs, getCurrentInstance, defineEmits, defineExpose} from "vue";
    import type {ElForm} from "element-plus";
    import {save_id, update_id, find_id} from "/@/api/wz/wzHome";

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
        apiUrl:import.meta.env.VITE_API_URL,
        ruleForm: {
            nid:null,
            title:null,
            imgUrl:null,
            sortNum:null
        }
    });
    const {isShowDialog, dialogTitle,ruleForm,apiUrl} = toRefs(state);

    /**表单验证规则**/
    const rules = reactive({
    });

    /**初始化表单**/
    const initForm = () => {
        state.ruleForm.nid=null;
        state.ruleForm.title=null;
        state.ruleForm.imgUrl=null;
        state.ruleForm.sortNum=null;
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
    const handleAvatarSuccess = (res:any,file:any) =>{
        if (res.state === 'SUCCESS') {
            state.ruleForm.imgUrl = state.apiUrl+"/ueditor/image/"+res.url;
        }
    }
    const handleRemove = (file:any, fileList:any) => {
        state.ruleForm.imgUrl = null;
    }

    /**暴露属性，供父组件调用**/
    defineExpose({openDialog});
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>