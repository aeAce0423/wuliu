<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';
import Breadcrumb from '@/component/Breadcrumb.vue'
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
            <Breadcrumb />
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
