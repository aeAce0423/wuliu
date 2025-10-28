<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Totop from '../component/Totop.vue'
import logo from '../../src/assets/style/image/common/logoa.png'
import logoGray from '../../src/assets/style/image/common/logog.png'

// === 狀態 ===
const isOpen = ref(false)
const hoveredIndex = ref(null)
const logoSrc = ref(logo) // 預設為白色 logo

// === 導覽列資料 ===
const navItems = [
  { label: 'About', link: '/about', name: '關於五六', num: '01' },
  { label: 'Projects', link: '/projects', name: '案例分享', num: '02' },
  { label: 'Service', link: '/service', name: '服務流程', num: '03' },
  { label: 'News', link: '/media', name: '媒體報導', num: '04' },
  { label: 'Blog', link: '/blog', name: '五六觀點', num: '05' },
  { label: 'Contact', link: '/contact', name: '聯絡五六', num: '06' },
  { label: 'Terms', link: '/terms', name: '法律條款', num: '07' }
]

// === DOM 參考 ===
let header = null
let video = null

// === 漸層 & Logo 更新函式 ===
const updateHeaderGradient = () => {
  if (!header || !video) return

  // 若為 active 狀態 → 固定白色
  if (header.classList.contains('active')) {
    const color = `rgb(50, 51, 51)`
    header.style.setProperty('--gradient-start', color)
    header.style.setProperty('--gradient-middle', color)
    header.style.setProperty('--gradient-end', color)
    logoSrc.value = logoGray  // 設置為灰色logo
    return
  }

  // 計算滾動進度
  const scrollY = window.scrollY
  const videoHeight = video.offsetHeight
  const progress = Math.min(scrollY / videoHeight, 1)

  // 白色 (#ffffff) -> 深灰 (#323333)
  const startRGB = [255, 255, 255]
  const endRGB = [50, 51, 51]

  const r = Math.round(startRGB[0] + (endRGB[0] - startRGB[0]) * progress)
  const g = Math.round(startRGB[1] + (endRGB[1] - startRGB[1]) * progress)
  const b = Math.round(startRGB[2] + (endRGB[2] - startRGB[2]) * progress)

  const color = `rgb(${r}, ${g}, ${b})`

  // 更新 CSS 變數
  header.style.setProperty('--gradient-start', color)
  header.style.setProperty('--gradient-middle', color)
  header.style.setProperty('--gradient-end', color)

  // 根據滾動進度切換 logo
  if (progress < 0.5) {
    logoSrc.value = logo // 更新為白色logo
  } else {
    logoSrc.value = logoGray // 更新為灰色logo
  }
}

// === 切換選單 ===
const toggleMenu = () => {
  isOpen.value = !isOpen.value
  // 點擊開關時即時更新漸層
  updateHeaderGradient()
}

// === 生命周期 ===
onMounted(() => {
  updateHeaderGradient()
  header = document.querySelector('.header')
  video = document.querySelector('.intro-video')

  if (!video) {
    const color = `rgb(50, 51, 51)`
    header.style.setProperty('--gradient-start', color)
    header.style.setProperty('--gradient-middle', color)
    header.style.setProperty('--gradient-end', color)
    logoSrc.value = logoGray  // 設置為灰色logo
    return
  }

  window.addEventListener('scroll', updateHeaderGradient)
  updateHeaderGradient()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderGradient)
})

// === 監聽 active 狀態 ===
watch(isOpen, (newVal) => {
  if (header) {
    if (newVal) header.classList.add('active')
    else header.classList.remove('active')
  }
  updateHeaderGradient()
})
</script>

<template>
  <Totop />
  <section class="header" :class="{ active: isOpen }" @click="toggleMenu">
    <router-link to="/home" custom v-slot="{ navigate }">
      <div class="logo" @click="navigate">
        <img :src="logoSrc" alt="Wuliu Logo" />
      </div>
    </router-link>
    <div class="nav-bar"></div>
    <div class="nav-contact">
      <div class="text">follow us</div>
      <div class="nav-app">
        <div class="line icon"></div>
        <div class="instagram icon"></div>
        <div class="facebook icon"></div>
      </div>
    </div>
  </section>

  <section class="header-mob" :class="{ active: isOpen }" @click="toggleMenu">
    <div class="logo">
      <img src="../../src/assets/style/image/index/footerlogo.png" alt="" />
    </div>
    <div class="nav-bar"></div>
  </section>

  <!-- 滑出內容區塊 -->
  <transition name="slide">
    <div v-if="isOpen" class="nav-sidebar container">
      <ul class="nav-list">
        <li v-for="(item, index) in navItems" :key="index" @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null" :class="{
            active: hoveredIndex === index,
            faded: hoveredIndex !== null && hoveredIndex !== index
          }">
          <router-link :to="item.link"><span class="nav-num">{{ item.num }}</span>{{ item.label }}<span class="name">{{
            item.name }}</span></router-link>
        </li>
      </ul>
      <div class="nav-content">
        <video autoplay muted loop playsinline>
          <source src=".././assets/style/image/video/footer.mp4" type="video/mp4" />
        </video>
        <ul>
          <div class="nav-text">what we do</div>
          <li>branding</li>
          <li>design</li>
          <li>events</li>
          <li>marketing</li>
        </ul>
        <p>copyright@2024 Wuliu Culture And Creative . <br />
          All Rights Reserved.
        </p>
      </div>
    </div>
  </transition>
</template>