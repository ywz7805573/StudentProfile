<!--  -->


<script>
import { getCurrentInstance, onMounted, reactive, toRefs, onUnmounted, watch } from 'vue';
export default {
    name: "pie",
    props: {
        chartName: String,

    },
    // data() {
    //     return {
    //     }
    // }
    setup(props) {
        // console.log(props.chartName);
        // console.log(props.chartName);
        const dataMap = reactive({
            chartName: props.chartName,
            options: {}
        })
        const chartPrepare = () => {

            let internalInstance = getCurrentInstance();
            let echarts = internalInstance.appContext.config.globalProperties.$echarts;
            dataMap.myChart = echarts.init(document.getElementById(dataMap.chartName));
            // 绘制图表需要的数据
            dataMap.option =
            {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    data: [
                        'Direct',
                        'Marketing',
                        'Search Engine',
                        'Email',
                        'Union Ads',
                        'Video Ads',
                        'Baidu',
                        'Google',
                        'Bing',
                        'Others'
                    ]
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        label: {
                            position: 'inner',
                            fontSize: 14
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1548, name: 'Search Engine' },
                            { value: 775, name: 'Direct' },
                            { value: 679, name: 'Marketing', selected: true }
                        ]
                    },
                    {
                        name: dataMap.chartName,
                        type: 'pie',
                        radius: ['45%', '60%'],
                        labelLine: {
                            length: 30
                        },
                        label: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#F6F8FC',
                            borderColor: '#8C8D8E',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#6E7079',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#8C8D8E',
                                    width: '100%',
                                    borderWidth: 1,
                                    height: 0
                                },
                                b: {
                                    color: '#4C5058',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#fff',
                                    backgroundColor: '#4C5058',
                                    padding: [3, 4],
                                    borderRadius: 4
                                }
                            }
                        },
                        data: [
                            { value: 1048, name: 'Baidu' },
                            { value: 335, name: 'Direct' },
                            { value: 310, name: 'Email' },
                            { value: 251, name: 'Google' },
                            { value: 234, name: 'Union Ads' },
                            { value: 147, name: 'Bing' },
                            { value: 135, name: 'Video Ads' },
                            { value: 102, name: 'Others' }
                        ]
                    }
                ]
            };

        }
        const chartOpen = () => {
            // 这个true可以看官方文档 
            dataMap.myChart.setOption(dataMap.option, true);
        }

        watch(() => props.chartName,
            () => {
                // 监听数据变了  就重新绘制一遍  也就是大佬们说的  "切记，数据变化后需要再次调init方法刷线图表"
                // 绘制图表
                chartOpen()
            }, {
            deep: true
        }
        )
        onMounted(() => {
            // 基础数据1
            chartPrepare()
            // 绘制图
            chartOpen()
        });
        return {
            ...toRefs(dataMap),
        }
    }
}
</script>

<!-- <style lang='stylus' scoped>

</style> 1-->

<template>
    <div ref="pie" :id="chartName" style="width: 100%; height: 400px"></div>
</template>

