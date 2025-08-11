import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useDeviceWidth() {
  const isMobile = ref(window.innerWidth <= 768); // 初始判斷設備寬度

  const checkDeviceWidth = () => {
    isMobile.value = window.innerWidth <= 768; // 假設 768px 以下為手機版
  };

  onMounted(() => {
    checkDeviceWidth();
    window.addEventListener('resize', checkDeviceWidth); // 監聽視窗大小變化
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkDeviceWidth); // 組件銷毀時清理事件監聽
  });

  return { isMobile }; // 返回 isMobile 用於其他組件
}