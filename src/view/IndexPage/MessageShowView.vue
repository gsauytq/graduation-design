<template>
    <el-card style="height: 350px;" :body-style="{ padding: '0px' }" shadow="hover">
        <el-tabs type="border-card" style="height: 350px;">
            <el-tab-pane label="消息浏览">消息浏览</el-tab-pane>
            <el-tab-pane label="系统介绍">系统介绍</el-tab-pane>
            <el-tab-pane label="数据摘要">数据摘要</el-tab-pane>
            <el-tab-pane label="相关链接">相关链接</el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
    export default {
        name: "MessageShowView"
    } 
</script>