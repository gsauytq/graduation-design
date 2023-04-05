<template>
    <div id="sales-analysis-panel" style="height: 450px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: "ActivityCharts",
    methods: {
        activity() {
            var yearMyChart = echarts.init(document.getElementById('sales-analysis-panel'), 'westeros');

            var option = {
                title: {
                    text: '店铺上年度活动销量分析'
                },
                xAxis: {
                    data: ['元旦', '春节', '元宵节', '妇女节', '618', '中秋节', '双十一', '双十二']
                },
                yAxis: {},
                series: [
                    {
                        data: [32, 22, 41, 33, 23, 19, 33, 11],
                        type: 'line',
                        smooth: false,
                        label: {
                            show: true,
                            position: 'bottom',
                            textStyle: {
                                fontSize: 10
                            }
                        }
                    }
                ]
            };

            yearMyChart.setOption(option);
            window.addEventListener('resize', function () {
                yearMyChart.resize();
            });
        }
    },
    mounted() {
        this.activity()
    }
}
</script>