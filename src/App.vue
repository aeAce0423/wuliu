<script setup>
import { useDeviceWidth } from '@/composables/useDeviceWidth';
const { isMobile } = useDeviceWidth();
</script>


<template>
  <div :class="{'mobile-view': isMobile, 'desktop-view': !isMobile}">
    <router-view></router-view>
  </div>
</template>
