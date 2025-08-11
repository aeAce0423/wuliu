<script setup>
import { useRouter } from "vue-router";
import ImageCarousel from '../component/ImageCarousel.vue';
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';
const route = useRouter();
</script>

<template>
  <Header />
  <div class="container about-page other-page">
    <section>
      <div class="row">
        <img class="flow-img" src=".././assets/style/image/common/flow.gif" alt="" />
        <span>
          <div class="title">About</div>
          <div class="subtitle">關於五六</div>
        </span>
      </div>
      <div class="bread-crumbs">
        <span>首頁 </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
          <path opacity="0.3"
            d="M4.74675 11.4801C4.34986 11.1275 4.35095 10.5071 4.74908 10.1559L7.4774 7.7491C7.92837 7.35128 7.92875 6.64828 7.47822 6.24998L4.748 3.83628C4.35077 3.4851 4.3511 2.86528 4.74872 2.51453C5.08199 2.22053 5.58198 2.22053 5.91525 2.51453L10.1499 6.25008C10.6012 6.64819 10.6012 7.35181 10.1499 7.74992L5.91903 11.4821C5.58389 11.7778 5.08085 11.7769 4.74675 11.4801Z"
            fill="#323333" />
        </svg>
        <span> 關於五六</span>
      </div>
      <p>From the golden generation of the 50s and 60s,<br />
        bringing nostalgia and creativity to the next level!
      </p>
      <div class="info-wrapper">
        <div class="about-img"></div>
        <div class="about-content">
          <h1><img class="aerial-view" src=".././assets/style/image/about/aerial-view.gif" alt="" />文化封存中</h1>
          <h1>準備送往宇宙！</h1>
          <p>
            源自一群五六年級生對時代的深刻記憶與浪漫想像，<br />
            五六文創承載著舊日情懷與新世代思維的交會點。<br />
            從生活出發，以文化為根。<br />
            我們相信：<br />
            設計不只是美學，<br />
            更是一種情感的延續與價值的再現。
          </p>
          <router-link to="/projects" custom v-slot="{ navigate }">
            <div class="more-btn" @click="navigate">
              <div class="text">our projects</div>
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
      <div class="intro-wrapper">
        <div class="intro-top">
          <div class="logo"></div>
          <h4>跨越資訊、餐飲、音樂、娛樂等領域</h4>
          <h4>結合傳統文化與現代創新</h4>
          <h4>打造具備在地靈魂的設計與商品</h4>
          <h5>Information, catering, music, entertainment</h5>
        </div>
        <div class="intro-bottom">
          <ImageCarousel />
        </div>
      </div>
    </section>
    <div class="milestones-wrapper">
      <div class="title">Milestones</div>
      <div class="subtitle">公司歷程</div>
      <ul>
        <li><span>2017</span><span class="divide">|</span><span>團隊成形，品牌構想啟動</span></li>
        <li><span>2018</span><span class="divide">|</span><span>完成CIS規劃，展開跨界整合</span></li>
        <li><span>2019</span><span class="divide">|</span><span>五六文創正式成立</span></li>
        <li><span>2020</span><span class="divide">|</span><span>推出首波台灣意象文創商品</span></li>
        <li><span>2021</span><span class="divide">|</span><span>成立「囍工場」，專注禮盒與包裝設計</span></li>
        <li><span>2022</span><span class="divide">|</span><span>拓展八大部門，導入吉祥物與視覺系統</span></li>
        <li><span>2023</span><span class="divide">|</span><span>啟動地方合作，策展聯名同步進行</span></li>
        <li><span>2024</span><span class="divide">|</span><span>成立研發實驗室，發展茶飲與餐食設計</span></li>
        <li><span>2025</span><span class="divide">|</span><span>建構品牌宇宙觀，佈局虛實整合與國際市場</span></li>
      </ul>
    </div>
    <section>
      <div class="teams-wrapper">
        <div class="row">
          <span>
            <div class="title">Teams</div>
            <div class="subtitle">五六團隊</div>
          </span>
        </div>
        <p>
          以跨界設計為核心，專精於視覺統籌與品牌敘事，擅長將抽象的<br />
          文化價值轉化為具體的產品語言與商業策略。<br />
          曾主導多項結合地方文化與新創設計的專案，<br />
          並深信：「一個好品牌，是能讓人產生情感共鳴的故事容器。」
        </p>
        <div class="team-cards">
          <div class="card">
            <div class="team-pic">
              <img src="../assets/style/image/about/person1.png" alt="">
            </div>
            <h4>Wataru Sasaki</h4>
            <h6>Chief Creative Officer / Creative Director /Planner</h6>
          </div>
          <div class="card">
            <div class="team-pic">
              <img src="../assets/style/image/about/person2.png" alt="">
            </div>
            <h4>Naoki Ito</h4>
            <h6>Creative Director / Entrepreneur / Artist</h6>
          </div>
          <div class="card">
            <div class="team-pic">
              <img src="../assets/style/image/about/person3.png" alt="">
            </div>
            <h4>Hiroki Nakamura</h4>
            <h6>Creative Director / Marketing /Bisdev</h6>
          </div>
          <div class="card">
            <div class="team-pic">
              <img src="../assets/style/image/about/person4.png" alt="">
            </div>
            <h4>Yurika Fujimaki</h4>
            <h6>Art Director</h6>
          </div>
          <div class="card">
            <div class="team-pic">
              <img src="../assets/style/image/about/person5.png" alt="">
            </div>
            <h4>Keigo Masuda</h4>
            <h6>Art Director</h6>
          </div>
          <div class="card">
            <div class="team-pic">
              <img src="../assets/style/image/about/person6.png" alt="">
            </div>
            <h4>Takeyuki Ochiai</h4>
            <h6>Art Director</h6>
          </div>
        </div>
        <router-link to="/projects" custom v-slot="{ navigate }">
          <div class="more-btn" @click="navigate">
            <div class="text">Contact US</div>
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
    <Footer />
  </div>
</template>
