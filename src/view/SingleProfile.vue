<script setup>
import Line from '../components/Line.vue'
import Bar from '../components/Bar.vue'

import radar_3 from '../components/Radar_3.vue'
import radar_10 from '../components/Radar_10.vue'
import line_smooth from '../components/Line_smooth.vue'
import sortbar from '../components/SortBar.vue'
import pie from '../components/Pie.vue'
import StuBasicInfo from '../components/StuBasicInfo.vue'
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
  <div style="width: 100%;height: 100vh;">

    <el-row style="height: 8%;">
    <el-col :span="24" style="height: 100%;">
      <div style="height: 100%;" class="grid-content bg-purple">header</div>
    </el-col>

  </el-row>
  <el-row style="height: 92%;">
    <el-col :span="2" style=" width: 20%;height: 100%;">
      <div style="height: 100%;" class="grid-content bg-purple-light">左侧边栏</div>
    </el-col>
    <el-col :span="6" style="height: 100%;">
    <div>
      <StuBasicInfo></StuBasicInfo>
    </div>
  </el-col>
  <el-col :span="8" >
    <div style=" height: 50%;">
      <radar_3 style="height: 100%;" :chartData = "chartData_3" :chartName="'radar_3'" ></radar_3>
    </div>
    <pie style="margin: 50px;" :chartName="'pie'"></pie>
  </el-col>
  <el-col :span="8">
    <div style=" height: 50%;">
    <radar_10  :key="chartData_10.value" :chartData = "chartData_10.value" :chartName="'radar_10'"></radar_10>
  </div>
  <div style=" height: 50%;">
      <radar_3 style="height: 100%;" :chartData = "chartData_3" :chartName="'radar_3'" ></radar_3>
    </div>
  </el-col>
</el-row>
  
  <pie :chartName="'pie'"></pie>
  </div>
  


<el-row style="height: 400px;">
  <el-col :span="12">
    <radar_3  :chartData = "chartData_3" :chartName="'radar_3'"/>
  </el-col>
  <el-col :span="12" >
    <radar_10  :key="chartData_10.value" :chartData = "chartData_10.value" :chartName="'radar_10'"></radar_10>
  </el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
  
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
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

<style>
.el-row {
  /* margin-bottom: 20px; */
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  /* min-height: 36px; */
}
.el-row :last-child {
    /* margin-bottom: 20px; */
     
      margin-bottom: 0;
    
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #408a8d;
  }
  .bg-purple-light {
    background: #31529e;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  html,body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
  /* div{
    max-height: 100%;
  } */
</style>