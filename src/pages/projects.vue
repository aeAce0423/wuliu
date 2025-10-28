<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';
import Breadcrumb from '../component/Breadcrumb.vue';
</script>

<template>
    <Header />
    <div class="container projects-page other-page">
        <section>
            <div class="row">
                <img class="flow-img" src=".././assets/style/image/common/flow.gif" alt="" />
                <span>
                    <div class="title">projects</div>
                    <div class="subtitle">案例介紹</div>
                </span>
            </div>
            <Breadcrumb />
            <p>Design is our cultural signal to the universe</p>
            <div class="projects-wrapper">
                <div class="project-tabs">
                    <a href="#!" class="active">ALL</a>
                    <a href="#!">品牌建置</a>
                    <a href="#!">設計專案</a>
                    <a href="#!">活動專案</a>
                    <a href="#!">數位營銷</a>
                </div>
                <div class="projects-cards">
                    <router-link to="/projects/1" custom v-slot="{ navigate }">
                    <div class="card" @click="navigate">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project1.png" alt="">
                        </div>
                        <h4>品牌CI建置<span>|</span>TEAMARS茶馬司訪山茶店</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
                    </router-link>
                    <div class="card">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project2.png" alt="">
                        </div>
                        <h4>商品企劃<span>|</span>Ms.祕食 X 茶馬司 限量星月中秋禮盒</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
                    <div class="card">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project3.png" alt="">
                        </div>
                        <h4>商品企劃<span>|</span>茶馬司 加大防潑水野餐墊</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
                    <div class="card">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project4.png" alt="">
                        </div>
                        <h4>活動規劃<span>|</span>稷下 元宵手繪燈籠</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
                    <div class="card">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project5.png" alt="">
                        </div>
                        <h4>活動規劃<span>|</span>茶馬司 七夕情人節活動</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
                    <div class="card">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project6.png" alt="">
                        </div>
                        <h4>商品企劃<span>|</span>茶馬司 經典鳳梨酥禮盒</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
                    <div class="card">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project7.png" alt="">
                        </div>
                        <h4>商品企劃<span>|</span>茶馬司 經典鳳梨酥禮盒</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
                    <div class="card">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project8.png" alt="">
                        </div>
                        <h4>商品企劃<span>|</span>稷下 五六懷舊柑仔店</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
                    <div class="card">
                        <div class="project-pic">
                            <img src="../assets/style/image/projects/project9.png" alt="">
                        </div>
                        <h4>品牌CI建置<span>|</span>稷下會所JIXIA</h4>
                        <h6><span class="dot"></span>#品牌建置 #設計專案 #數位營銷</h6>
                        <div class="more-btn">
                            <div class="text">More</div>
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
        <Footer />
    </div>
</template>
