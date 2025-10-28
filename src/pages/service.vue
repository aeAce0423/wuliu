<script setup>
import { useRouter } from "vue-router";
import { onMounted,watch,ref,nextTick } from 'vue';
const route = useRouter();
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';
import Breadcrumb from '@/component/Breadcrumb.vue'
const activeIndex = ref(1);
const serviceVideo = ref(null);
const serviceSrc = ref(new URL('@/assets/style/image/video/service1.png', import.meta.url).href)
const isVideo = ref(true);

const getSrcByIndex = (index) => {
  if (index === 1 || index === 2) {
    return new URL(`../assets/style/image/video/service${index}.png`, import.meta.url).href;
  }
  return new URL(`../assets/style/image/video/service${index}.mp4`, import.meta.url).href;
};

onMounted(() => {
    const footerLogo = document.querySelector('.footer-bottom .logo img')
    if (footerLogo) {
        footerLogo.src = new URL('@/assets/style/image/common/logo-white.png', import.meta.url).href
    }
})

watch(activeIndex, async (newIndex) => {
  const src = getSrcByIndex(newIndex);

  // 判斷是否為影片
  isVideo.value = src.endsWith('.mp4');
  serviceSrc.value = src;

  await nextTick();

  if (isVideo.value && serviceVideo.value) {
    try {
      serviceVideo.value.currentTime = 0;
      serviceVideo.value.load();
      await serviceVideo.value.play();
    } catch (err) {
      console.warn('影片播放錯誤:', err);
    }
  }
});



</script>

<template>
    <Header />
    <div class="container service-page other-page">
        <section>
            <div class="service-info">
                <div class="row">
                    <img class="flow-img" src=".././assets/style/image/common/flow.gif" alt="" />
                    <span>
                        <div class="title">service</div>
                        <div class="subtitle">服務項目</div>
                    </span>
                </div>
                <Breadcrumb />
                <p>Design is our cultural signal to the universe</p>
            </div>
            <div class="service-wrapper">
                <div class="background-video">
                    <transition name="fade" mode="out-in">
                        <video ref="serviceVideo" v-if="isVideo" autoplay muted loop width="100%">
                            <source :key="serviceSrc" :src="serviceSrc" type="video/mp4" />
                        </video>
                        <img v-else :src="serviceSrc" alt="">
                    </transition>
                </div>
                <div class="service-cards">
                    <router-link to="/service" custom v-slot="{ navigate }">
                        <div class="card" @mouseenter="activeIndex = 1" @click="navigate">
                            <div class="card-l">
                                <div class="row">
                                    <div class="title">Branding</div>
                                    <div class="subtitle">品牌建置</div>
                                </div>
                            </div>
                            <div class="card-r">
                                <p>憑藉專業知識、豐富經驗與系統性分析，幫助企業識別並解決核心問題，制定全面的品牌策略計劃。</p>
                                <div class="more-btn">
                                    <div class="text">品牌精選案例</div>
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15"
                                            viewBox="0 0 12 15" fill="none">
                                            <path
                                                d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                                                fill="#B0B0B0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/service" custom v-slot="{ navigate }">
                        <div class="card" @mouseenter="activeIndex = 2" @click="navigate">
                            <div class="card-l">
                                <div class="row">

                                    <div class="title">Design</div>
                                    <div class="subtitle">設計專案</div>
                                </div>
                            </div>
                            <div class="card-r">
                                <p>以深刻洞察為基礎，用視覺傳達品牌理念，延伸至各接觸點，塑造一致且強大的品牌形象。</p>
                                <div class="more-btn">
                                    <div class="text">設計精選案例</div>
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15"
                                            viewBox="0 0 12 15" fill="none">
                                            <path
                                                d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                                                fill="#B0B0B0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/service" custom v-slot="{ navigate }">
                    <div class="card" @mouseenter="activeIndex = 3" @click="navigate">
                        <div class="card-l">
                            <div class="row">

                                <div class="title">Events</div>
                                <div class="subtitle">活動專案</div>
                            </div>
                        </div>
                        <div class="card-r">
                            <p>將設計概念延伸至各個品牌接觸點，讓消費者一眼就能認出您的品牌，繼而創造價值和成長。</p>
                            <div class="more-btn">
                                <div class="text">活動精選案例</div>
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"
                                        fill="none">
                                        <path
                                            d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                                            fill="#B0B0B0" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div></router-link>
                    <router-link to="/service" custom v-slot="{ navigate }">
                        <div class="card" @mouseenter="activeIndex = 4" @click="navigate">
                            <div class="card-l">
                                <div class="row">

                                    <div class="title">Marketing</div>
                                    <div class="subtitle">數位營銷</div>
                                </div>
                            </div>
                            <div class="card-r">
                                <p>從品牌到商品，挖掘獨特賣點，針對不同客群，制定整合行銷策略，幫您用對的方式找到對的人。</p>
                                <div class="more-btn">
                                    <div class="text">行銷精選案例</div>
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15"
                                            viewBox="0 0 12 15" fill="none">
                                            <path
                                                d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                                                fill="#B0B0B0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="process-wrapper">
                <div class="title">process</div>
                <div class="subtitle">服務流程</div>
                <img class="process-pc" src="../assets/style/image/common/process.svg" alt="">
                <img class="process-mob" src="../assets/style/image/common/process-mob.svg" alt="">
            </div>
        </section>
        <Footer />
    </div>
</template>
