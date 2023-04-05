<script>
import { getCurrentInstance, onMounted , reactive, toRefs, onUnmounted, watch} from 'vue';

export default{
    name:'radar_3',
    props:{
        chartName:String,
        chartData:Array,
    },
    setup(props){
        const dataMap = reactive({
            chartName: props.chartName,
            chartData: props.chartData,
            option: {},
            myChart: null,
        })
        const chartPrepare = () => {
            console.log(dataMap.chartData);
           // 绘制图表需要的数据
            dataMap.option = {
                color: ['rgba(64, 119, 255, 0.6)', 'rgba(236, 112, 192, 0.6)'],
                title: {
                    text: '学生综合素养：3大维度'
                },
                legend: {
                    data: ['个人综合素养水平', '平均水平']
                },
                radar: {
                    // shape: 'circle',
                    indicator: [
                    { name: '自主发展', max: 100 },
                    { name: '社会参与', max: 100 },
                    { name: '文化修养', max: 100 },
                    ]
                },
                series: [
                    {
                        name: '学生综合素养对比',
                        type: 'radar',
                        data:[
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
                    },
                    
                ]
            }
        }
        // 绘制图表
        const chartOpen = () => {
            // 这个true可以看官方文档 
            let internalInstance = getCurrentInstance();
            let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            const chart = echarts.init(document.getElementById(dataMap.chartName))
            chart.setOption(dataMap.option, true);
            dataMap.myChart = chart
            
           
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
            //销毁
            let internalInstance = getCurrentInstance();
            let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            echarts.dispose(dataMap.myChart);
            dataMap.myChart = null;
        })

       
    }
}
</script>
<template>
    <div ref="radar_3" :id="chartName" style="width: 100%; height: 400px"></div>
</template>