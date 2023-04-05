<template>
    <div class="panel-button">
        <el-button size="large" type="primary" @click="myYearEcharts">年</el-button>
        <el-button size="large" type="primary" @click="myMonthEcharts">月</el-button>
        <el-button size="large" type="primary" @click="myDayEcharts">日</el-button>
    </div>
    <div style="height: 400px" id="analysis-panel"></div>
</template>

<script>
import * as echarts from 'echarts';
import moment from 'moment';

export default {
    name: "PageViewPanel",
    props: ["title"],
    methods: {
        myYearEcharts() {
            var yearMyChart = echarts.init(document.getElementById('analysis-panel'), 'westeros');

            var option = {
                title: {
                    text: this.title + '年度访问量分析'
                },
                xAxis: {
                    data: ['' + (moment().year() - 5), '' + (moment().year() - 4), '' + (moment().year() - 3), '' + (moment().year() - 2), '' + (moment().year() - 1)]
                },
                yAxis: {},
                series: [
                    {
                        data: [10, 22, 28, 23, 19],
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

            yearMyChart.setOption(option);
            window.addEventListener('resize', function () {
                yearMyChart.resize();
            });
        },
        myMonthEcharts() {
            var monthMyChart = echarts.init(document.getElementById('analysis-panel'), 'westeros');
        
            var option = {
                title: {
                    text: this.title + '月度访问量分析'
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
                series: [
                    {
                        data: [10, 22, 28, 23, 19, 34],
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

            monthMyChart.setOption(option);
            window.addEventListener('resize', function () {
                monthMyChart.resize();
            });
        },
        myDayEcharts() {
            var dayMyChart = echarts.init(document.getElementById('analysis-panel'), 'westeros');
            
            var option = {
                title: {
                    text: this.title + '日访问量分析'
                },
                xAxis: {
                    data: ['' + (moment().subtract(7, "days").date()), 
                    '' + (moment().subtract(6, "days").date()), 
                    '' + (moment().subtract(5, "days").date()), 
                    '' + (moment().subtract(4, "days").date()), 
                    '' + (moment().subtract(3, "days").date()), 
                    '' + (moment().subtract(2, "days").date()), 
                    '' + (moment().subtract(1, "days").date())]
                },
                yAxis: {},
                series: [
                    {
                        data: [10, 22, 28, 23, 19, 23, 12],
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

            dayMyChart.setOption(option);
            window.addEventListener('resize', function () {
                dayMyChart.resize();
            });
        }
    },
    mounted() {
        this.myYearEcharts()
    }
}
</script>

<style scoped>
.panel-button {
    text-align: right;
    margin: 0 5px;
}
</style>