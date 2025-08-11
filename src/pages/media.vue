<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';
</script>

<template>
    <Header />
    <div class="container media-page other-page">
        <section>
            <div class="row">
                <img class="flow-img" src=".././assets/style/image/common/flow.gif" alt="" />
                <span>
                    <div class="title">Media</div>
                    <div class="subtitle">媒體報導</div>
                </span>
            </div>
            <div class="bread-crumbs">
                <span>首頁 </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path opacity="0.3"
                        d="M4.74675 11.4801C4.34986 11.1275 4.35095 10.5071 4.74908 10.1559L7.4774 7.7491C7.92837 7.35128 7.92875 6.64828 7.47822 6.24998L4.748 3.83628C4.35077 3.4851 4.3511 2.86528 4.74872 2.51453C5.08199 2.22053 5.58198 2.22053 5.91525 2.51453L10.1499 6.25008C10.6012 6.64819 10.6012 7.35181 10.1499 7.74992L5.91903 11.4821C5.58389 11.7778 5.08085 11.7769 4.74675 11.4801Z"
                        fill="#323333" />
                </svg>
                <span> 媒體報導</span>
            </div>
            <p>Design is our cultural signal to the universe</p>
            <div class="media-wrapper media-wrapper">
                <div class="media-tabs">
                    <a href="#!" class="active">ALL</a>
                    <a href="#!">媒體專訪</a>
                    <a href="#!">影音專區</a>
                </div>
                <div class="media-cards media-cards">
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media1.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media2.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media3.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media4.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media5.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media6.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media7.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media8.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="media-pic">
                            <img src="../assets/style/image/media/media9.png" alt="">
                        </div>
                        <div class="text">
                            <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                            <h6>影音專區<span>|</span>2024-06-22</h6>
                        </div>
                    </div>

                </div>
                <div class="navigation">
                    <span class="last disabled">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M11 4.5L6 9L11 13.5" stroke="#323333" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    </span>
                    <span class="num">
                        <span class="active">1</span>
                        <span>2</span>
                        <span>3</span>
                    </span>
                    <span class="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M6 4.5L11 9L6 13.5" stroke="#323333" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>
