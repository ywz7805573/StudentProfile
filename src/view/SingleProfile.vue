<script setup>
import Line from '../components/Line.vue'
import Bar from '../components/Bar.vue'

import radar_3 from '../components/Radar_3.vue'
import radar_10 from '../components/Radar_10.vue'
import line_smooth from '../components/Line_smooth.vue'
import {  onMounted, reactive, ref } from 'vue'

var a = 80

var data_3 = [
  [80,70,60],[70,60,90]
]

var data_10 = [
  [80,70,60,72,88,75,63,92,90,79],[70,60,90,70,80,90,75,81,84,a]
]
let data_ximu = ['细目1','细目2','细目3','细目4','细目5','细目6','细目7','细目8','细目9','细目10']
let chartData_3 = ref(data_3)
let chartData_10 = reactive({
  value : data_10
})
let chartData_line = reactive({
  value : data_10
})

let x_Axis_ximu = ref(data_ximu)
var that = this
function test(){
  a = a + 1
  data_10 = [
    [80,70,60,72,88,75,63,92,90,79],[70,60,90,70,80,90,75,81,84,a]
  ]
  // chartData_line = ref(data_10)
  chartData_line.value = data_10
  chartData_10.value = data_10

};


</script>
<template>
  <div>
    <radar_3 :chartData = "chartData_3" :chartName="'radar_3'"></radar_3>
  </div>
  <div>
    <radar_10 :key="a" :chartData = "chartData_10.value" :chartName="'radar_10'"></radar_10>
  </div>
  <div>
    <line_smooth :key="a" :x_Axis="x_Axis_ximu"  :chartData = "chartData_line.value" :chartName="'line_smooth'"></line_smooth>
  </div>
  <button @click="test"></button>
</template>