<template>
    <el-card>
        <template #header>
            货物列表           
        </template>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 15px;" height="700" border>
            <el-table-column prop="id" label="货物号" width="190" />
            <el-table-column prop="goodsName" label="货物名称" width="260" />
            <el-table-column prop="costPrice" label="成本价" width="170" />
            <el-table-column prop="price" label="售价" width="170" />
            <el-table-column prop="brand" label="品牌" width="200" />
            <el-table-column prop="manufacturer" label="生产厂家" width="290" />
            <el-table-column prop="yieldly" label="生产地" width="220" />
            <el-table-column prop="stock" label="库存" width="140" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
</template>

<script>
export default {
    name: "GoodsList",
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