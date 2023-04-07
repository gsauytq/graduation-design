<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>货物信息设置</template>
        <el-form :model="goodsInfo" label-width="auto" :inline="true" style="text-align: center;">
            <el-form-item required label="货物名称：">
                <el-input v-model="goodsInfo.goodsName" placeholder="请输入货物名称"></el-input>
            </el-form-item>
            <el-form-item label="品牌：">
                <el-input v-model="goodsInfo.brand" placeholder="请输入品牌"></el-input>
            </el-form-item>
            <el-form-item label="生产厂家：">
                <el-input v-model="goodsInfo.manufacturer" placeholder="请输入生产厂家"></el-input>
            </el-form-item>
            <el-form-item label="生产地：">
                <el-input v-model="goodsInfo.yieldly" placeholder="请输入生产地"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="dialogVisible = true">添加货物</el-button>
                <el-dialog v-model="dialogVisible" title="添加货物" width="30%">
                    <el-form :model="addGoodsInfo" label-width="120px" :inline="true">
                        <el-form-item required label="货物名称：">
                            <el-input v-model="addGoodsInfo.goodsName" class="add-form-style"
                                placeholder="请输入货物名称"></el-input>
                        </el-form-item>
                        <el-form-item required label="成本价：">
                            <el-input v-model="addGoodsInfo.costPrice" class="add-form-style"
                                placeholder="请输入成本价"></el-input>
                        </el-form-item>
                        <el-form-item required label="售价：">
                            <el-input v-model="addGoodsInfo.price" class="add-form-style"
                                placeholder="请输入售价"></el-input>
                        </el-form-item>
                        <el-form-item required label="品牌：">
                            <el-input v-model="addGoodsInfo.brand" class="add-form-style"
                                placeholder="请输入品牌"></el-input>
                        </el-form-item>
                        <el-form-item required label="生产厂家：">
                            <el-input v-model="addGoodsInfo.manufacturer" class="add-form-style"
                                placeholder="请输入生产厂家"></el-input>
                        </el-form-item>
                        <el-form-item required label="生产地：">
                            <el-input v-model="addGoodsInfo.yieldly" class="add-form-style"
                                placeholder="请输入生产地"></el-input>
                        </el-form-item>
                        <el-form-item required label="库存：">
                            <el-input v-model="addGoodsInfo.stock" class="add-form-style"
                                placeholder="请输入库存"></el-input>
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
            <el-table-column prop="id" label="货物号" width="190" />
            <el-table-column prop="goodsName" label="货物名称" width="260" />
            <el-table-column prop="costPrice" label="成本价" width="170" />
            <el-table-column prop="price" label="售价" width="170" />
            <el-table-column prop="brand" label="品牌" width="200" />
            <el-table-column prop="manufacturer" label="生产厂家" width="290" />
            <el-table-column prop="yieldly" label="生产地" width="220" />
            <el-table-column prop="stock" label="库存" width="140" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: "GoodsInfoSetting",
    data() {
        return {
            dialogVisible: false,
            goodsInfo: reactive({
                employeeName: "",
                phone: "",
                email: ""
            }),
            addGoodsInfo: reactive({
               employeeName: "",
               gender: "",
               age: "",
               salary: "",
               phone: "",
               email: ""
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