<template>
    <el-card>
        <template #header>
            管理员信息列表           
        </template>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 15px;" height="700" border>
            <el-table-column prop="id" label="管理员编号" width="190" />
            <el-table-column prop="administratorsName" label="管理员姓名" width="260" />
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
export default {
    name: "AdministratorsList",
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