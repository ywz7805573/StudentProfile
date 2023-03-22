<script setup>
import { getCurrentInstance, onMounted } from 'vue';


let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
onMounted(() => {
    var chartDom = document.getElementById('test');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
        }
    ]
    };

    option && myChart.setOption(option);
})


</script>
<template>
    <div ref="test" id="test" style="width: 100%; height: 400px"></div>
</template>