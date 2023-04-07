<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>会员信息设置</template>
        <el-form :model="associatorInfo" label-width="auto" :inline="true" style="text-align: center;">
            <el-form-item label="会员名：">
                <el-input v-model="associatorInfo.associatorName" placeholder="请输入会员名"></el-input>
            </el-form-item>
            <el-form-item required label="手机号码：">
                <el-input v-model="associatorInfo.phone" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱：">
                <el-input v-model="associatorInfo.email" placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="dialogVisible = true">添加会员</el-button>
                <el-dialog v-model="dialogVisible" title="添加会员" width="30%">
                    <el-form :model="addAssociatorInfo" label-width="120px" :inline="true">
                        <el-form-item required label="会员名：">
                            <el-input v-model="addAssociatorInfo.associatorName" class="add-form-style" placeholder="请输入会员名"></el-input>
                        </el-form-item>
                        <el-form-item required label="性别：">
                            <el-radio-group v-model="addAssociatorInfo.gender" class="add-form-style">
                                <el-radio label="男" />
                                <el-radio label="女" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item required label="年龄：">
                            <el-input v-model="addAssociatorInfo.age" class="add-form-style" placeholder="请输入年龄"></el-input>
                        </el-form-item>
                        <el-form-item required label="手机号码：">
                            <el-input v-model="addAssociatorInfo.phone" class="add-form-style" placeholder="请输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item required label="电子邮箱：">
                            <el-input v-model="addAssociatorInfo.email" class="add-form-style" placeholder="请输入电子邮箱"></el-input>
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
            <el-table-column prop="id" label="会员编号" width="120" />
            <el-table-column prop="associatorName" label="会员名" width="220" />
            <el-table-column prop="gender" label="性别" width="150" />
            <el-table-column prop="age" label="年龄" width="150" />
            <el-table-column prop="phone" label="手机号码" width="180" />
            <el-table-column prop="email" label="电子邮箱" width="230" />
            <el-table-column prop="joinTime" label="加入时间" width="280" />
            <el-table-column prop="total" label="积分" width="130" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: "AssociatorInfoSetting",
    data() {
        return {
            dialogVisible: false,
            associatorInfo: reactive({
                associatorName: "",
                phone: "",
                email: ""
            }),
            addAssociatorInfo: reactive({
                associatorName: "",
                gender: "",
                age: "",
                phone: "",
                email: ""
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