<template>
  <div
      class="block bg-white shadow-md  relative"
  >
    <a :href="'//www.chinaooc.com.cn/course/' + course.courseID"
       target="_blank"
       @click.stop="() => {}"
       class="absolute right-2 top-2 hover:underline bg-white bg-opacity-50 z-10 text-xs px-2 rounded"
    >
      查看课程
    </a>
    <!-- 课程卡片图 -->
    <div
        class="block w-full overflow-hidden image-16by9 text-center bg-gray-100 cursor-pointer group"
        @click="$emit('edit')"
        :style="{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(' + course.pictureUrl + ')'
      }">
      <div class="group-hover:block hidden absolute-center
hover:underline bg-white bg-opacity-90 z-10 p-2 rounded">
        更换
      </div>
    </div>

    <!-- 课程卡片信息 -->
    <div class="p-4 relative">
      <div class="text-lg whitespace-nowrap overflow-hidden overflow-ellipsis
hover:underline cursor-pointer"
           @click.stop="changeField(course, 'name', '修改课程名称')">
        {{ course.name }}
      </div>
      <div v-if="course.national"
           class="absolute right-0 -top-6 h-5 flex rounded-l-md flex-shrink-0 items-center px-2 text-xs bg-yellow-500 text-white">
        一流课程
      </div>
      <p class="mt-1 text-xs text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis"
         @click.stop="changeField(course, 'platform', '修改课程平台')">
        {{ course.platform }}
      </p>
      <p class="text-xs text-gray-500 opacity-50 whitespace-nowrap overflow-hidden overflow-ellipsis">
        <span class="hover:underline cursor-pointer"
              @click.stop="changeField(course.teacherFirst, 'schoolName', '修改学校')">
          {{ schoolName }}
        </span>
        <span class="ml-1 hover:underline cursor-pointer"
              @click.stop="changeField(course.teacherFirst, 'teacherName', '修改教师')"
        >{{ teacherName }}</span>
      </p>
      <p class="mt-1 text-xs text-gray-500 font-number whitespace-nowrap overflow-hidden overflow-ellipsis
                hover:underline cursor-pointer"
         @click.stop="changeField(course, 'totalEnroll', '修改累计选课人数')">
        累计选课 {{ course.totalEnroll }}人次
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    course: {type: Object, required: true},
  },
  data() {
    return {
      defaultImg: '',
    }
  },
  computed: {
    teacherName() {
      return this.course.teacherFirst.teacherName
    },
    schoolName() {
      return this.course.teacherFirst.schoolName
    },
  },
  methods: {
    changeField(parent: any, key: string, name: string) {
      this.$prompt(name, '提示', {
        inputValue: parent[key],
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({value}) => {
        parent[key] = value || parent[key]
      }).catch(() => {

      })
    },
  },
})
</script>
