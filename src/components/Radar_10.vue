<script setup>
import * as echarts from 'echarts'
import "echarts"
import { getCurrentInstance, onMounted , reactive, toRefs, onUnmounted, watch} from 'vue';
    var name = 'radar_10'
    const props = defineProps({
        chartName:String,
        chartData:Object,
    })
        var dataMap = reactive({
            chartName: props.chartName,
            chartData: props.chartData,
            option: {},
            myChart: null,
        })
        const chartPrepare = () => {
            console.log(11);
            
            dataMap.option = {
                tooltip: {
                    trigger: 'item',
                    show: true,
                },
                color: ['rgba(64, 119, 255, 0.6)', 'rgba(236, 112, 192, 0.6)'],
                title: {
                    left: 'center',
                    text: '学生综合素养：10类指标',
                    
                },
                legend: {
                    top: '8%',
                    data: ['个人综合素养水平', '平均水平']
                },
                radar: {
                    center : ['50%','60%'],
                    radius: '80%',
                    // shape: 'circle',
                    indicator: [
                    { name: '身心健康', max: 100 },
                    { name: '自我管理', max: 100 },
                    { name: '问题解决与创新', max: 100 },
                    { name: '人文与审美', max: 100 },
                    { name: '语言与沟通', max: 100 },
                    { name: '科技与应用', max: 100 },
                    { name: '公民道德', max: 100 },
                    { name: '社会责任', max: 100 },
                    { name: '国家认同', max: 100 },
                    { name: '国际理解', max: 100 },
                    ]
                },
                series: [
                    {
                        name: '学生综合素养对比',
                        type: 'radar',
                        data: [
                            {
                                value: dataMap.chartData[0],
                                name: '个人综合素养水平',
                                label: {
                                show: true,
                                formatter: function (params) {
                                    return params.value;
                                    }
                                },
                                areaStyle: { // 区域样式
                                    color: '#4077FF',
                                    opacity: 0.1
                                },
                            },
                            {
                                value: dataMap.chartData[1],
                                name: '平均水平',
                                label: {
                                show: true,
                                formatter: function (params) {
                                    return params.value;
                                    }
                                },
                                areaStyle: {
                                    color: '#EC70C0',
                                    opacity: 0.1
                                }
                            }
                        ]
                    }
                ]
            }
        }
        // 绘制图表
        var chart = null;
        const chartOpen = () => {
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
            console.log(22)
            // 这个true可以看官方文档 
            // let internalInstance = getCurrentInstance();
            // let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            // const chart = echarts.init(document.getElementById(dataMap.chartName))
            // chart.setOption(dataMap.option, true);
            // dataMap.myChart = chart
            

            // window.onresize = function() { // 自适应大小
            // 这个自适应大小我反正疯狂报错,应该是resize() 是一个需要配置的还是什么的玩意 搞不明白暂时不用了
            // 	dataMap.myChart.resize();
            // };
        }

        onMounted(() => {
            // 基础数据
            chartPrepare()
            // 绘制图表
            chartOpen()
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
            let internalInstance = getCurrentInstance();
            let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            //销毁
            echarts.dispose(dataMap.myChart);
            dataMap.myChart = null;
        })

  




</script>
<template>
    <div ref="radar_10" :id="chartName" style="width: 100%; height: 100%"></div>
</template>