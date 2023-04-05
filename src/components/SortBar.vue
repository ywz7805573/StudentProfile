<script setup>
import { getCurrentInstance, onMounted , reactive, toRefs, onUnmounted, watch, watchEffect} from 'vue';
// import { ECharts } from 'echarts';
import * as echarts from 'echarts'
import {use} from "echarts/core"
import "echarts"
var    name = 'sortbar'
const props = defineProps({
    chartName:String,
    // dimensions:Array,
    chartData:Array,
})    // {
        
    // },
        var dataMap = reactive({
            chartName: props.chartName,
            // dimensions: props.dimensions,
            chartData: props.chartData,
            option: {},
            myChart: null,
        })
        const chartPrepare = () => {
            console.log(1);
            // let internalInstance = getCurrentInstance();
            // let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            // //图表的id父级传过来 防止一个页面多个图不绘制，还能防止vue3.x 还有打包之后初始化不绘制的问题  原理我也不知道  有大佬告知一下最好  
            // dataMap.myChart = echarts.init(document.getElementById(dataMap.chartName));
            // 绘制图表需要的数据
            dataMap.option = {
                // color: ['rgba(64, 119, 255, 0.6)', 'rgba(236, 112, 192, 0.6)'],
                title: {
                    text: '柱状图排序'
                },
                tooltip: {
                    trigger: 'axis',
                    show: true,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                dataset:[
                    {
                        dimensions : ['feature','score'],
                        source : dataMap.chartData,
                        // 参考格式如下
                        // source: [
                        //     ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
                        //     ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
                        //     ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
                        //     ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
                        //     ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
                        //     ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
                        //     ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
                        //     ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
                        //     ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
                        // ]
                    },
                    {
                        transform: {
                            type: 'sort',
                            config: { dimension: 'score', order: 'desc' }
                        }
                    }
                    
                ],
                xAxis: {
                    type: 'category',
                    axisLabel: { interval: 0, rotate: 30 }
                },
                yAxis: {
                    
                },
                series: {
                    type: 'bar',
                    encode: { x: 'feature', y: 'score' },
                    datasetIndex: 1
                }
            }
        }
        // 绘制图表
        var chart = null;
        const  chartOpen = () => {
            console.log(2)
            // 这里是tooltip有bug，不能直接把echarts实例赋值给reactive对象即dataMap.mychart，所以额外在这里定义一个chart，然后再赋值给reactive对象 
            // let internalInstance = getCurrentInstance();
            
            // let chart = document.getElementById(dataMap.chartName)
          
            // let echarts = internalInstance.appContext.config.globalProperties.$echarts;
           
            if(chart == null){
                console.log(2.1)
                chart = echarts.init(document.getElementById(dataMap.chartName))
                chart.setOption(dataMap.option, true);
                dataMap.myChart = chart
            }
            else{
                console.log(2.2)
                chart.setOption(dataMap.option, true);
                dataMap.myChart = chart
            }
        }
        onMounted(() => {
            // 基础数据
            if( dataMap.chartData){
                chartPrepare()
             // 绘制图表
              chartOpen()
            }
            
            
        });

        watch(() => props.chartData,
            (count, prevCount) => {
                // 监听数据变了  就重新绘制一遍  也就是大佬们说的  "切记，数据变化后需要再次调init方法刷线图表"
                // 绘制图表
                chartOpen()
                console.log(count, prevCount);
            }, {
                deep: true
            }
        )

        onUnmounted(() => {
            //销毁
            // let internalInstance = getCurrentInstance();
            // let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            echarts.dispose(dataMap.myChart);
            dataMap.myChart = null;
        })

</script>
<template>
    <div ref="sortbar" :id="chartName" style="width: 100%; height: 400px"></div>
</template>