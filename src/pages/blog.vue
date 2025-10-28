<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';
import Breadcrumb from '@/component/Breadcrumb.vue'
</script>

<template>
  <Header />
  <div class="container blog-page other-page">
    <section>
      <div class="row">
        <img class="flow-img" src=".././assets/style/image/common/flow.gif" alt="" />
        <span>
          <div class="title">blog</div>
          <div class="subtitle">部落格</div>
        </span>
      </div>
      <Breadcrumb />
      <div class="inner-box">
        <div class="blog-wrapper">
          <div class="blog-cards">
            <div class="card">
              <div class="blog-pic">
                <img src="../assets/style/image/blog/blog1.png" alt="">
              </div>
              <div class="content">
                <h6>最新消息<span>|</span>2024-06-22</h6>
                <h6 class="tags">
                  <li>#茶馬司</li>
                  <li>#高質感</li>
                  <li>#太空主題</li>
                  <li>#美食推薦</li>
                </h6>
                <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                <p>
                  不是酒吧也不是咖啡廳！只能現場候位的不限時高質感台中茶飲餐廳《茶馬司訪山茶店》，台中的茶飲餐廳真的很強，以前大家都會想到台中春水堂、翁記或新綠洲等等，但《茶馬司訪山茶店》一出來就把整個台中茶飲餐廳拉高好幾個檔次，真的只有台中才能超越台中，來《茶馬司訪山茶店》品茗喝茶真的很有質感，但沒想到價位跟春水堂差不多而已。
                </p>
                <div class="more-btn">
                  <div class="text">More</div>
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                      <path
                        d="M9.92469 6.65123C10.4967 7.08013 10.4967 7.92034 9.92469 8.34923L2.92798 13.5954C2.20465 14.1378 1.15698 13.6355 1.15698 12.7464V2.25407C1.15698 1.36495 2.20465 0.862706 2.92798 1.40506L9.92469 6.65123Z"
                        fill="#B0B0B0" />
                    </svg>
                  </div>
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
        <div class="category-wrapper">
          <div class="filter">
            <input type="text" placeholder="請輸入關鍵字">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
              <path
                d="M24.8535 23.2418C25.2578 23.691 25.2578 24.3649 24.8086 24.7691L23.5508 26.027C23.1465 26.4762 22.4727 26.4762 22.0234 26.027L17.5762 21.5797C17.3516 21.3551 17.2617 21.0856 17.2617 20.816V20.0524C15.6445 21.3102 13.668 22.0289 11.5117 22.0289C6.3457 22.0289 2.16797 17.8512 2.16797 12.6852C2.16797 7.56407 6.3457 3.34142 11.5117 3.34142C16.6328 3.34142 20.8555 7.56407 20.8555 12.6852C20.8555 14.8863 20.0918 16.8629 18.8789 18.4352H19.5977C19.8672 18.4352 20.1367 18.5699 20.3613 18.7496L24.8535 23.2418ZM11.5117 18.4352C14.6562 18.4352 17.2617 15.8746 17.2617 12.6852C17.2617 9.54063 14.6562 6.93517 11.5117 6.93517C8.32227 6.93517 5.76172 9.54063 5.76172 12.6852C5.76172 15.8746 8.32227 18.4352 11.5117 18.4352Z"
                fill="#FFDE0A" />
            </svg>
          </div>
          <div class="type type-category">
            <div class="subtitle">文章類別</div>
            <hr>
            <li>最新消息</li>
            <li>文化生活</li>
            <li>五六觀點</li>
            <li>創意靈感</li>
          </div>
          <div class="type type-hot">
            <div class="subtitle">熱門文章</div>
            <hr>
            <li>
              <div class="pic">
                <img src="../assets/style/image/blog/blog1.png" alt="">
              </div>
              <div class="info">
                <div class="time">最新消息 | 2024/04/19</div>
                <div class="name">Teamars 茶馬司訪山茶店｜台中必訪｜融合古典、現代美學、茶藝美餐廳！</div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/style/image/blog/blog3.png" alt="">
              </div>
              <div class="info">
                <div class="time">最新消息 | 2024/04/19</div>
                <div class="name">精神補給交給搖滾台中，五臟補給交給茶馬司！#搖滾台中參戰確認</div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/style/image/blog/blog4.png" alt="">
              </div>
              <div class="info">
                <div class="time">最新消息 | 2024/04/19</div>
                <div class="name">傳說8/10和喜歡的人一起走過茶馬司搭建的鵲橋就可以跟喜歡的人在一起喔！</div>
              </div>
            </li>
          </div>
          <div class="type type-new">
            <div class="subtitle">最新文章</div>
            <hr>
            <li>
              <div class="pic">
                <img src="../assets/style/image/blog/blog1.png" alt="">
              </div>
              <div class="info">
                <div class="time">最新消息 | 2024/04/19</div>
                <div class="name">Teamars 茶馬司訪山茶店｜台中必訪｜融合古典、現代美學、茶藝美餐廳！</div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/style/image/blog/blog3.png" alt="">
              </div>
              <div class="info">
                <div class="time">最新消息 | 2024/04/19</div>
                <div class="name">精神補給交給搖滾台中，五臟補給交給茶馬司！#搖滾台中參戰確認</div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/style/image/blog/blog4.png" alt="">
              </div>
              <div class="info">
                <div class="time">最新消息 | 2024/04/19</div>
                <div class="name">傳說8/10和喜歡的人一起走過茶馬司搭建的鵲橋就可以跟喜歡的人在一起喔！</div>
              </div>
            </li>
          </div>
          <div class="tags-box">
            <li>#數位行銷</li>
            <li>#品牌規劃</li>
            <li>#平面設計</li>
            <li>#文化創新</li>
            <li>#美食推薦</li>
            <li>#茶馬司</li>
            <li>#美食推薦</li>
            <li>#太空主題</li>
            <li>#草莓花糖葫蘆</li>
            <li>#周年慶</li>
            <li>#母親節</li>
            <li>#穿越時空</li>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
