<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const showGoTop = ref(false)
// 如果滑動超過300則出現
function handleScroll() {
    showGoTop.value = window.scrollY > 300
}
// 監聽滑動
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

// 滑到頂部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 加入平滑滾動
    })
}
</script>
<style scoped>
.float-right {
    position: fixed;
    right: 0;
    bottom: 20px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.gotop {
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.text {
    text-align: center;
    font-style: italic;
    color: #b0b0b0;
    font-size: 20px;
}

.icon {
    width: 32px;
    height: 43px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.contact {
    writing-mode: vertical-rl;
    color: #fff;
    font-size: 18px;
}

a {
    text-decoration: unset;
    width: 53px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b0b0b0;
    border-radius: 10px 0px 0px 10px;
}
</style>
<template>
    <div class="float-right" v-show="showGoTop">
        <div class="gotop" @click="scrollToTop()">
            <div class="icon"><img src="/src/assets/style/image/common/totop.svg" alt="top"></div>
            <div class="text">TOP</div>
        </div>
        <router-link to="/contact">
            <div class="contact">
                立即預約
            </div>
        </router-link>
    </div>
</template>