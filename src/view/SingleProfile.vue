<script setup>
import Line from '../components/Line.vue'
import Bar from '../components/Bar.vue'
import test from '../components/test.vue'
import radar from '../components/radar.vue'
import {  ref } from 'vue'

  const Radardata =[
        {
            value: [80, 70, 60],
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
            }
        },
        {
            value: [70, 60, 90],
            name: '平均水平',
            areaStyle: {
                color: '#EC70C0',
                opacity: 0.1
            }
        }
    ]
  const chartData = ref(Radardata)

</script>
<template>
  <div>
    <radar :chartData = "chartData" :chartName="'radar'"></radar>
  </div>
</template>