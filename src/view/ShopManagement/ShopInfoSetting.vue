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
                <el-button type="primary" @click="dialogVisible = true">添加店铺</el-button>
                <el-dialog v-model="dialogVisible" title="添加店铺" width="30%">
                    <el-form :model="addShopInfo" label-width="120px" :inline="true">
                        <el-form-item required label="店铺名称：">
                            <el-input v-model="addShopInfo.shopName" class="add-form-style" placeholder="请输入店铺名称"></el-input>
                        </el-form-item>
                        <el-form-item required label="店主姓名：">
                            <el-input v-model="addShopInfo.shopkeeperName" class="add-form-style" placeholder="请输入店主姓名"></el-input>
                        </el-form-item>
                        <el-form-item required label="联系电话：">
                            <el-input v-model="addShopInfo.description" class="add-form-style" type="textarea" rows="5" placeholder="请输入店铺介绍"></el-input>
                        </el-form-item>
                        <el-form-item required label="联系电话：">
                            <el-input v-model="addShopInfo.phone" class="add-form-style" placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogVisible = false">取消</el-button>
                            <el-button type="primary" @click="submintInfo">
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
            <el-table-column prop="shopName" label="店铺名称" width="280" />
            <el-table-column prop="shopkeeperName" label="店主姓名" width="150" />
            <el-table-column prop="createTime" label="创建时间" width="150" />
            <el-table-column prop="runTime" label="运营时长" width="150" />
            <el-table-column prop="status" label="运营状态" width="100" />
            <el-table-column prop="description" label="店铺介绍" width="330" />
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
</template>

<script>
import { reactive } from 'vue';

export default {
    name: "ShopInfoSetting",
    data() {
        return {
            dialogVisible: false,
            shopInfo: reactive({
                shopName: "",
                shopkeeperName: "",
                status: "",
                phone: ""
            }),
            addShopInfo: reactive({
                shopName: "",
                shopkeeperName: "",
                description: "",
                phone: ""
            }),
            tableData: [
                
            ]
        }
    },
    methods: {
        query() {
            console.log("查询");
        },
        submintInfo() {
            this.dialogVisible = false
            console.log("提交");
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