<script setup>
import { useRouter } from "vue-router";
import { ref, nextTick, computed,reactive } from 'vue';
import Header from '../../component/Header.vue';
import Footer from '../../component/Footer.vue';
const route = useRouter();
const listRef = ref(null);
const hoverBgStyle = reactive({
  top: '0px',
  height: '0px',
  opacity: 0
});
const projectData = [
    { name: '商品企劃 | 茶馬司 加大防潑水野餐墊', tags: ['#品牌建置', '#設計專案', '#數位營銷'], imgSrc: '../src/assets/style/image/product/product1.png' },
    { name: '品牌CI建置 | TEAMARS茶馬司訪山茶店', tags: ['#品牌建置', '#設計專案', '#數位營銷'], imgSrc: '../src/assets/style/image/product/product2.png' },
    { name: '商品企劃 | Ms.祕食 X 茶馬司限量星月中秋禮盒', tags: ['#品牌建置', '#設計專案', '#數位營銷'], imgSrc: '../src/assets/style/image/product/product3.png' },
    { name: '活動規劃 | 茶馬司 七夕情人節活動', tags: ['#品牌建置', '#設計專案', '#數位營銷'], imgSrc: '../src/assets/style/image/product/product4.png' }
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
const imageHeight = 400 // 圖片固定高度（px）

const imgListStyle = computed(() => ({
    transform: `translateY(-${projectIndex.value * imageHeight}px)`
}))
</script>

<template>
    <Header />
    <div class="container detail-page other-page">
        <div class="banner">
            <img src="../../assets/style/image/projects/detail/bannera.png" alt="">
        </div>
        <section>
            <div class="row">
                <div class="bread-crumbs">
                    <span>首頁 </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path opacity="0.3"
                            d="M4.74675 11.4801C4.34986 11.1275 4.35095 10.5071 4.74908 10.1559L7.4774 7.7491C7.92837 7.35128 7.92875 6.64828 7.47822 6.24998L4.748 3.83628C4.35077 3.4851 4.3511 2.86528 4.74872 2.51453C5.08199 2.22053 5.58198 2.22053 5.91525 2.51453L10.1499 6.25008C10.6012 6.64819 10.6012 7.35181 10.1499 7.74992L5.91903 11.4821C5.58389 11.7778 5.08085 11.7769 4.74675 11.4801Z"
                            fill="#323333" />
                    </svg>
                    <span> 案例介紹</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path opacity="0.3"
                            d="M4.74675 11.4801C4.34986 11.1275 4.35095 10.5071 4.74908 10.1559L7.4774 7.7491C7.92837 7.35128 7.92875 6.64828 7.47822 6.24998L4.748 3.83628C4.35077 3.4851 4.3511 2.86528 4.74872 2.51453C5.08199 2.22053 5.58198 2.22053 5.91525 2.51453L10.1499 6.25008C10.6012 6.64819 10.6012 7.35181 10.1499 7.74992L5.91903 11.4821C5.58389 11.7778 5.08085 11.7769 4.74675 11.4801Z"
                            fill="#323333" />
                    </svg>
                    <span> TEAMARS茶馬司訪山茶店品牌CI建置</span>
                </div>
                <div class="nav-app"></div>
            </div>
            <hr>
            <div class="detail-wrapper">
                <div class="title">品牌CI建置｜TEAMARS茶馬司訪山茶店</div>
                <div class="tags">
                    <span class="dot"></span>#品牌建置 #設計專案 #數位營銷
                </div>
                <ul>
                    <li>茶—香縈繞古道藏</li>
                    <li>馬—啼嘶鳴時光往</li>
                    <li>司—掌交通文化茂</li>
                    <li>文—明交匯風華長</li>
                    <li>化—新時代詩舞揚</li>
                </ul>
                <p>茶馬司的靈感源於中國古代運送茶、馬、鹽商品進行貿易交換。 TEAMARS茶馬司，茶馬司以歷史為根基，喚醒歷史深處的茶香 與記憶。 ”融合過去、現在和未來” 將美好體驗傳遞每一位消費 者全新感官。</p>
                <p>過去承載歷史，現在是希望，未來體現過去與未來的橋樑，每個階段擁有屬於其特有的符號，以時光交織，回歸茶文化的原點， 從茶葉與馬到星球呈現，重塑茶文化，強調茶與心靈的多樣化體驗，打造出感性全面的茶馬司品牌。
                </p>
                <div class="detail-photo">
                    <img src="../../assets/style/image/projects/detail/projecta1.png" alt="">
                    <img src="../../assets/style/image/projects/detail/projecta2.png" alt="">
                    <img src="../../assets/style/image/projects/detail/projecta3.png" alt="">
                    <img src="../../assets/style/image/projects/detail/projecta4.png" alt="">
                    <video controls src="../../assets/style/image/video/service4.mp4"></video>
                </div>
            </div>
        </section>
        <section id="project">
            <div class="subject">
                <div class="title">Others</div>
                <div class="subtitle">更多案例</div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"
                                    fill="none">
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
        <section id="news">
            <div class="title">News</div>
            <div class="subtitle">最新消息</div>
            <div class="newslist">
                <router-link to="/media" custom v-slot="{ navigate }">
                    <div class="new-item" @click="navigate">
                        <div class="pic">
                            <img src="../../assets/style/image/news/news1.jpg" alt="" />
                        </div>
                        <h5>2024–12–31 | 媒體專訪</h5>
                        <h3>茶馬司｜來自南投華岡春茶〈聽雨〉</h3>
                        <p>
                            生長於雲霧繚繞的高山茶區，茶葉緩慢成熟，帶出清透茶香與細緻層次。茶湯甘醇順滑，香氣沉穩不張揚。喉間回甘綿延，帶有山林氣息與高山清甜。
                        </p>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"
                                fill="none">
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
                            <img src="../../assets/style/image/news/news2.png" alt="" />
                        </div>
                        <h5>2024–12–31 | 媒體專訪</h5>
                        <h3>茶馬司｜獨家「鳳梨酥禮盒」現正優惠中</h3>
                        <p>
                            台灣伴手禮第一名「鳳梨酥」嚴選台灣頂級土鳳梨，酸甜之間拿捏得恰到好處一塊旺來，配上一口茶馬司高山茶。久久無法忘懷的絕品好滋味，這就是老師傅用心用情的獨特風味。
                        </p>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"
                                fill="none">
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
                            <img src="../../assets/style/image/news/news3.jpg" alt="" />
                        </div>
                        <h5>2024–12–31 | 影音專區</h5>
                        <h3>茶馬司｜𝑰𝑫𝑨 國際設計金獎</h3>
                        <p>
                            茶馬司的設計靈感，來自千年前的「茶馬貿易」將過去和未來的茶歷史元素融入其空間，在新中式茶館開啟不同的五感旅程。
                        </p>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"
                                fill="none">
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
