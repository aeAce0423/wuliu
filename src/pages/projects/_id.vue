<!-- src/pages/projects/_id.vue -->
<template>
  <div>
    <h1>專案詳情頁</h1>
    <p>你正在查看的專案 ID 是：<strong>{{ id }}</strong></p>
    <router-link to="/projects">← 回到專案清單</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>