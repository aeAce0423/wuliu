<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, nextTick } from "vue";

const route = useRouter();
import Header from "../component/Header.vue";
import Footer from "../component/Footer.vue";
import Breadcrumb from "@/component/Breadcrumb.vue";

// 原本的 footerLogo 邏輯
onMounted(() => {
  const footerLogo = document.querySelector(".footer-bottom .logo img");
  if (footerLogo) {
    footerLogo.src = new URL(
      "@/assets/style/image/common/logo-white.png",
      import.meta.url
    ).href;
  }
});

// ------------------- sticky-card 手風琴邏輯 -------------------
const stickyCards = ref([]);

const setStickyCardRef = (el, index) => {
  if (el) {
    stickyCards.value[index] = el;
  }
};

// ⭐ 修正：確保事件參數正確傳遞
const toggleCard = (index, event) => {
  // 如果 event 存在才阻止冒泡
  if (event) {
    event.stopPropagation();
  }

  console.log("=== Toggle Card Start ===");
  console.log("Clicked index:", index);
  console.log("Total cards:", stickyCards.value.length);
  console.log("Window width:", window.innerWidth);

  stickyCards.value.forEach((card, i) => {
    if (!card) {
      console.log(`Card ${i}: element is null`);
      return;
    }

    const body = card.querySelector(".card-body-s");
    if (!body) {
      console.log(`Card ${i}: .card-body-s not found`);
      return;
    }

    console.log(`Card ${i}: processing...`);

    if (i === index) {
      const isClosed = body.classList.contains("closed");
      console.log(`Card ${i}: currently ${isClosed ? "closed" : "open"}`);

      if (isClosed) {
        body.classList.remove("closed");
        body.style.maxHeight = "none";
        // 移除所有強制樣式
        body.style.marginTop = "";
        body.style.paddingTop = "";
        body.style.paddingBottom = "";
        body.style.opacity = "";

        requestAnimationFrame(() => {
          const height = body.scrollHeight;
          console.log(`Card ${i}: expanding to ${height}px`);
          body.style.maxHeight = height + "px";
        });
      } else {
        console.log(`Card ${i}: collapsing`);
        body.classList.add("closed");
        body.style.maxHeight = "0px";
        body.style.marginTop = "0px";
        body.style.paddingTop = "0px";
        body.style.paddingBottom = "0px";
        body.style.opacity = "0";
      }
    } else {
      console.log(`Card ${i}: force closing`);
      body.classList.add("closed");
      body.style.maxHeight = "0px";
      body.style.marginTop = "0px";
      body.style.paddingTop = "0px";
      body.style.paddingBottom = "0px";
      body.style.opacity = "0";
    }
  });

  console.log("=== Toggle Card End ===");
};

const resetHeights = () => {
  console.log("=== Reset Heights ===");

  stickyCards.value.forEach((card, i) => {
    if (!card) return;

    const body = card.querySelector(".card-body-s");
    if (!body || body.classList.contains("closed")) return;

    body.style.maxHeight = "none";
    const newHeight = body.scrollHeight;
    body.style.maxHeight = newHeight + "px";
    console.log(`Card ${i} reset to ${newHeight}px`);
  });
};

const initCards = () => {
  console.log("=== Init Cards ===");
  console.log("Cards count:", stickyCards.value.length);
  console.log("Window width:", window.innerWidth);

  stickyCards.value.forEach((card, index) => {
    if (!card) {
      console.log(`Init Card ${index}: element is null`);
      return;
    }

    const body = card.querySelector(".card-body-s");
    if (!body) {
      console.log(`Init Card ${index}: .card-body-s not found`);
      console.log("Card HTML:", card.innerHTML.substring(0, 200));
      return;
    }

    console.log(`Init Card ${index}: found .card-body-s`);
    body.classList.remove("closed");

    // ⭐ 移除強制樣式，恢復 CSS 控制
    body.style.marginTop = "";
    body.style.paddingTop = "";
    body.style.paddingBottom = "";
    body.style.opacity = "";

    requestAnimationFrame(() => {
      const height = body.scrollHeight;
      body.style.maxHeight = height + "px";
      console.log(`Init Card ${index}: set height to ${height}px`);
    });
  });
};

onMounted(() => {
  nextTick(() => {
    // ⭐ 增加延遲確保 DOM 完全渲染
    setTimeout(() => {
      initCards();
    }, 200);

    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        console.log("Window resized to:", window.innerWidth);
        resetHeights();
      }, 150);
    });
  });
});
</script>

<template>
  <Header />
  <div class="container service-page other-page">
    <section>
      <div class="service-info">
        <div class="row">
          <img
            class="flow-img"
            src=".././assets/style/image/common/flow.gif"
            alt=""
          />
          <span>
            <div class="title">service</div>
            <div class="subtitle">服務項目</div>
          </span>
        </div>
        <Breadcrumb />
        <p>Design is our cultural signal to the universe</p>
      </div>
      <div class="service-wrapper" style="display: none">
        <div class="background-video">
          <transition name="fade" mode="out-in">
            <video
              ref="serviceVideo"
              v-if="isVideo"
              autoplay
              muted
              loop
              width="100%"
            >
              <source :key="serviceSrc" :src="serviceSrc" type="video/mp4" />
            </video>
            <img v-else :src="serviceSrc" alt="" />
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
                <p>
                  憑藉專業知識、豐富經驗與系統性分析，幫助企業識別並解決核心問題，制定全面的品牌策略計劃。
                </p>
                <div class="more-btn">
                  <div class="text">品牌精選案例</div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="none"
                    >
                      <path
                        d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                        fill="#B0B0B0"
                      />
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
                <p>
                  以深刻洞察為基礎，用視覺傳達品牌理念，延伸至各接觸點，塑造一致且強大的品牌形象。
                </p>
                <div class="more-btn">
                  <div class="text">設計精選案例</div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="none"
                    >
                      <path
                        d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                        fill="#B0B0B0"
                      />
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
                <p>
                  將設計概念延伸至各個品牌接觸點，讓消費者一眼就能認出您的品牌，繼而創造價值和成長。
                </p>
                <div class="more-btn">
                  <div class="text">活動精選案例</div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="none"
                    >
                      <path
                        d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                        fill="#B0B0B0"
                      />
                    </svg>
                  </div>
                </div>
              </div></div
          ></router-link>
          <router-link to="/service" custom v-slot="{ navigate }">
            <div class="card" @mouseenter="activeIndex = 4" @click="navigate">
              <div class="card-l">
                <div class="row">
                  <div class="title">Marketing</div>
                  <div class="subtitle">數位營銷</div>
                </div>
              </div>
              <div class="card-r">
                <p>
                  從品牌到商品，挖掘獨特賣點，針對不同客群，制定整合行銷策略，幫您用對的方式找到對的人。
                </p>
                <div class="more-btn">
                  <div class="text">行銷精選案例</div>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="none"
                    >
                      <path
                        d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                        fill="#B0B0B0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="service-wrapperItem" style="display: none">
        <ul>
          <!-- SERVICE 01 -->
          <li class="service-item">
            <div class="service-content">
              <div class="service-label-l">SERVICE 01</div>

              <div class="service-label-m">
                <h2 class="service-title">品牌建置</h2>
                <p class="service-desc">
                  策略性規劃與建置企業視覺識別系統（CIS/VI），設計規範手冊及周邊衍生品設計，確保品牌價值的全面一致性。
                </p>

                <div class="service-tags">
                  <ul>
                    <li>品牌策略</li>
                    <li>核心定位</li>
                    <li>CIS策略</li>
                    <li>理念識別</li>
                    <li>行為識別</li>
                    <li>視覺識別</li>
                  </ul>
                </div>
              </div>

              <div class="service-label-r">
                <div class="service-bg-text">Branding</div>
              </div>
            </div>
          </li>

          <!-- SERVICE 02 -->
          <li class="service-item">
            <div class="service-content">
              <div class="service-label-l">SERVICE 02</div>

              <div class="service-label-m">
                <h2 class="service-title">設計專案</h2>
                <p class="service-desc">
                  提供全方位整合設計，涵蓋平面設計、包裝設計、數位設計。從概念到精準製程輸出，實現概念的完美落地。
                </p>

                <div class="service-tags">
                  <ul>
                    <li>視覺設計</li>
                    <li>平面設計</li>
                    <li>包裝設計</li>
                    <li>數位設計</li>
                    <li>圖形創作</li>
                    <li>製作輸出</li>
                  </ul>
                </div>
              </div>

              <div class="service-label-r">
                <div class="service-bg-text">Design</div>
              </div>
            </div>
          </li>

          <!-- SERVICE 03 -->
          <li class="service-item">
            <div class="service-content">
              <div class="service-label-l">SERVICE 03</div>

              <div class="service-label-m">
                <h2 class="service-title">活動專案</h2>
                <p class="service-desc">
                  專注於體驗式行銷與場域活化。提供活動策劃、陳列設計、現場執行統籌，為品牌創造各式互動性體驗。
                </p>

                <div class="service-tags">
                  <ul>
                    <li>活動策畫</li>
                    <li>活動視覺</li>
                    <li>場域布置</li>
                    <li>體驗設計</li>
                    <li>效益傳播</li>
                    <li>影像紀錄</li>
                  </ul>
                </div>
              </div>

              <div class="service-label-r">
                <div class="service-bg-text">Events</div>
              </div>
            </div>
          </li>

          <!-- SERVICE 04 -->
          <li class="service-item">
            <div class="service-content">
              <div class="service-label-l">SERVICE 04</div>

              <div class="service-label-m">
                <h2 class="service-title">數位營銷</h2>
                <p class="service-desc">
                  執行全通路營銷策略與數據驅動的整合行銷方案。核心服務包括企業網站建置、內容產出、社群營運及成效優化。
                </p>

                <div class="service-tags">
                  <ul>
                    <li>行銷策略</li>
                    <li>內容創作</li>
                    <li>社群營銷</li>
                    <li>數位廣宣</li>
                    <li>網站建置</li>
                    <li>成效優化</li>
                  </ul>
                </div>
              </div>

              <div class="service-label-r">
                <div class="service-bg-text">Marketing</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- Sticky Cards Accordion -->
      <div class="sticky-section">
        <div
          v-for="(card, index) in 4"
          :key="`card-${index}`"
          class="sticky-card"
          :style="`--index:${index}`"
          :ref="(el) => setStickyCardRef(el, index)"
          @click.stop="toggleCard(index)"
        >
          <div class="service-card-V2">
            <div class="service-label-V2-column">
              <div class="service-label-V2">
                SERVICE {{ index + 1 < 10 ? "0" + (index + 1) : index + 1 }}
              </div>
            </div>

            <div class="text-content">
              <div class="sticky-title">
                <h2 class="service-title-V2">
                  {{ ["品牌建置", "設計專案", "活動專案", "數位營銷"][index] }}
                </h2>
              </div>

              <div class="card-body-s">
                <p class="service-description">
                  {{
                    [
                      "策略性規劃與建置企業視覺識別系統 (CIS/VI)，設計規範手冊及周邊衍生品設計，確保品牌價值的全面一致性。",
                      "提供全方位整合設計，涵蓋平面設計、包裝設計、數位設計。從概念到精準製程輸出，實現概念的完美落地。",
                      "專注於體驗式行銷與場域活化。提供活動策劃、陳列設計、現場執行統籌，為品牌創造各式互動性體驗。",
                      "執行全通路營銷策略與數據驅動的整合行銷方案。核心服務包括企業網站建置、內容產出、社群營運及成效優化。",
                    ][index]
                  }}
                </p>
                <div class="service-tagGroup-V2">
                  <span
                    v-for="(tag, tagIndex) in [
                      [
                        '品牌策略',
                        '核心定位',
                        'CIS策略',
                        '理念識別',
                        '行為識別',
                        '視覺識別',
                      ],
                      [
                        '視覺規劃',
                        '平面設計',
                        '包裝設計',
                        '數位設計',
                        '圖形創作',
                        '製作輸出',
                      ],
                      [
                        '活動策畫',
                        '活動視覺',
                        '場域布置',
                        '體驗設計',
                        '效益傳播',
                        '影像紀錄',
                      ],
                      [
                        '行銷策略',
                        '內容創作',
                        '社群營銷',
                        '數位廣宣',
                        '網站建置',
                        '成效優化',
                      ],
                    ][index]"
                    :key="`tag-${index}-${tagIndex}`"
                    class="service-tag-V2"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </div>

            <div class="text-watermark">
              <div class="watermark-text">
                {{ ["Branding", "Design", "Events", "Marketing"][index] }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="process-wrapper">
        <div class="title">process</div>
        <div class="subtitle">服務流程</div>
        <img src="../assets/style/image/common/process.svg" alt="" />
      </div>
    </section>
    <Footer />
  </div>
</template>
