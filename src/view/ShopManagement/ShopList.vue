<template>
    <el-card>
        <template #header>
            店铺列表
        </template>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 15px;" height="700" border>
            <el-table-column prop="id" label="店铺编号" width="120" />
            <el-table-column prop="shopName" label="店铺名称" width="280" />
            <el-table-column prop="shopkeeperName" label="店主姓名" width="150" />
            <el-table-column prop="createTime" label="创建时间" width="150" />
            <el-table-column prop="runTime" label="运营时长" width="150" />
            <el-table-column prop="status" label="运营状态" width="100" />
            <el-table-column prop="description" label="店铺介绍" width="510" />
            <el-table-column prop="phone" label="联系电话" width="180" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
</template>

<script>
export default {
    name: "ShopList",
    data() {
        return {
            currentPage: "",
            tableData: [
                
            ]
        }
    },
    methods: {
        query() {
            console.log("查询到符合条件的内容。");
        }
    },
}
</script>