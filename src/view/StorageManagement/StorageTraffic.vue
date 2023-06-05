<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>
            <el-icon>
                <Search />
            </el-icon>
            搜索
        </template>
        <el-form :model="storageInfo" label-width="auto" :inline="true" style="text-align: center;">
            <el-form-item required label="仓库编号：">
                <el-input v-model="storageInfo.id" placeholder="请输入仓库编号"></el-input>
            </el-form-item>
            <el-form-item label="仓库状态：">
                <el-radio-group v-model="storageInfo.status">
                    <el-radio label="正在建设" />
                    <el-radio label="运营中" />
                    <el-radio label="已废弃" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="仓库管理员：">
                <el-input v-model="storageInfo.administrators" placeholder="请输入仓库管理员姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    <el-row :gutter="10" style="margin-top: 15px;">
        <el-col :span="12">
            <el-card style="height: 450px;" shadow="hover">
                <ShopSaleCharts title="仓库出入货量" firstData="入货量" secondData="出货量"></ShopSaleCharts>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card style="height: 450px;" shadow="hover">
                <GoodsTypeCharts></GoodsTypeCharts>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import ShopSaleCharts from '../ShopManagement/charts/ShopSaleCharts.vue'
import GoodsTypeCharts from './GoodsTypeCharts.vue';

export default {
    name: "StorageTraffic",
    components: {
        ShopSaleCharts,
        GoodsTypeCharts,
        Search
    },
    data() {
        return {
            storageInfo: {
                id: "",
                status: "",
                administrators: ""
            },
        }
    },
    methods: {
        query() {
            console.log("查询到所需要的数据");
        }
    }
}
</script>