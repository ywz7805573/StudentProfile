<template>
<!--  -->
<table>
			<thead>
				<tr>
					<th>基本信息</th>
					<th>家庭信息</th>
					<th>学校信息</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>姓名: {{ student.name }}</td>
					<td>家庭收入（年）: {{ student.familyIncome }}</td>
					<td>学校名称: {{ student.schoolName }}</td>
				</tr>
				<tr>
					<td>性别: {{ student.gender }}</td>
					<td>家庭信息化环境情况: {{ student.familyIT }}</td>
					<td>学校类型: {{ student.schoolType }}</td>
				</tr>
				<tr>
					<td>是否为住校生: {{ student.isDormitory }}</td>
					<td>父亲最高学历: {{ student.fatherEducation }}</td>
					<td>学校规模: {{ student.schoolSize }}</td>
				</tr>
				<tr>
					<td>平时在家一般陪伴人: {{ student.familyMember }}</td>
					<td>母亲最高学历: {{ student.motherEducation }}</td>
					<td>学校所在地: {{ student.schoolLocation }}</td>
				</tr>
				<tr>
					<td>与父母的关系: {{ student.relationship }}</td>
					<td>家庭语言环境: {{ student.familyLanguage }}</td>
					<td>学生所在年级: {{ student.grade }}</td>
				</tr>
				<tr>
					<td>是否独生子女: {{ student.isOnlyChild }}</td>
					<td></td>
					<td>学校是否乡村: {{ student.isRural }}</td>
				</tr>
				<tr>
					<td>担任班干部职务: {{ student.classPosition }}</td>
					<td></td>
					<td>学校性质: {{ student.schoolNature }}</td>
				</tr>
				<tr>
					<td>参加社团: {{ student.club }}</td>
					<td></td>
					<td>是否重点学校: {{ student.isKeySchool }}</td>
				</tr>
				<tr>
					<td>参加课外班数量: {{ student.outOfClassCount }}</td>
					<td></td>
					<td>学校学制: {{ student.schoolSystem }}</td>
				</tr>
				<tr>
					<td>参加社会实践次数: {{ student.socialPracticeCount }}</td>
					<td></td>
					<td>学校班额: {{ student.classSize }}</td>
				</tr>
				<tr>
					<td>参加志愿活动次数: {{ student.volunteerCount }}</td>
					<td></td>
					<td>举办创新实践活动次数: {{ student.schoolInnovation }}</td>
				</tr>
				<tr>
					<td>外出学习交流情况: {{ student.studyAbroad }}</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>每天体育锻炼时长: {{ student.dailyExerciseTime }}</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>参加创新实践活动次数: {{ student.innovationCount }}</td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
</template>



<script setup>
import * as echarts from 'echarts'
import "echarts"
import { getCurrentInstance, onMounted , reactive, toRefs, onUnmounted, watch} from 'vue';

//  按需引入 echarts
var student ={
    name: "张三",
    gender: "男",
    isDormitory: "是",
    familyMember: "父亲",
    relationship: "和睦",
    isOnlyChild: "是",
    classPosition: "班长",
    club: "篮球社",
    outOfClassCount: 2,
    socialPracticeCount: 3,
    volunteerCount: 4,
    studyAbroad: "无",
    dailyExerciseTime: "1小时",
    innovationCount: 5,
    familyLocation: "北京",
    familyIncome: "30万",
    familyIT: "高",
    fatherEducation: "本科",
    motherEducation: "硕士",
    familyLanguage: "普通话",
    schoolName: "清华大学附属中学",
    schoolType: "高中",
    schoolSize: "1000人",
    schoolLocation: "北京",
    grade: "高三",
    isRural: "否",
    schoolNature: "公立",
    isKeySchool: "是",
    schoolSystem: "三年制",
    classSize: "45人",
    schoolInnovation: 6,
}


const props = defineProps( {
})


</script>



<style scoped>
body {
			font-family: Arial, sans-serif;
			margin: 0;
			padding: 0;
			background-color: #f2f2f2;
		}
		h1 {
			text-align: center;
			margin-top: 50px;
		}
		table {
			margin: 50px auto;
			border-collapse: collapse;
			border: 1px solid #ccc;
			width: 50%;
			background-color: #fff;
		}
		td, th {
			padding: 10px;
			border: 1px solid #ccc;
			text-align: left;
		}
		th {
			background-color: #f2f2f2;
		}
</style>

