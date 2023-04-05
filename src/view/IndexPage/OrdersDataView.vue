<template>
    <div class="orders">
        <span>
            <el-icon><Sell /></el-icon>
            {{ orders }}
        </span>
    </div>
</template>

<script>
import { Sell } from '@element-plus/icons-vue';
export default {
    name: "SaleDataView",
    data() {
        return {
            orders: 423113
        }
    },
    components: {
        Sell
    }
}
</script>

<style scoped>
.orders {
    text-align: center;
    font-size: 28px;
}
</style>