<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>
            <el-icon><Search /></el-icon>
            搜索
        </template>
        <el-form :model="shopInfo" label-width="120px" :inline="true" style="text-align: center;">
            <el-form-item required label="店铺名称：">
                <el-input v-model="shopInfo.shopName" placeholder="请输入店铺名称"></el-input>
            </el-form-item>
            <el-form-item label="店主姓名：">
                <el-input v-model="shopInfo.shopkeeperName" placeholder="请输入店主姓名"></el-input>
            </el-form-item>
            <el-form-item label="运营状态：">
                <el-radio-group v-model="shopInfo.status">
                    <el-radio label="未运营" />
                    <el-radio label="运营中" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系电话：">
                <el-input v-model="shopInfo.phone" placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    <el-row :gutter="10">
        <el-col :span="12">
            <el-card style="height: 450px;" shadow="hover">
                <PageViewPanel title="店铺"></PageViewPanel>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card style="height: 450px;" shadow="hover">
                <ConsumerCharts></ConsumerCharts>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 15px;">
        <el-col :span="12">
            <el-card style="height: 450px;" shadow="hover">
                <ShopSaleCharts title="店铺收支" firstData="收入" secondData="支出"></ShopSaleCharts>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card style="height: 450px;" shadow="hover">
                <ActivityCharts></ActivityCharts>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import PageViewPanel from '../IndexPage/PageViewPanel.vue';
import ConsumerCharts from './charts/ConsumerCharts.vue';
import ShopSaleCharts from './charts/ShopSaleCharts.vue';
import ActivityCharts from './charts/ActivityCharts.vue';

export default {
    name: "TrafficAnalysis",
    data() {
        return {
            shopInfo: {
                shopName: "",
                shopkeeperName: "",
                status: "",
                phone: ""
            },
        }
    },
    components: {
        Search,
        PageViewPanel,
        ConsumerCharts,
        ShopSaleCharts,
        ActivityCharts
    },
    methods: {
        query() {
            console.log("查询到所需要的数据");
        }
    }
}
</script>