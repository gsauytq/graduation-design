<template>
    <el-card>
        <template #header>
            员工列表           
        </template>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 15px;" height="700" border>
            <el-table-column prop="id" label="员工编号" width="190" />
            <el-table-column prop="employeeName" label="员工姓名" width="260" />
            <el-table-column prop="age" label="年龄" width="170" />
            <el-table-column prop="gender" label="性别" width="170" />
            <el-table-column prop="workTime" label="已工作时间" width="200" />
            <el-table-column prop="salary" label="薪水" width="200" />
            <el-table-column prop="phone" label="联系电话" width="220" />
            <el-table-column prop="email" label="电子邮箱" width="230" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
</template>

<script>
export default {
    name: "EmployeeList",
    data() {
        return {
            currentPage: "",
            tableData: [
                
            ]
        }
    },
    methods: {
        
    },
}
</script>