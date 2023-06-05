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
                <el-button type="primary" @click="dialogVisible1 = true">添加仓库</el-button>
                <el-dialog v-model="dialogVisible1" title="添加仓库" width="30%">
                    <el-form :model="addStorageInfo" label-width="120px" :inline="true">
                        <el-form-item required label="仓库容量：">
                            <el-input v-model="addStorageInfo.storageVolume" class="add-form-style"
                                placeholder="请输入仓库容量"></el-input>
                        </el-form-item>
                        <el-form-item required label="仓库状态：">
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
                            <el-button @click="dialogVisible1 = false">取消</el-button>
                            <el-button type="primary" @click="submintInfo1">
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
            <el-table-column prop="id" label="仓库号" width="100" />
            <el-table-column prop="createTime" label="创建时间" width="200" />
            <el-table-column prop="storageVolume" label="仓库容量" width="160" />
            <el-table-column prop="capacityRemaining" label="剩余容量" width="160" />
            <el-table-column prop="status" label="仓库状态" width="160" />
            <el-table-column prop="summary" label="仓库摘要" width="440" />
            <el-table-column prop="storageAdministrators" label="仓库管理员" width="180" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
    <el-dialog v-model="dialogVisible2" title="添加仓库" width="30%">
        <el-form :model="addStorageInfo" label-width="120px" :inline="true">
            <el-form-item required label="仓库容量：">
                <el-input v-model="addStorageInfo.storageVolume" class="add-form-style" placeholder="请输入仓库容量"></el-input>
            </el-form-item>
            <el-form-item required label="仓库状态：">
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
                <el-button @click="dialogVisible2 = false">取消</el-button>
                <el-button type="primary" @click="submintInfo2">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { ElMessageBox } from 'element-plus'

export default {
    name: "StorageInfoSetting",
    data() {
        return {
            dialogVisible1: false,
            dialogVisible2: false,
            storageInfo: {
                id: "",
                status: "",
                administrators: ""
            },
            addStorageInfo: {
                id: "",
                storageVolume: "",
                status: "",
                summary: "",
                administrators: ""
            },
            tableData: [
                {
                    id: 1,
                    createTime: "2011-03-22",
                    storageVolume: 300,
                    capacityRemaining: 100,
                    status: "运营中",
                    summary: "该仓库存放电子类商品",
                    storageAdministrators: "赵毅益"
                }
            ]
        }
    },
    methods: {
        query() {
            console.log("查询");
            if (this.storageInfo.id == "") {
                ElMessageBox.alert('请输入仓库编号', '警告', {
                    confirmButtonText: 'OK',
                    callback: () => {
                        this.storageInfo.id = "",
                            this.storageInfo.administrators = "",
                            this.storageInfo.status = ""
                    },
                })
            }
        },
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible2 = true;
        },
        submintInfo1() {
            this.dialogVisible1 = false
            console.log("提交");
        },
        submintInfo2() {
            this.dialogVisible2 = false
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