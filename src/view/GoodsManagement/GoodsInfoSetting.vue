<template>
    <el-card style="margin-bottom: 15px;">
        <template #header>商品信息设置</template>
        <el-form :model="goodsInfo" label-width="auto" :inline="true" style="text-align: center;">
            <el-form-item required label="商品名称：">
                <el-input v-model="goodsInfo.goodsName" placeholder="请输入商品名称"></el-input>
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
                <el-button type="primary" @click="dialogVisible1 = true">添加商品</el-button>
                <el-dialog v-model="dialogVisible1" title="添加商品" width="30%">
                    <el-form :model="addGoodsInfo" label-width="120px" :inline="true">
                        <el-form-item required label="商品名称：">
                            <el-input v-model="addGoodsInfo.goodsName" class="add-form-style"
                                placeholder="请输入商品名称"></el-input>
                        </el-form-item>
                        <el-form-item required label="成本价：">
                            <el-input v-model="addGoodsInfo.costPrice" class="add-form-style"
                                placeholder="请输入成本价"></el-input>
                        </el-form-item>
                        <el-form-item required label="售价：">
                            <el-input v-model="addGoodsInfo.price" class="add-form-style" placeholder="请输入售价"></el-input>
                        </el-form-item>
                        <el-form-item required label="品牌：">
                            <el-input v-model="addGoodsInfo.brand" class="add-form-style" placeholder="请输入品牌"></el-input>
                        </el-form-item>
                        <el-form-item required label="生产厂家：">
                            <el-input v-model="addGoodsInfo.manufacturer" class="add-form-style"
                                placeholder="请输入生产厂家"></el-input>
                        </el-form-item>
                        <el-form-item required label="生产地：">
                            <el-input v-model="addGoodsInfo.yieldly" class="add-form-style" placeholder="请输入生产地"></el-input>
                        </el-form-item>
                        <el-form-item required label="库存：">
                            <el-input v-model="addGoodsInfo.stock" class="add-form-style" placeholder="请输入库存"></el-input>
                        </el-form-item>
                        <el-form-item required label="商品描述：">
                            <el-input v-model="addGoodsInfo.description" class="add-form-style" placeholder="请输入商品描述"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogVisible1 = false">取消</el-button>
                            <el-button type="primary" @click="submintInfo2">
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
            <el-table-column prop="id" label="商品编号" width="120" />
            <el-table-column show-overflow-tooltip="true" prop="goodsName" label="商品名称" width="340" />
            <el-table-column prop="costPrice" label="成本价" width="100" />
            <el-table-column prop="price" label="售价" width="80" />
            <el-table-column prop="brand" label="品牌" width="160" />
            <el-table-column prop="manufacturer" label="生产厂家" width="260" />
            <el-table-column prop="yieldly" label="生产地" width="120" />
            <el-table-column prop="stock" label="库存" width="80" />
            <el-table-column prop="description" label="商品描述" width="200" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" page-size="13" />
    </el-card>
    <el-dialog v-model="dialogVisible2" title="添加商品" width="30%">
        <el-form :model="addGoodsInfo" label-width="120px" :inline="true">
            <el-form-item required label="商品名称：">
                <el-input v-model="addGoodsInfo.goodsName" class="add-form-style" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item required label="成本价：">
                <el-input v-model="addGoodsInfo.costPrice" class="add-form-style" placeholder="请输入成本价"></el-input>
            </el-form-item>
            <el-form-item required label="售价：">
                <el-input v-model="addGoodsInfo.price" class="add-form-style" placeholder="请输入售价"></el-input>
            </el-form-item>
            <el-form-item required label="品牌：">
                <el-input v-model="addGoodsInfo.brand" class="add-form-style" placeholder="请输入品牌"></el-input>
            </el-form-item>
            <el-form-item required label="生产厂家：">
                <el-input v-model="addGoodsInfo.manufacturer" class="add-form-style" placeholder="请输入生产厂家"></el-input>
            </el-form-item>
            <el-form-item required label="生产地：">
                <el-input v-model="addGoodsInfo.yieldly" class="add-form-style" placeholder="请输入生产地"></el-input>
            </el-form-item>
            <el-form-item required label="库存：">
                <el-input v-model="addGoodsInfo.stock" class="add-form-style" placeholder="请输入库存"></el-input>
            </el-form-item>
            <el-form-item required label="商品描述：">
                <el-input v-model="addGoodsInfo.description" class="add-form-style" placeholder="请输入商品描述"></el-input>
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
    name: "GoodsInfoSetting",
    data() {
        return {
            dialogVisible1: false,
            dialogVisible2: false,
            goodsInfo: {
                goodsName: "",
                brand: "",
                manufacturer: "",
                yieldly: ""
            },
            addGoodsInfo: {
                goodsName: "",
                costPrice: "",
                price: "",
                brand: "",
                manufacturer: "",
                yieldly: "",
                stock: ""
            },
            tableData: [
                {
                    id: 1,
                    goodsName: "纯棉牛津纺衬衫男长袖衬衣春秋纯色全棉商务休闲基础学生男装寸衫纯棉牛津纺衬衫男长袖衬衣春秋纯色全棉商务休闲基础学生男装寸衫",
                    costPrice: 79,
                    price: 99,
                    brand: "BLACK MONDAY",
                    manufacturer: "山东省青岛市阳光服饰公司",
                    yieldly: "山东青岛",
                    stock: 20
                }
            ]
        }
    },
    methods: {
        query() {
            console.log("查询");
            if (this.goodsInfo.goodsName == "") {
                ElMessageBox.alert('请输入商品名称', '警告', {
                    confirmButtonText: 'OK',
                    callback: () => {
                        this.goodsInfo.goodsName = "",
                            this.goodsInfo.brand = "",
                            this.goodsInfo.manufacturer = "",
                            this.goodsInfo.yieldly = ""
                    },
                })
            }
        },
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible2 = true;
        },
        submintInfo1() {
            this.dialogVisible1 = false
            console.log("提交");
        },
        submintInfo2() {
            this.dialogVisible2 = false
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