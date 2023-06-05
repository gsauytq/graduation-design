<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>店铺信息设置</template>
        <el-form :model="shopInfo" label-width="auto" :inline="true" style="text-align: center;">
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
            <el-form-item>
                <el-button type="primary" @click="dialogVisible1 = true">添加店铺</el-button>
                <el-dialog v-model="dialogVisible1" title="添加店铺" width="30%">
                    <el-form :model="addShopInfo" label-width="120px" :inline="true">
                        <el-form-item required label="店铺名称：">
                            <el-input v-model="addShopInfo.shopName" class="add-form-style"
                                placeholder="请输入店铺名称"></el-input>
                        </el-form-item>
                        <el-form-item required label="店主姓名：">
                            <el-input v-model="addShopInfo.shopkeeperName" class="add-form-style"
                                placeholder="请输入店主姓名"></el-input>
                        </el-form-item>
                        <el-form-item required label="运营状态：">
                            <el-radio-group v-model="addShopInfo.status" class="add-form-style">
                                <el-radio label=1>未运营</el-radio>
                                <el-radio label=2>运营中</el-radio>
                            </el-radio-group>
                            {{ this.addShopInfo.status }}
                        </el-form-item>
                        <el-form-item required label="店铺介绍：">
                            <el-input v-model="addShopInfo.description" class="add-form-style" type="textarea" rows="5"
                                placeholder="请输入店铺介绍"></el-input>
                        </el-form-item>
                        <el-form-item required label="联系电话：">
                            <el-input v-model="addShopInfo.phone" class="add-form-style" placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogVisible1 = false">取消</el-button>
                            <el-button type="primary" @click="submintInfo1">
                                提交
                            </el-button>
                        </span>
                    </template>
                </el-dialog>
            </el-form-item>
        </el-form>
    </el-card>
    <el-card>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 15px;" height="600" border>
            <el-table-column prop="id" label="店铺编号" width="120" />
            <el-table-column prop="shopName" label="店铺名称" width="220" />
            <el-table-column prop="shopkeeperName" label="店主姓名" width="150" />
            <el-table-column prop="createTime" label="创建时间" width="150" />
            <el-table-column prop="status" label="运营状态" width="140" />
            <el-table-column prop="description" label="店铺介绍" width="460" />
            <el-table-column prop="phone" label="联系电话" width="180" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
    <el-dialog v-model="dialogVisible2" title="修改店铺" width="30%">
        <el-form :model="addShopInfo" label-width="120px" :inline="true">
            <el-form-item required label="店铺名称：">
                <el-input v-model="addShopInfo.shopName" class="add-form-style" placeholder="请输入店铺名称"></el-input>
            </el-form-item>
            <el-form-item required label="店主姓名：">
                <el-input v-model="addShopInfo.shopkeeperName" class="add-form-style" placeholder="请输入店主姓名"></el-input>
            </el-form-item>
            <el-form-item required label="运营状态：">
                <el-radio-group v-model="addShopInfo.status" class="add-form-style">
                    <el-radio label="未运营" />
                    <el-radio label="运营中" />
                </el-radio-group>
            </el-form-item>
            <el-form-item required label="店铺介绍：">
                <el-input v-model="addShopInfo.description" class="add-form-style" type="textarea" rows="5"
                    placeholder="请输入店铺介绍"></el-input>
            </el-form-item>
            <el-form-item required label="联系电话：">
                <el-input v-model="addShopInfo.phone" class="add-form-style" placeholder="请输入联系电话"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取消</el-button>
                <el-button type="primary" @click="submintInfo2">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { ElMessageBox } from 'element-plus'

export default {
    name: "ShopInfoSetting",
    data() {
        return {
            dialogVisible1: false,
            dialogVisible2: false,
            shopInfo: {
                shopName: "",
                shopkeeperName: "",
                status: 0,
                phone: ""
            },
            addShopInfo: {
                shopName: "",
                shopkeeperName: "",
                status: 0,
                description: "",
                phone: ""
            },
            tableData: [
                {
                    id: "1",
                    shopName: "Tom的小店",
                    shopkeeperName: "Tom",
                    createTime: "2019-02-03",
                    status: "运营中",
                    description: "这里是Tom的小店，售卖各种文具",
                    phone: "13948912352"
                }
            ]
        }
    },
    methods: {
        query() {
            console.log("查询");
            if (this.shopInfo.shopName == "") {
                ElMessageBox.alert('请输入店铺信息', '警告', {
                    confirmButtonText: 'OK',
                    callback: () => {
                        this.shopInfo.shopName = "",
                            this.shopInfo.shopkeeperName = "",
                            this.shopInfo.status = "",
                            this.shopInfo.phone = ""
                    },
                })
            }
        },
        submintInfo1() {
            this.dialogVisible1 = false
            console.log("提交");
        },
        submintInfo2() {
            this.dialogVisible2 = false
            console.log("提交");
        },
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible2 = true;
        }
    }
}
</script>

<style scoped>
.dialog-footer {
    margin-right: 10px;
}

.add-form-style {
    margin: 5px 0;
}
</style>