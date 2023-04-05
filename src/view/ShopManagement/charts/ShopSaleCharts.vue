<template>
    <div style="height: 450px;" id="income-and-expenses-analysis-panel"></div>
</template>

<script>
import moment from 'moment';
import * as echarts from 'echarts';

export default {
    name: "ShopSaleCharts",
    props: ["title", "firstData", "secondData"],
    methods: {
        saleCharts() {
            var myIncomeAndExpensesChart = echarts.init(document.getElementById('income-and-expenses-analysis-panel'), 'westeros');

            var option = {
                title: {
                    text: this.title + '数据分析'
                },
                xAxis: {
                    data: ['' + (moment().subtract(6, "months").month() + 1), 
                    '' + (moment().subtract(5, "months").month() + 1), 
                    '' + (moment().subtract(4, "months").month() + 1), 
                    '' + (moment().subtract(3, "months").month() + 1), 
                    '' + (moment().subtract(2, "months").month() + 1), 
                    '' + (moment().subtract(1, "months").month() + 1)]
                },
                yAxis: {},
                legend: {
                    data: [this.firstData + '', this.secondData + ''],
                },
                series: [
                    {
                        name: this.firstData + '',
                        data: [10, 22, 28, 43, 49, 23],
                        type: 'line',
                        stack: 'x',
                        areaStyle: {},
                        smooth: true
                    },
                    {
                        name: this.secondData + '',
                        data: [5, 4, 3, 5, 7, 6],
                        type: 'line',
                        stack: 'x',
                        areaStyle: {},
                        smooth: true
                    }
                ]
            };

            myIncomeAndExpensesChart.setOption(option);
            window.addEventListener('resize', function () {
                myIncomeAndExpensesChart.resize();
            });
        }
    },
    mounted() {
        this.saleCharts()
    }
}
</script>