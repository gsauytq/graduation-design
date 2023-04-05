<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>仓库信息设置</template>
        <el-form :model="storageInfo" label-width="auto" :inline="true" style="text-align: center;">
            <el-form-item required label="仓库编号：">
                <el-input v-model="storageInfo.id" placeholder="请输入仓库编号"></el-input>
            </el-form-item>
            <el-form-item label="仓库状态：">
                <el-radio-group v-model="storageInfo.status">
                    <el-radio label="正在建设" />
                    <el-radio label="运营中" />
                    <el-radio label="已废弃" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="仓库管理员：">
                <el-input v-model="storageInfo.administrators" placeholder="请输入仓库管理员姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="dialogVisible = true">添加仓库</el-button>
                <el-dialog v-model="dialogVisible" title="添加仓库" width="30%">
                    <el-form :model="addStorageInfo" label-width="120px" :inline="true">
                        <el-form-item required label="仓库容量：">
                            <el-input v-model="addStorageInfo.storageVolume" class="add-form-style"
                                placeholder="请输入仓库容量"></el-input>
                        </el-form-item>
                        <el-form-item label="仓库状态：">
                            <el-radio-group v-model="addStorageInfo.status">
                                <el-radio label="正在建设" />
                                <el-radio label="运营中" />
                                <el-radio label="已废弃" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item required label="仓库摘要：">
                            <el-input v-model="addStorageInfo.summary" class="add-form-style" type="textarea" rows="5"
                                placeholder="请输入仓库摘要"></el-input>
                        </el-form-item>
                        <el-form-item required label="仓库管理员：">
                            <el-input v-model="addStorageInfo.administrators" class="add-form-style"
                                placeholder="请输入仓库管理员姓名"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogVisible = false">取消</el-button>
                            <el-button type="primary" @click="submintInfo">
                                提交
                            </el-button>
                        </span>
                    </template>
                </el-dialog>
            </el-form-item>
        </el-form>
    </el-card>
    <el-card>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 15px;" height="600" border>
            <el-table-column prop="id" label="仓库号" width="200" />
            <el-table-column prop="createTime" label="创建时间" width="240" />
            <el-table-column prop="storageVolume" label="仓库容量" width="220" />
            <el-table-column prop="capacityRemaining" label="剩余容量" width="220" />
            <el-table-column prop="status" label="仓库状态" width="160" />
            <el-table-column prop="summary" label="仓库摘要" width="440" />
            <el-table-column prop="storageAdministrators" label="仓库管理员" width="160" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: "ShopInfoSetting",
    data() {
        return {
            dialogVisible: false,
            storageInfo: reactive({
                id: "",
                status: "",
                administrators: ""
            }),
            addStorageInfo: reactive({
               storageVolume: "",
               status: "",
               summary: "",
               administrators: ""
            }),
            tableData: [

            ]
        }
    },
    methods: {
        query() {
            console.log("查询");
        },
        submintInfo() {
            this.dialogVisible = false
            console.log("提交");
        }
    }
}
</script>

<style scoped>
.dialog-footer {
    margin-right: 10px;
}

.add-form-style {
    margin: 5px 0;
}
</style>