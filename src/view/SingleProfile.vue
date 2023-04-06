<script setup>
import Line from '../components/Line.vue'
import Bar from '../components/Bar.vue'

import radar_3 from '../components/Radar_3.vue'
import radar_10 from '../components/Radar_10.vue'
import line_smooth from '../components/Line_smooth.vue'
import sortbar from '../components/SortBar.vue'
import {  onMounted, reactive, ref } from 'vue'
import axios from 'axios'

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
let dimensions_sortbar = reactive({
  value: []
})
let chartData_sortbar = reactive({
  value : []
})
let dimensions_ximu = ref(data_ximu)
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
var id
var sortbar_show = false
async function getdataByID(){
  id = '10000001'
  var data = []
  await axios.get('http://localhost:3000/api/sysuser/getdataByID',{
    params:{
      id : id
    }
  })
  .then(response => {
    console.log(response)
    data = response.data
    // console.log(data[100])
    for (let item in data[0]){
  console.log(item)
  let list = []
  dimensions_sortbar.value.push(item)
  list.push(item)
  list.push(data[0][item])
  chartData_sortbar.value.push(list)
    }
  })
  console.log('sortbar')
  sortbar_show = true
}
console.log(chartData_sortbar.value)
onMounted(() => {
  getdataByID()
})


</script>
<template>
  <div style="height: 600px;width: 800px;">
    <radar_3 :chartData = "chartData_3" :chartName="'radar_3'"></radar_3>
  </div>
  <div style="height: 600px;width: 800px;">
    <radar_10  :key="chartData_10.value" :chartData = "chartData_10.value" :chartName="'radar_10'"></radar_10>
  </div>
  <div>
    <line_smooth :key="chartData_line.value" :dimensions="dimensions_ximu"  :chartData = "chartData_line.value" :chartName="'line_smooth'"></line_smooth>
  </div>
  <div :v-if="sortbar_show">
    <sortbar  :key="chartData_sortbar.value"   :chartData = "chartData_sortbar.value" :chartName="'sortbar'"></sortbar>
  </div>
  <!-- <button>asd</button> -->
  <button @click="test">aaa</button>
</template>