<template>
    <el-row :gutter="10" style="margin-bottom: 20px;">
        <el-col :span="10">
            <el-card style="height: 450px;" shadow="hover">
                <PageViewPanel title="商城"></PageViewPanel>
            </el-card>
        </el-col>
        <el-col :span="4">
            <el-row>
                <el-col :span="24">
                    <el-card style="height: 138px;margin-bottom: 10px;" shadow="hover">
                        <template #header>上月销售额</template>
                        <SaleDataView></SaleDataView>
                    </el-card>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-card style="height: 130px;margin: 10px 0;" shadow="hover">
                        <template #header>上月店铺总数</template>
                        <ShopDataView></ShopDataView>
                    </el-card>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-card style="height: 138px;margin-top: 10px;" shadow="hover">
                        <template #header>上月订单总数</template>
                        <OrdersDataView></OrdersDataView>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="10">
            <el-card style="height: 450px;" shadow="hover">
                <OperatingReceiptView></OperatingReceiptView>
            </el-card>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <MessageShowView></MessageShowView>
        </el-col>
    </el-row>
</template>

<script>
import PageViewPanel from "./PageViewPanel.vue";
import SaleDataView from "./SaleDataView.vue"
import ShopDataView from "./ShopDataView.vue"
import OrdersDataView from "./OrdersDataView.vue"
import OperatingReceiptView from "./OperatingReceiptView.vue";
import MessageShowView from "./MessageShowView.vue";

export default {
    name: "IndexPage",
    components: {
        PageViewPanel,
        SaleDataView,
        ShopDataView,
        OrdersDataView,
        OperatingReceiptView,
        MessageShowView
    }
}
</script>