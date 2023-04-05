<template>
    <el-card>
        <template #header>
            会员列表           
        </template>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 15px;" height="700" border>
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
export default {
    name: "AssociatorList",
    data() {
        return {
            currentPage: "",
            radio: "",
            tableData: [
                
            ]
        }
    },
    methods: {
        
    },
}
</script>