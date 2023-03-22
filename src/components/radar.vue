<script>
import { getCurrentInstance, onMounted , reactive, toRefs, onUnmounted, watch} from 'vue';

export default{
    name:'radar',
    props:{
        chartName:String,
        chartData:Object,
    },
    setup(props){
        const dataMap = reactive({
            chartName: props.chartName,
            chartData: props.chartData,
            option: {},
        })
        const chartPrepare = () => {
            console.log(dataMap.chartData);
            let internalInstance = getCurrentInstance();
            let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            //图表的id父级传过来 防止一个页面多个图不绘制，还能防止vue3.x 还有打包之后初始化不绘制的问题  原理我也不知道  有大佬告知一下最好  
            dataMap.myChart = echarts.init(document.getElementById(dataMap.chartName));
            // 绘制图表需要的数据
            dataMap.option = {
                color: ['rgba(64, 119, 255, 0.6)', 'rgba(236, 112, 192, 0.6)'],
                title: {
                    text: '学生综合素养：三大维度'
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
                    data: dataMap.chartData
                    }
                ]
            }
        }
        // 绘制图表
        const chartOpen = () => {
            // 这个true可以看官方文档 
            dataMap.myChart.setOption(dataMap.option, true);

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
            //销毁
            echarts.dispose(dataMap.myChart);
            dataMap.myChart = null;
        })

        return {
            ...toRefs(dataMap),
        }
    }
}

// const chartOption = (param) => chart.setOption({
//     title: {
//         text: '学生综合素养：三大维度'
//     },
//     legend: {
//         data: ['Allocated Budget', 'Actual Spending']
//     },
//     radar: {
//         // shape: 'circle',
//         indicator: [
//         { name: '自主发展', max: 100 },
//         { name: '文化修养', max: 100 },
//         { name: '社会参与', max: 100 },
//         ]
//     },
//     series: [
//         {
//         name: '学生综合素养对比',
//         type: 'radar',
//         data: param
//         }
//     ]
// })
// onMounted(() => {
//     var chartDom = document.getElementById('radar');
//     chart = echarts.init(chartDom);
    
// })




</script>
<template>
    <div ref="radar" :id="chartName" style="width: 100%; height: 400px"></div>
</template>