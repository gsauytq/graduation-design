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
                <el-button type="primary" @click="dialogVisible1 = true">添加会员</el-button>
                <el-dialog v-model="dialogVisible1" title="添加会员" width="30%">
                    <el-form :model="addAssociatorInfo" label-width="120px" :inline="true">
                        <el-form-item required label="会员名：">
                            <el-input v-model="addAssociatorInfo.associatorName" class="add-form-style"
                                placeholder="请输入会员名"></el-input>
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
                            <el-input v-model="addAssociatorInfo.phone" class="add-form-style"
                                placeholder="请输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item required label="电子邮箱：">
                            <el-input v-model="addAssociatorInfo.email" class="add-form-style"
                                placeholder="请输入电子邮箱"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogVisible1 = false">取消</el-button>
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
    <el-dialog v-model="dialogVisible2" title="添加会员" width="30%">
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
                <el-button @click="dialogVisible2 = false">取消</el-button>
                <el-button type="primary" @click="submintInfo">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { ElMessageBox } from 'element-plus'

export default {
    name: "AssociatorInfoSetting",
    data() {
        return {
            dialogVisible1: false,
            dialogVisible2: false,
            associatorInfo: {
                associatorName: "",
                phone: "",
                email: ""
            },
            addAssociatorInfo: {
                associatorName: "",
                gender: "",
                age: "",
                phone: "",
                email: ""
            },
            tableData: [
                {
                    id: 1,
                    associatorName: "李莉莉",
                    gender: "女",
                    age: 29,
                    phone: "18291223108",
                    email: "2873288323@qq.com",
                    joinTime: "2018-02-19",
                    total: 112
                }
            ]
        }
    },
    methods: {
        query() {
            console.log("查询");
            if (this.associatorInfo.phone == "") {
                ElMessageBox.alert('请输入联系电话', '警告', {
                    confirmButtonText: 'OK',
                    callback: () => {
                        this.associatorInfo.associatorName = "",
                            this.associatorInfo.phone = "",
                            this.associatorInfo.email = ""
                    },
                })
            }
        },
        submintInfo1() {
            this.dialogVisible1 = false
            console.log("提交");
        },
        submintInfo2() {
            this.dialogVisible2 = false
            console.log("提交");
        },
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible2 = true;
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