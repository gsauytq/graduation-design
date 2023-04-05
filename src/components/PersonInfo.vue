<template>
    <el-dropdown id="dropdown-id">
        <div class="el-dropdown-link" id="userInfo">
            <span id="info-span" class="vertical-style">{{ userName }}</span>
            <el-icon class="vertical-style">
                <arrow-down />
            </el-icon>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
import { ArrowDown } from '@element-plus/icons-vue'
export default {
    name: "PersonInfo",
    components: {
        ArrowDown
    },
    data() {
        return {
            userName: "UserName"
        }
    }
}
</script>

<style scoped>
.el-dropdown-link {
    text-align: center;
    font-size: 16px;
    width: 150px;
    height: 60px;
}

.el-dropdown-link:focus {
    outline: none;
}
.vertical-style {
    vertical-align: middle;
}

#info-span {
    line-height: 60px;
    font-size: 16px;
}

#dropdown-id:hover {
    border: none;
}
</style>