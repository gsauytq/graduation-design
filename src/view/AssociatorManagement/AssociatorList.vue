<template>
    <el-card>
        <template #header>
            会员列表           
        </template>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 15px;" height="700" border>
            <el-table-column prop="id" label="会员编号" width="180" />
            <el-table-column prop="associatorName" label="会员名" width="220" />
            <el-table-column prop="gender" label="性别" width="150" />
            <el-table-column prop="age" label="年龄" width="150" />
            <el-table-column prop="phone" label="手机号码" width="210" />
            <el-table-column prop="email" label="电子邮箱" width="300" />
            <el-table-column prop="joinTime" label="加入时间" width="280" />
            <el-table-column prop="total" label="积分" width="150" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
</template>

<script>
export default {
    name: "AssociatorList",
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