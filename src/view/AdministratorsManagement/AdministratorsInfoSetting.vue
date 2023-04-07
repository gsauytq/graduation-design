<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>管理员信息设置</template>
        <el-form :model="administratorsInfo" label-width="auto" :inline="true" style="text-align: center;">
            <el-form-item required label="管理员姓名：">
                <el-input v-model="administratorsInfo.administratorsName" placeholder="请输入管理员姓名"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱：">
                <el-input v-model="administratorsInfo.email" placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
            <el-form-item required label="联系电话：">
                <el-input v-model="administratorsInfo.phone" placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="dialogVisible = true">添加管理员</el-button>
                <el-dialog v-model="dialogVisible" title="添加管理员" width="30%">
                    <el-form :model="addAdministratorsInfo" label-width="120px" :inline="true">
                        <el-form-item required label="管理员姓名：">
                            <el-input v-model="addAdministratorsInfo.administratorsName" class="add-form-style"
                                placeholder="请输入管理员姓名"></el-input>
                        </el-form-item>
                        <el-form-item required label="性别：">
                            <el-radio-group v-model="addAdministratorsInfo.gender" class="add-form-style">
                                <el-radio label="男" />
                                <el-radio label="女" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item required label="年龄：">
                            <el-input v-model="addAdministratorsInfo.age" class="add-form-style"
                                placeholder="请输入年龄"></el-input>
                        </el-form-item>
                        <el-form-item required label="所属组织：">
                            <el-input v-model="addAdministratorsInfo.organization" class="add-form-style"
                                placeholder="请输入所属组织"></el-input>
                        </el-form-item>
                        <el-form-item required label="电子邮箱：">
                            <el-input v-model="addAdministratorsInfo.email" class="add-form-style"
                                placeholder="请输入电子邮箱"></el-input>
                        </el-form-item>
                        <el-form-item required label="联系电话：">
                            <el-input v-model="addAdministratorsInfo.phone" class="add-form-style"
                                placeholder="请输入联系电话"></el-input>
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
            <el-table-column prop="id" label="管理员编号" width="190" />
            <el-table-column prop="administrators" label="管理员姓名" width="260" />
            <el-table-column prop="gender" label="性别" width="170" />
            <el-table-column prop="age" label="年龄" width="140" />
            <el-table-column prop="organization" label="所属组织" width="170" />
            <el-table-column prop="createTime" label="创建时间" width="200" />
            <el-table-column prop="email" label="电子邮箱" width="290" />
            <el-table-column prop="phone" label="联系电话" width="220" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: "AdministratorsInfoSetting",
    data() {
        return {
            dialogVisible: false,
            administratorsInfo: reactive({
                administratorsName: "",
                phone: "",
                email: ""
            }),
            addAdministratorsInfo: reactive({
               administratorsName: "",
               gender: "",
               age: "",
               organization: "",
               email: "",
               phone: ""
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