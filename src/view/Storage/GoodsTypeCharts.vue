<template>
    <div style="height: 450px" id="types-panel"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: "GoodsTypeCharts",
    methods: {
        typeCharts() {
            var myChartPie = echarts.init(document.getElementById('types-panel'), 'westeros');
            var option = {
                title: {
                    text: '仓库流量分析'
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '笔记本电脑'
                            },
                            {
                                value: 234,
                                name: '蓝牙耳机'
                            },
                            {
                                value: 188,
                                name: '智能手表'
                            },
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
        this.typeCharts()
    }
}
</script>

<style scoped>
.panel-button {
    text-align: right;
    margin: 0 5px;
}
</style>