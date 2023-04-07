<script setup>
import SingleProfile from './view/SingleProfile.vue';
import StuBasicInfo from './components/StuBasicInfo.vue';
// import xxxprofile
</script>
<template>
<div id="app">
  <div>
    <SingleProfile></SingleProfile>
  </div>
  <div style="width: 50%">
    <StuBasicInfo></StuBasicInfo>
  </div>
</div>
</template>
<style>
html{
    height: 100%;
  }
body{
  height: 100%;
}
  #app{
    height: 100%;
  }
  
</style>