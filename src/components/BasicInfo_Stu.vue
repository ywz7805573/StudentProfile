<template>
<!--  -->
    <div ref="bar" id="bar" style="width: 100%; height: 400px"></div>
</template>



<script setup>
import * as echarts from 'echarts'
import "echarts"
import { getCurrentInstance, onMounted , reactive, toRefs, onUnmounted, watch} from 'vue';
import { getCurrentInstance, onMounted } from "vue";
//  按需引入 echarts
var student_info ={}
student_info.id = '10000001'
student_info.birth = '2008年10月21日'
student_info.ethics = '汉族'
student_info.gender = '1'
student_info.class = '七年二班'
var school = {}
school.name = '测试中学'
school.type = '0'//公办，私立
school.place = '北京'

student_info.school = school

const props = defineProps( {
})

</script>



<style scoped>
</style>

