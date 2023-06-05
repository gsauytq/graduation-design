<template>
    <div class="sale">
        <span>
            <el-icon><Money /></el-icon>
            {{ sale }}
        </span>
    </div>
</template>

<script>
import { Money } from '@element-plus/icons-vue';

export default {
    name: "SaleDataView",
    data() {
        return {
            sale: 423113
        }
    },
    components: {
        Money
    }
}
</script>

<style scoped>
.sale {
    text-align: center;
    font-size: 28px;
}
</style>