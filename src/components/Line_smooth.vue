<script setup>
import { getCurrentInstance, onMounted , reactive, toRefs, onUnmounted, watch, watchEffect} from 'vue';


var    name = 'radar_3'
const props = defineProps({
    chartName:String,
    x_Axis:Array,
    chartData:Array,
})    // {
        
    // },
        var dataMap = reactive({
            chartName: props.chartName,
            x_Axis: props.x_Axis,
            chartData: props.chartData,
            option: {},
            myChart: null,
        })
        const chartPrepare = () => {
            console.log(dataMap.chartData);
            // let internalInstance = getCurrentInstance();
            // let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            // //图表的id父级传过来 防止一个页面多个图不绘制，还能防止vue3.x 还有打包之后初始化不绘制的问题  原理我也不知道  有大佬告知一下最好  
            // dataMap.myChart = echarts.init(document.getElementById(dataMap.chartName));
            // 绘制图表需要的数据
            dataMap.option = {
                // color: ['rgba(64, 119, 255, 0.6)', 'rgba(236, 112, 192, 0.6)'],
                title: {
                    text: '细目折线图'
                },
                tooltip: {
                    trigger: 'axis',
                    show: true,
                },
                legend: {
                    data: ['个人综合素养水平', '平均水平']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                
                toolbox: {
                    feature: {
                    saveAsImage: {}
                    }
                },
                
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: dataMap.x_Axis,
                    smooth: true
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '个人综合素养水平',
                        data: props.chartData[0],
                        type: 'line',
                        smooth: true,
                        
                    },
                    {
                        name: '平均水平',
                        data: props.chartData[1],
                        type: 'line',
                        smooth: true
                    },
                ]
            }
        }
        // 绘制图表
        const chartOpen = () => {
            // 这里是tooltip有bug，不能直接把echarts实例赋值给reactive对象即dataMap.mychart，所以额外在这里定义一个chart，然后再赋值给reactive对象 
            let internalInstance = getCurrentInstance();
            let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            const chart = echarts.init(document.getElementById(dataMap.chartName))
            chart.setOption(dataMap.option, true);
            dataMap.myChart = chart

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
        // watchEffect(()=>{
        //     dataMap.chartData = props.chartData
        //     console.log(1)
        // })
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

        // return {
        //     ...toRefs(dataMap),
        // }
    






</script>
<template>
    <div ref="line_smooth" :id="chartName" style="width: 100%; height: 400px"></div>
</template>