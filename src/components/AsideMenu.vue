<template>
    <el-menu mode="vertical" active-text-color="#ffd04b" background-color="#545c64" default-active="0" text-color="#fff"
        @open="handleOpen" @close="handleClose" unique-opened :style="{ height: menuHeight + 'px' }">
        <RouterLink to="/IndexPage"><el-menu-item index="0">首页</el-menu-item></RouterLink>
        <el-sub-menu index="1">
            <template #title>
                <span>店铺管理</span>
            </template>
            <RouterLink to="/ShopList"><el-menu-item index="1-1">店铺列表</el-menu-item></RouterLink>
            <RouterLink to="/ShopInfoSetting"><el-menu-item index="1-2">店铺信息设置</el-menu-item></RouterLink>
            <RouterLink to="/TrafficAnalysis"><el-menu-item index="1-3">店铺流量分析</el-menu-item></RouterLink>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <span>会员管理</span>
            </template>
            <RouterLink to="/AssociatorList"><el-menu-item index="2-1">会员列表</el-menu-item></RouterLink>
            <RouterLink to="/AssociatorInfoSetting"><el-menu-item index="2-2">会员信息设置</el-menu-item></RouterLink>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <span>仓库管理</span>
            </template>
            <RouterLink to="/StorageList"><el-menu-item index="3-1">仓库列表</el-menu-item></RouterLink>
            <RouterLink to="/StorageInfoSetting"><el-menu-item index="3-2">仓库信息设置</el-menu-item></RouterLink>
            <RouterLink to="/StorageTraffic"><el-menu-item index="3-3">仓库流量分析</el-menu-item></RouterLink>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <span>员工管理</span>
            </template>
            <RouterLink to="/EmployeeList"><el-menu-item index="4-1">员工列表</el-menu-item></RouterLink>
            <RouterLink to="/EmployeeInfoSetting"><el-menu-item index="4-2">员工信息设置</el-menu-item></RouterLink>
        </el-sub-menu>
        <el-sub-menu index="5">
            <template #title>
                <span>货物管理</span>
            </template>
            <RouterLink to="/GoodsList"><el-menu-item index="5-1">货物列表</el-menu-item></RouterLink>
            <RouterLink to="/GoodsInfoSetting"><el-menu-item index="5-2">货物信息设置</el-menu-item></RouterLink>
        </el-sub-menu>
        <el-sub-menu index="6">
            <template #title>
                <span>管理员信息管理</span>
            </template>
            <RouterLink to="/AdministratorsList"><el-menu-item index="6-1">管理员列表</el-menu-item></RouterLink>
            <RouterLink to="/AdministratorsInfoSetting"><el-menu-item index="6-2">管理员信息设置</el-menu-item></RouterLink>
        </el-sub-menu>
    </el-menu>
</template>

<script>
export default {
    name: "AsideMenu",
    data() {
        return {
            status: "disabled",
            menuHeight: ""
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted() {
        this.menuHeight = window.innerHeight - 60;
    }
}
</script>

<style scoped>
</style>