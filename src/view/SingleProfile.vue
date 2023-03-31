<script setup>
import Line from '../components/Line.vue'
import Bar from '../components/Bar.vue'
import test from '../components/test.vue'
import radar_3 from '../components/Radar_3.vue'
import radar_10 from '../components/Radar_10.vue'
import line_smooth from '../components/Line_smooth.vue'
import {  ref } from 'vue'

const data_3 = [
  [80,70,60],[70,60,90]
]
const data_10 = [
  [80,70,60,72,88,75,63,92,90,79],[70,60,90,70,80,90,75,81,84,73]
]
const data_ximu = ['细目1','细目2','细目3','细目4','细目5','细目6','细目7','细目8','细目9','细目10']
const chartData_3 = ref(data_3)
const chartData_10 = ref(data_10)
const chartData_line = ref(data_10)
const x_Axis_ximu = ref(data_ximu)
</script>
<template>
  <div>
    <radar_3 :chartData = "chartData_3" :chartName="'radar_3'"></radar_3>
  </div>
  <div>
    <radar_10 :chartData = "chartData_10" :chartName="'radar_10'"></radar_10>
  </div>
  <div>
    <line_smooth :x_Axis="x_Axis_ximu"  :chartData = "chartData_line" :chartName="'line_smooth'"></line_smooth>
  </div>
</template>