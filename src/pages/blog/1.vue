<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
import Header from '../../component/Header.vue';
import Footer from '../../component/Footer.vue';
</script>

<template>
    <Header/>
    <div class="container blog-page other-page detail-page">
        <section>
            <div class="row">
                <img class="flow-img" src="../../assets/style/image/common/flow.gif" alt="" />
                <span>
                    <div class="title">blog</div>
                    <div class="subtitle">部落格</div>
                </span>
            </div>
            <div class="bread-crumbs">
                <span>首頁 </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path opacity="0.3"
                        d="M4.74675 11.4801C4.34986 11.1275 4.35095 10.5071 4.74908 10.1559L7.4774 7.7491C7.92837 7.35128 7.92875 6.64828 7.47822 6.24998L4.748 3.83628C4.35077 3.4851 4.3511 2.86528 4.74872 2.51453C5.08199 2.22053 5.58198 2.22053 5.91525 2.51453L10.1499 6.25008C10.6012 6.64819 10.6012 7.35181 10.1499 7.74992L5.91903 11.4821C5.58389 11.7778 5.08085 11.7769 4.74675 11.4801Z"
                        fill="#323333" />
                </svg>
                <span> 五六觀點 </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path opacity="0.3"
                        d="M4.74675 11.4801C4.34986 11.1275 4.35095 10.5071 4.74908 10.1559L7.4774 7.7491C7.92837 7.35128 7.92875 6.64828 7.47822 6.24998L4.748 3.83628C4.35077 3.4851 4.3511 2.86528 4.74872 2.51453C5.08199 2.22053 5.58198 2.22053 5.91525 2.51453L10.1499 6.25008C10.6012 6.64819 10.6012 7.35181 10.1499 7.74992L5.91903 11.4821C5.58389 11.7778 5.08085 11.7769 4.74675 11.4801Z"
                        fill="#323333" />
                </svg>
                <span>Teamars 茶馬司訪山茶店｜台中必訪｜融合古典、現代美學、茶藝美餐廳！</span>
            </div>
            <div class="inner-box">
                <div class="blog-wrapper detail-wrapper">
                    <div class="blog-cards">
                        <div class="card">
                            <div class="blog-pic">
                                <img src="../../assets/style/image/blog/detail/banner-a.png" alt="">
                            </div>
                            <div class="content">
                                <h4>Teamars 茶馬司訪山茶店<span>|</span>台中必訪<span>|</span>融合古典、現代美學、茶藝美餐廳！</h4>
                                <hr>
                                <h6>最新消息<span>|</span>2024-06-22</h6>
                                <h6 class="tags">
                                    <li>#茶馬司</li>
                                    <li>#高質感</li>
                                    <li>#太空主題</li>
                                    <li>#美食推薦</li>
                                </h6>

                                <p>
                                    不是酒吧也不是咖啡廳！只能現場候位的不限時高質感台中茶飲餐廳《茶馬司訪山茶店》，台中的茶飲餐廳真的很強，以前大家都會想到台中春水堂、翁記或新綠洲等等，但《茶馬司訪山茶店》一出來就把整個台中茶飲餐廳拉高好幾個檔次，真的只有台中才能超越台中，來《茶馬司訪山茶店》品茗喝茶真的很有質感，但沒想到價位跟春水堂差不多而已。
                                </p>

                                <h4>台中高質感茶飲餐廳茶馬司訪山茶店</h4>
                                <p>比春水堂還要高質感的台中茶飲餐廳《茶馬司訪山茶店》，其位於台中南屯區惠文路，對面就是台中IKEA，然後離文心公園蠻近的，《茶馬司訪山茶店》地理位置非常不錯，附近也有惠文停車場，開車過來也是很方便，《茶馬司訪山茶店》門口看起來很低調，看起來像是甜點店，但因為只能現場候位，前面有一區候位區等的蠻多人。
                                </p>
                                <div class="detail-photo">
                                    <img src="../../assets/style/image/blog/detail/blog-a1.png" alt="">
                                    <img src="../../assets/style/image/blog/detail/blog-a2.png" alt="">
                                </div>
                                <p>走進去《茶馬司訪山茶店》會覺得真的很不一樣，看起來像是酒吧也看起來像是咖啡店，但確確實實是一家像春水堂的茶飲餐廳，《茶馬司訪山茶店》不限時而且只能現場候位，所以你問店員的話，他們也不能確定何時會有座位，吧台座位比較容易有座位，所以不想等或人數少的話，就直接選擇吧台就好。</p>
                                <div class="detail-photo">
                                    <img src="../../assets/style/image/blog/detail/blog-a3.png" alt="">
                                </div>
                                <p>只有台中才能超越台中啊！台中茶飲餐廳《茶馬司訪山茶店》真的很威，把品茗喝茶的文化整個質感拉的非常高，只是《茶馬司訪山茶店》目前只有一間，而且不能訂位也不限時，所以只能到現場等，這部份是比較不方便。如果覺得哥介紹的不錯的話，也可以推薦你的口袋名單給哥去試試看。</p>
                                <div class="detail-photo">
                                    <img src="../../assets/style/image/blog/detail/blog-a4.png" alt="">
                                </div>
                                <div class="page-switch">
                                    <span class="last-page">
                                        <h5>稷下會所ｘ金悅軒｜極致美味、跨界合作、感性的會所空間！</h5>
                                        <div class="switch-btn">
                                            <span class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14"
                                                    viewBox="0 0 10 14" fill="none">
                                                    <g clip-path="url(#clip0_6505_660)">
                                                        <path
                                                            d="M7.91967 6.03608C8.38767 6.40779 8.38767 7.13598 7.91967 7.50768L2.19509 12.0544C1.60328 12.5244 0.746094 12.0891 0.746094 11.3186V2.22521C0.746094 1.45464 1.60328 1.01936 2.19509 1.4894L7.91967 6.03608Z"
                                                            fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6505_660">
                                                            <rect width="9" height="13" fill="white"
                                                                transform="translate(0.208984 0.271484)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span class="text">LAST ONE&nbsp; &nbsp;上一篇</span>
                                        </div>
                                    </span>
                                    <div class="divide"></div>

                                    <span class="next-page">
                                        <h5>Teamars 茶馬司訪山茶店｜精神補給交給搖滾台中，五臟補給交給茶馬司！ 聽團不能錯過的美食還有飲料！</h5>
                                        <div class="switch-btn">
                                            <span class="text">NEXT ONE&nbsp; &nbsp;下一篇</span>
                                            <span class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14"
                                                    viewBox="0 0 10 14" fill="none">
                                                    <g clip-path="url(#clip0_6505_660)">
                                                        <path
                                                            d="M7.91967 6.03608C8.38767 6.40779 8.38767 7.13598 7.91967 7.50768L2.19509 12.0544C1.60328 12.5244 0.746094 12.0891 0.746094 11.3186V2.22521C0.746094 1.45464 1.60328 1.01936 2.19509 1.4894L7.91967 6.03608Z"
                                                            fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6505_660">
                                                            <rect width="9" height="13" fill="white"
                                                                transform="translate(0.208984 0.271484)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </div>

                                    </span>
                                </div>
                            </div>
                        </div>
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
                                <img src="../../assets/style/image/blog/blog1.png" alt="">
                            </div>
                            <div class="info">
                                <div class="time">最新消息 | 2024/04/19</div>
                                <div class="name">Teamars 茶馬司訪山茶店｜台中必訪｜融合古典、現代美學、茶藝美餐廳！</div>
                            </div>
                        </li>
                        <li>
                            <div class="pic">
                                <img src="../../assets/style/image/blog/blog3.png" alt="">
                            </div>
                            <div class="info">
                                <div class="time">最新消息 | 2024/04/19</div>
                                <div class="name">精神補給交給搖滾台中，五臟補給交給茶馬司！#搖滾台中參戰確認</div>
                            </div>
                        </li>
                        <li>
                            <div class="pic">
                                <img src="../../assets/style/image/blog/blog4.png" alt="">
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
                                <img src="../../assets/style/image/blog/blog1.png" alt="">
                            </div>
                            <div class="info">
                                <div class="time">最新消息 | 2024/04/19</div>
                                <div class="name">Teamars 茶馬司訪山茶店｜台中必訪｜融合古典、現代美學、茶藝美餐廳！</div>
                            </div>
                        </li>
                        <li>
                            <div class="pic">
                                <img src="../../assets/style/image/blog/blog3.png" alt="">
                            </div>
                            <div class="info">
                                <div class="time">最新消息 | 2024/04/19</div>
                                <div class="name">精神補給交給搖滾台中，五臟補給交給茶馬司！#搖滾台中參戰確認</div>
                            </div>
                        </li>
                        <li>
                            <div class="pic">
                                <img src="../../assets/style/image/blog/blog4.png" alt="">
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
        <Footer/>
    </div>
</template>
