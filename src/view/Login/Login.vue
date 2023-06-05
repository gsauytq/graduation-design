<template>
    <div id="login-bg" :style="{ height: bgImgHeight + 'px' }">
        <el-card id="login-card">
            <span style="font-size: 24px;">欢迎登录网上商城信息管理系统</span>
            <div id="form-div">
                <el-form :model="loginForm" label-width="140px" label-position="right" :rules="rules" ref="loginForm">
                    <el-form-item prop="username">
                        <template #label><span class="label-font-size">管理员账号：</span></template>
                        <el-input class="input-width form-item-layout" v-model="loginForm.username"
                            placeholder="请输入管理员账号"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item-margin" prop="password">
                        <template #label><span class="label-font-size">密码：</span></template>
                        <el-input class="input-width form-item-layout" v-model="loginForm.password" placeholder="请输入密码"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item class="form-item-margin">
                        <template #label><span class="label-font-size">权限选择：</span></template>
                        <el-radio-group v-model="authorityRadio">
                            <el-radio label="1">系统管理员</el-radio>
                            <el-radio label="2">商城管理员</el-radio>
                            <el-radio label="3">店铺管理员</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item class="form-item-margin">
                        <el-button type="primary" size="large" style="width: 160px;"
                            @click="login('loginForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
import { validateUsername, validatePassword } from '../../utils/validate';
import { setToken } from '@/utils/settingToken';

export default {
    name: "LoginView",
    data() {
        return {
            bgImgHeight: "",
            loginForm: {
                username: '',
                password: '',
            },
            authorityRadio: "",
            rules: {
                username: [{validator: validateUsername, trigger: 'blur'}],
                password: [{validator: validatePassword, trigger: 'blur'}]
            }
        }
    },
    methods: {
        login(loginForm) {
            this.$refs[loginForm].validate((valid) => {
                if (valid) {
                    console.log(this.loginForm);
                    this.service.post("/login", this.loginForm).then(res => {
                        console.log(res)
                        if (res.data.status == 200) {
                            setToken('username', res.data.username)
                            setToken('token', res.data.token)
                            this.$message({message: res.data.message, type: 'success'})
                            this.$router.push("/LayoutContainer")
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                } else {
                    console.error(this.loginForm);
                }
            })
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