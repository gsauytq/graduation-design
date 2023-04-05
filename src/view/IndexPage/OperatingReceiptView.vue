<template>
    <div style="height: 450px" id="operating-receipt-panel"></div>
</template>

<script>
import * as echarts from 'echarts';
import moment from 'moment';

export default {
    name: "OperatingReceiptView",
    methods: {
        receiptEcharts() {
            var receiptChart = echarts.init(document.getElementById('operating-receipt-panel'), 'westeros');

            var option = {
                title: {
                    text: '商城年度总营收分析'
                },
                xAxis: {
                    data: ['' + (moment().year() - 5), '' + (moment().year() - 4), '' + (moment().year() - 3), '' + (moment().year() - 2), '' + (moment().year() - 1)]
                },
                yAxis: {},
                series: [
                    {
                        data: [20, 21, 28, 18, 33],
                        type: 'line',
                        smooth: true,
                        label: {
                            show: true,
                            position: 'bottom',
                            fontSize: 10
                        }
                    }
                ]
            };

            receiptChart.setOption(option);
            window.addEventListener('resize', function () {
                receiptChart.resize();
            });
        }
    },
    mounted() {
        this.receiptEcharts()
    }
}
</script>

<style scoped>
</style>