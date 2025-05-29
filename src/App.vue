<script setup lang="ts">
import CourseNav from './components/CourseNav.vue'
</script>

<template>
  <div class="app">
    <CourseNav />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.app {
  min-height: 100vh;
  width: 100vw;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
</style>
