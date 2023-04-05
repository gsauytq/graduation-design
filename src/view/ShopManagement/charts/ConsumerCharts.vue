<template>
    <div class="panel-button">
        <el-button size="large" type="primary" @click="genderCharts">性别</el-button>
        <el-button size="large" type="primary" @click="saleCharts">消费额</el-button>
        <el-button size="large" type="primary" @click="typeCharts">商品类别</el-button>
    </div>
    <div style="height: 400px" id="consumer-panel"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: "ConsumerCharts",
    methods: {
        genderCharts() {
            var myChartPie = echarts.init(document.getElementById('consumer-panel'), 'westeros');
            var option = {
                title: {
                    text: '消费者流量分析'
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '男'
                            },
                            {
                                value: 234,
                                name: '女'
                            }
                        ]
                    }
                ]
            };

            myChartPie.setOption(option);
            window.addEventListener('resize', function () {
                myChartPie.resize();
            });
        },
        saleCharts() {
            var myChartPie = echarts.init(document.getElementById('consumer-panel'), 'westeros');
            var option = {
                title: {
                    text: '消费者流量分析'
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '≤￥100'
                            },
                            {
                                value: 234,
                                name: '≤￥200'
                            },
                            {
                                value: 311,
                                name: '≤￥500'
                            }
                        ]
                    }
                ]
            };

            myChartPie.setOption(option);
            window.addEventListener('resize', function () {
                myChartPie.resize();
            });
        },
        typeCharts() {
            var myChartPie = echarts.init(document.getElementById('consumer-panel'), 'westeros');
            var option = {
                title: {
                    text: '消费者流量分析'
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '智能手机'
                            },
                            {
                                value: 234,
                                name: '平板电脑'
                            },
                            {
                                value: 188,
                                name: '智能手表'
                            },
                            {
                                value: 410,
                                name: '笔记本电脑'
                            }
                        ]
                    }
                ]
            };

            myChartPie.setOption(option);
            window.addEventListener('resize', function () {
                myChartPie.resize();
            });
        }
    },
    mounted() {
        this.genderCharts()
    }
}
</script>

<style scoped>
.panel-button {
    text-align: right;
    margin: 0 5px;
}
</style>