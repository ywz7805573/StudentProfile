<script setup>
import { getCurrentInstance, onMounted } from "vue";
import "echarts"
//  按需引入 echarts
import * as echarts from "echarts";
        let internalInstance = getCurrentInstance();
        // let echarts = internalInstance.appContext.config.globalProperties.$echarts;
        onMounted(() => {
            const dom = document.getElementById('bar');
            const bar = echarts.init(dom);
            const option = {

                
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            }
            bar.setOption(option)
        })
</script>

<template>
  <div ref="bar" id="bar" style="width: 100%; height: 400px"></div>
</template>

<style scoped>
</style>

