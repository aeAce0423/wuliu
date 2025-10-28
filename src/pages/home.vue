<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, nextTick, watch, reactive, computed } from 'vue';
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';

const route = useRouter();
const activeIndex = ref(0);
const serviceSrc = ref('');
const isVideo = ref(true);
const serviceVideo = ref(null);
const listRef = ref(null);
const hoverBgStyle = reactive({
  top: '0px',
  height: '0px',
  opacity: 0
});

const getSrcByIndex = (index) => {
  if (index === 1 || index === 2) {
    return new URL(`../assets/style/image/video/service${index}.png`, import.meta.url).href;
  }
  return new URL(`../assets/style/image/video/service${index}.mp4`, import.meta.url).href;
};

import productUrl1 from '@/assets/style/image/product/product1.png';
import productUrl2 from '@/assets/style/image/product/product2.png';
import productUrl3 from '@/assets/style/image/product/product3.png';
import productUrl4 from '@/assets/style/image/product/product4.png';

const projectData = [
  { name: '商品企劃 | 茶馬司 加大防潑水野餐墊', tags: ['#品牌建置', '#設計專案', '#數位營銷'], imgSrc: productUrl1 },
  { name: '品牌CI建置 | TEAMARS茶馬司訪山茶店', tags: ['#品牌建置', '#設計專案', '#數位營銷'], imgSrc: productUrl2 },
  { name: '商品企劃 | Ms.祕食 X 茶馬司限量星月中秋禮盒', tags: ['#品牌建置', '#設計專案', '#數位營銷'], imgSrc: productUrl3 },
  { name: '活動規劃 | 茶馬司 七夕情人節活動', tags: ['#品牌建置', '#設計專案', '#數位營銷'], imgSrc: productUrl4 }
]

const handleMouseEnter = function (index) {
  projectIndex.value = index
  nextTick(() => {
    const list = listRef.value;
    if (!list) return;

    const li = list.querySelectorAll('li')[index];
    if (!li) return;

    const { offsetTop, offsetHeight } = li;

    hoverBgStyle.top = `${offsetTop}px`;
    hoverBgStyle.height = `${offsetHeight}px`;
    hoverBgStyle.opacity = 1;
  });
}
const projectIndex = ref(0)
const imageHeight = 700 // 圖片固定高度（px）

const imgListStyle = computed(() => ({
  transform: `translateY(-${projectIndex.value * imageHeight}px)`
}))


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
  <section id="intro">
    <!-- <Header /> -->
    <video class="intro-video" autoplay muted loop width="100%">
      <source src=".././assets/style/image/video/banner.mp4" type="video/mp4" />
    </video>
    <div class="intro-text">
      <h1>bringing nostalgia and creativity to the next level.</h1>
    </div>
    <a href="#info" class="scroll">
      <img src=".././assets/style/image/index/intro-scoll.svg" alt="" />
      <h4>Scroll</h4>
    </a>
  </section>
  <div class="container">
    <section id="info">
      <div class="background-deco">
        <div class="planet"></div>
        <div class="planet2"></div>
      </div>
      <div class="content">
        <div class="title">Core Philosophy</div>
        <h1>來自五六年級生的</h1>
        <h1>
          <img class="flow-rotate" src=".././assets/style/image/common/flow-horizontal.gif" alt="" />黃金世代
        </h1>
        <h1>
          情懷與創意<img class="info-dance" src=".././assets/style/image/index/info-dance.gif" alt="" />玩到極致!
        </h1>
        <p>
          From the golden generation<br />
          of the 50s and 60s,<br />
          bringing nostalgia and<br />
          creativity to the next level!
        </p>
      </div>
    </section>
    <section id="project">
      <div class="subject">
        <div class="title">Projects</div>
        <div class="subtitle">精選案例</div>
      </div>
      <div class="content">
        <div class="project-img-wrap">
          <div class="project-img-list" :style="imgListStyle">
            <img v-for="(item, index) in projectData" :key="index" :src="item.imgSrc" :alt="item.name"
              class="project-img" />
          </div>
        </div>
        <div class="content-r">
          <ul class="project-list" ref="listRef">
            <!-- 共用背景層 -->
            <div class="hover-bg" :style="hoverBgStyle"></div>
            <router-link to="/projects">
              <li v-for="(item, index) in projectData" :key="index" class="hover-item"
                @mouseenter="handleMouseEnter(index)">
                <div class="project-item">
                  <div class="tags">
                    <span v-for="tag in item.tags" class="tag">{{ tag }}</span>
                  </div>
                  <div class="name">{{ item.name }}</div>
                </div>
                <div class="entry"></div>
              </li>
            </router-link>
          </ul>
          <router-link to="/projects">
            <div class="more-btn">
              <div class="text">ALL Projects</div>
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                  <path
                    d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                    fill="#B0B0B0" />
                </svg>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section id="service">
      <div class="section-top">
        <div class="background-video">
          <transition name="fade" mode="out-in">
            <video ref="serviceVideo" v-if="isVideo" autoplay muted loop width="100%">
              <source :key="serviceSrc" :src="serviceSrc" type="video/mp4" />
            </video>
            <img v-else :src="serviceSrc" alt="">
          </transition>
        </div>
        <div class="services">
          <div class="service-wrapper">
            <div class="service-card title-card" @mouseenter="activeIndex = 0">
              <div class="service-content">
                <div class="service-title">Services</div>
                <div class="service-subtitle">服務內容</div>
              </div>
            </div>
            <router-link to="/service" custom v-slot="{ navigate }">
              <div class="service-card" @mouseenter="activeIndex = 1" @click="navigate">
                <div class="service-content">
                  <div class="service-title">Branding</div>
                  <div class="service-subtitle">品牌建置</div>
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                      <path d="M2 2L12 11L2 20" stroke="#FFDE0A" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </router-link>
            <router-link to="/service" custom v-slot="{ navigate }">
              <div class="service-card" @mouseenter="activeIndex = 2" @click="navigate">
                <div class="service-content">
                  <div class="service-title">Design</div>
                  <div class="service-subtitle">設計專案</div>
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                      <path d="M2 2L12 11L2 20" stroke="#FFDE0A" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </router-link>
            <router-link to="/service" custom v-slot="{ navigate }">
              <div class="service-card" @mouseenter="activeIndex = 3" @click="navigate">
                <div class="service-content">
                  <div class="service-title">Events</div>
                  <div class="service-subtitle">活動專案</div>
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                      <path d="M2 2L12 11L2 20" stroke="#FFDE0A" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </router-link>
            <router-link to="/service" custom v-slot="{ navigate }">
              <div class="service-card" @mouseenter="activeIndex = 4" @click="navigate">
                <div class="service-content">
                  <div class="service-title">Marketing</div>
                  <div class="service-subtitle">數位營銷</div>
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                      <path d="M2 2L12 11L2 20" stroke="#FFDE0A" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="section-bottom">
        <router-link to="/service">
          <div class="more-btn">
            <div class="text">ALL Services</div>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                <path
                  d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                  fill="#B0B0B0" />
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </section>
    <section id="news">
      <div class="row">
        <div class="title">News</div>
        <div class="subtitle">最新消息</div>
      </div>
      <div class="newslist">
        <router-link to="/media" custom v-slot="{ navigate }">
          <div class="new-item" @click="navigate">
            <div class="pic">
              <img src=".././assets/style/image/news/news1.jpg" alt="" />
            </div>
            <h5>2024–12–31 | 媒體專訪</h5>
            <h3>茶馬司｜來自南投華岡春茶〈聽雨〉</h3>
            <p>
              生長於雲霧繚繞的高山茶區，茶葉緩慢成熟，帶出清透茶香與細緻層次。茶湯甘醇順滑，香氣沉穩不張揚。喉間回甘綿延，帶有山林氣息與高山清甜。
            </p>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                <g clip-path="url(#clip0_6553_554)">
                  <path
                    d="M9.52527 6.65075C10.0973 7.07964 10.0973 7.91985 9.52527 8.34875L2.52857 13.5949C1.80524 14.1373 0.757568 13.635 0.757568 12.7459V2.25358C0.757568 1.36446 1.80524 0.862218 2.52857 1.40457L9.52527 6.65075Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_6553_554">
                    <rect width="11" height="15" fill="white" transform="translate(0.100098)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </router-link>
        <div class="separator"></div>
        <router-link to="/media" custom v-slot="{ navigate }">
          <div class="new-item" @click="navigate">
            <div class="pic">
              <img src=".././assets/style/image/news/news2.png" alt="" />
            </div>
            <h5>2024–12–31 | 媒體專訪</h5>
            <h3>茶馬司｜獨家「鳳梨酥禮盒」現正優惠中</h3>
            <p>
              台灣伴手禮第一名「鳳梨酥」嚴選台灣頂級土鳳梨，酸甜之間拿捏得恰到好處一塊旺來，配上一口茶馬司高山茶。久久無法忘懷的絕品好滋味，這就是老師傅用心用情的獨特風味。
            </p>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                <g clip-path="url(#clip0_6553_554)">
                  <path
                    d="M9.52527 6.65075C10.0973 7.07964 10.0973 7.91985 9.52527 8.34875L2.52857 13.5949C1.80524 14.1373 0.757568 13.635 0.757568 12.7459V2.25358C0.757568 1.36446 1.80524 0.862218 2.52857 1.40457L9.52527 6.65075Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_6553_554">
                    <rect width="11" height="15" fill="white" transform="translate(0.100098)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </router-link>
        <div class="separator"></div>
        <router-link to="/media" custom v-slot="{ navigate }">
          <div class="new-item" @click="navigate">
            <div class="pic">
              <img src=".././assets/style/image/news/news3.jpg" alt="" />
            </div>
            <h5>2024–12–31 | 影音專區</h5>
            <h3>茶馬司｜𝑰𝑫𝑨 國際設計金獎</h3>
            <p>
              茶馬司的設計靈感，來自千年前的「茶馬貿易」將過去和未來的茶歷史元素融入其空間，在新中式茶館開啟不同的五感旅程。
            </p>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                <g clip-path="url(#clip0_6553_554)">
                  <path
                    d="M9.52527 6.65075C10.0973 7.07964 10.0973 7.91985 9.52527 8.34875L2.52857 13.5949C1.80524 14.1373 0.757568 13.635 0.757568 12.7459V2.25358C0.757568 1.36446 1.80524 0.862218 2.52857 1.40457L9.52527 6.65075Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_6553_554">
                    <rect width="11" height="15" fill="white" transform="translate(0.100098)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </router-link>
      </div>
      <div class="more-btn">
        <div class="text">ALL News</div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
            <path
              d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
              fill="#B0B0B0" />
          </svg>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
