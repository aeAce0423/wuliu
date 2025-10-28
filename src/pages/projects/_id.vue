
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '../../component/Breadcrumb.vue'
import projects from '@/data/projects.json'

// 匯入不同專案內容組件
import Project1 from './components/Project1.vue'
import Project2 from './components/Project2.vue'
import DefaultProjectContent from './components/DefaultProjectContent.vue'

const route = useRoute()

// 對照表：id → 組件
const componentsMap = {
  '1': Project1,
  '2': Project2,
}

// 目前的專案 id
const id = computed(() => route.params.id)

// 動態決定顯示的組件
const CurrentProject = computed(() => componentsMap[id.value] || DefaultProjectContent)

// 找出目前專案資料
const project = computed(() => projects.find(p => p.id === id.value))
</script>

<template>
  <component :is="CurrentProject" />
</template>

<style scoped>
.project-page {
  padding: 1.5rem;
}
.project-title {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
}
</style>
