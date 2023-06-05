<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>员工信息设置</template>
        <el-form :model="employeeInfo" label-width="auto" :inline="true" style="text-align: center;">
            <el-form-item required label="员工姓名：">
                <el-input v-model="employeeInfo.employeeName" placeholder="请输入员工姓名"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：">
                <el-input v-model="employeeInfo.phone" placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱：">
                <el-input v-model="employeeInfo.email" placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="dialogVisible1 = true">添加员工</el-button>
                <el-dialog v-model="dialogVisible1" title="添加员工" width="30%">
                    <el-form :model="addEmployeeInfo" label-width="120px" :inline="true">
                        <el-form-item required label="员工姓名：">
                            <el-input v-model="addEmployeeInfo.employeeName" class="add-form-style"
                                placeholder="请输入员工姓名"></el-input>
                        </el-form-item>
                        <el-form-item required label="性别：">
                            <el-radio-group v-model="addEmployeeInfo.gender" class="add-form-style">
                                <el-radio label="男" />
                                <el-radio label="女" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item required label="年龄：">
                            <el-input v-model="addEmployeeInfo.age" class="add-form-style" placeholder="请输入年龄"></el-input>
                        </el-form-item>
                        <el-form-item required label="薪水：">
                            <el-input v-model="addEmployeeInfo.salary" class="add-form-style"
                                placeholder="请输入薪水"></el-input>
                        </el-form-item>
                        <el-form-item required label="联系电话：">
                            <el-input v-model="addEmployeeInfo.phone" class="add-form-style"
                                placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                        <el-form-item required label="电子邮箱：">
                            <el-input v-model="addEmployeeInfo.email" class="add-form-style"
                                placeholder="请输入电子邮箱"></el-input>
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
            <el-table-column prop="id" label="员工编号" width="190" />
            <el-table-column prop="employeeName" label="员工姓名" width="200" />
            <el-table-column prop="age" label="年龄" width="120" />
            <el-table-column prop="gender" label="性别" width="170" />
            <el-table-column prop="workTime" label="已工作时间" width="150" />
            <el-table-column prop="salary" label="薪水" width="150" />
            <el-table-column prop="phone" label="联系电话" width="220" />
            <el-table-column prop="email" label="电子邮箱" width="230" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
    <el-dialog v-model="dialogVisible2" title="添加员工" width="30%">
        <el-form :model="addEmployeeInfo" label-width="120px" :inline="true">
            <el-form-item required label="员工姓名：">
                <el-input v-model="addEmployeeInfo.employeeName" class="add-form-style" placeholder="请输入员工姓名"></el-input>
            </el-form-item>
            <el-form-item required label="性别：">
                <el-radio-group v-model="addEmployeeInfo.gender" class="add-form-style">
                    <el-radio label="男" />
                    <el-radio label="女" />
                </el-radio-group>
            </el-form-item>
            <el-form-item required label="年龄：">
                <el-input v-model="addEmployeeInfo.age" class="add-form-style" placeholder="请输入年龄"></el-input>
            </el-form-item>
            <el-form-item required label="薪水：">
                <el-input v-model="addEmployeeInfo.salary" class="add-form-style" placeholder="请输入薪水"></el-input>
            </el-form-item>
            <el-form-item required label="联系电话：">
                <el-input v-model="addEmployeeInfo.phone" class="add-form-style" placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item required label="电子邮箱：">
                <el-input v-model="addEmployeeInfo.email" class="add-form-style" placeholder="请输入电子邮箱"></el-input>
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
    name: "EmployeeInfoSetting",
    data() {
        return {
            dialogVisible1: false,
            dialogVisible2: false,
            employeeInfo: {
                employeeName: "",
                phone: "",
                email: ""
            },
            addEmployeeInfo: {
                employeeName: "",
                gender: "",
                age: "",
                salary: "",
                phone: "",
                email: ""
            },
            tableData: [
                {
                    id: 1,
                    employeeName: "赵祥瑞",
                    age: 30,
                    gender: "男",
                    workTime: "1年",
                    salary: 4900.00,
                    phone: "13847239812",
                    email: "3984928324@qq.com"
                }
            ]
        }
    },
    methods: {
        query() {
            console.log("查询");
            if (this.employeeInfo.employeeName == "") {
                ElMessageBox.alert('请输入员工姓名', '警告', {
                    confirmButtonText: 'OK',
                    callback: () => {
                        this.employeeInfo.employeeName = "",
                            this.employeeInfo.email = "",
                            this.employeeInfo.phone = ""
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