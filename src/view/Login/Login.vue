<template>
    <div id="login-bg" :style="{ height: bgImgHeight + 'px' }">
        <el-card id="login-card">
            <span style="font-size: 24px;">欢迎登录网上商城信息管理系统</span>
            <div id="form-div">
                <el-form :model="loginForm" label-width="140px" label-position="right">
                    <el-form-item required>
                        <template #label><span class="label-font-size">管理员账号：</span></template>
                        <el-input class="input-width form-item-layout" v-model="loginForm.userName"
                            placeholder="请输入管理员账号"></el-input>
                    </el-form-item>
                    <el-form-item required class="form-item-margin">
                        <template #label><span class="label-font-size">密码：</span></template>
                        <el-input class="input-width form-item-layout" v-model="loginForm.password" placeholder="请输入密码"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item class="form-item-margin">
                        <template #label><span class="label-font-size">权限选择：</span></template>
                        <el-radio-group v-model="authorityRadio" class="ml-4">
                            <el-radio label="1">系统管理员</el-radio>
                            <el-radio label="2">商城管理员</el-radio>
                            <el-radio label="3">店铺管理员</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item class="form-item-margin">
                        <el-button type="primary" size="large" style="width: 160px;">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { ref } from 'vue'

export default {
    name: "LoginView",
    data() {
        return {
            bgImgHeight: "",
            loginForm: reactive({
                userName: '',
                password: '',
            }),
            authorityRadio: ref('1')
        }
    },
    mounted() {
        this.bgImgHeight = window.innerHeight;
    }
}
</script>

<style scoped>

#login-bg {
    background-image: url("../../assets/login_bg.jpg");
}

#login-card {
    width: 500px;
    height: 400px;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 20px;
    text-align: center;
}

#form-div {
    margin-top: 30px;
    padding: 10px;
}

.form-item-layout {
    margin: 0 auto;
}

.label-font-size {
    font-size: 18px;
}

.input-width {
    width: 250px;
}

.form-item-margin {
    margin-top: 30px;
}
</style>