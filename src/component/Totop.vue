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
    bottom: 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.gotop {
    margin-bottom: 1rem;
    cursor: pointer;
}

.text {
    font-size: 1rem;
    text-align: center;
    font-style: italic;
    color: #b0b0b0;
}

.icon {
    width: 30px;
    height: 30px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.contact {
    writing-mode: vertical-rl;
    padding: 1.75rem .5rem;
    background-color: #b0b0b0;
    color: #fff;
    border-radius: 5px 0px 0px 5px;
    font-size: .75rem;
}

a {
    text-decoration: unset;
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