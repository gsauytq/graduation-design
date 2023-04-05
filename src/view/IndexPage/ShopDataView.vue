<template>
    <div class="shop">
        <span>
            <el-icon><ShoppingCart /></el-icon>
            {{ shop }}
        </span>
    </div>
</template>

<script>
import { ShoppingCart } from '@element-plus/icons-vue';
export default {
    name: "SaleDataView",
    data() {
        return {
            shop: 4231
        }
    },
    components: {
        ShoppingCart
    }
}
</script>

<style scoped>
.shop {
    text-align: center;
    font-size: 28px;
}
</style>