<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import carousel1 from '@/assets/style/image/about/carousel1.png'
import carousel2 from '@/assets/style/image/about/carousel2.gif'
import carousel3 from '@/assets/style/image/about/carousel3.gif'
import carousel4 from '@/assets/style/image/about/carousel4.png'
import carousel5 from '@/assets/style/image/about/carousel5.gif'
import carousel6 from '@/assets/style/image/about/carousel6.png'
import carousel7 from '@/assets/style/image/about/carousel7.png'

const baseImages = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7
]

// ✅ 重複一份讓內容長度加倍
const images = [...baseImages, ...baseImages]

function getSlideClass(index) {
  const n = index % 4
  switch (n) {
    case 0: return 'size-1'
    case 1: return 'size-2'
    case 2: return 'size-3'
    case 3: return 'size-4'
  }
}
</script>

<template>
  <Swiper
    :modules="[Autoplay, FreeMode]"
    :slides-per-view="'auto'"
    :space-between="20"
    :speed="5000" 
    :autoplay="{
      delay: 0,               // 無間隔連續播放
      disableOnInteraction: false
    }"
    :free-mode="{
      enabled: true,
      momentum: false
    }"
    class="custom-carousel"
    grab-cursor
    loop="false" 
  >
    <SwiperSlide
      v-for="(img, index) in images"
      :key="index"
      :class="getSlideClass(index)"
    >
      <img :src="img" alt="carousel image" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.custom-carousel {
  width: 100%;
  padding: 1rem 0;
  overflow: hidden;
}

.swiper-slide {
  border-radius: 15px;
  overflow: hidden;
  flex-shrink: 0;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 15px;
}

.custom-carousel ::v-deep(.swiper-wrapper) {
  align-items: flex-end !important;
  transition-timing-function: linear !important;
}

.size-1 { max-width: 243px; aspect-ratio: 293 / 326; }
.size-2 { max-width: 330px; aspect-ratio: 380 / 255; }
.size-3 { max-width: 243px; aspect-ratio: 293 / 225; }
.size-4 { max-width: 331px; aspect-ratio: 381 / 294; }
</style>
