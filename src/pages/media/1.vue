<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
import Header from '../../component/Header.vue';
import Footer from '../../component/Footer.vue';
</script>

<template>
    <Header/>
    <div class="container detail-page other-page media-page">
        <div class="banner">
            <img src="../../assets/style/image/media/detail/bannera.png" alt="">
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
                    <span> 最新消息</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path opacity="0.3"
                            d="M4.74675 11.4801C4.34986 11.1275 4.35095 10.5071 4.74908 10.1559L7.4774 7.7491C7.92837 7.35128 7.92875 6.64828 7.47822 6.24998L4.748 3.83628C4.35077 3.4851 4.3511 2.86528 4.74872 2.51453C5.08199 2.22053 5.58198 2.22053 5.91525 2.51453L10.1499 6.25008C10.6012 6.64819 10.6012 7.35181 10.1499 7.74992L5.91903 11.4821C5.58389 11.7778 5.08085 11.7769 4.74675 11.4801Z"
                            fill="#323333" />
                    </svg>
                    <span> Teamars 茶馬司訪山茶店｜台中必訪｜融合古典、現代美學、茶藝美餐廳！</span>
                </div>
                <div class="nav-app"></div>
            </div>
            <hr>
            <div class="detail-wrapper">
                <div class="title">Teamars 茶馬司訪山茶店｜台中必訪｜融合古典、現代美學、茶藝美餐廳！</div>
                <h6>來源：勞鼠探世界 作者Lin<span>|</span>2024-06-22</h6>
                <div class="detail-photo">
                    <img src="../../assets/style/image/media/detail/media-a1.png" alt="">
                </div>
                <p>不是酒吧也不是咖啡廳！只能現場候位的不限時高質感台中茶飲餐廳《茶馬司訪山茶店》，台中的茶飲餐廳真的很強，以前大家都會想到台中春水堂、翁記或新綠洲等等，但《茶馬司訪山茶店》一出來就把整個台中茶飲餐廳拉高好幾個檔次，真的只有台中才能超越台中，來《茶馬司訪山茶店》品茗喝茶真的很有質感，但沒想到價位跟春水堂差不多而已。
                </p>
                <h4>台中高質感茶飲餐廳茶馬司訪山茶店</h4>
                <p>比春水堂還要高質感的台中茶飲餐廳《茶馬司訪山茶店》，其位於台中南屯區惠文路，對面就是台中IKEA，然後離文心公園蠻近的，《茶馬司訪山茶店》地理位置非常不錯，附近也有惠文停車場，開車過來也是很方便，《茶馬司訪山茶店》門口看起來很低調，看起來像是甜點店，但因為只能現場候位，前面有一區候位區等的蠻多人。
                </p>
                <p class="memo">「 歡迎來到茶馬司，一個融合創意與茶飲精神的茶飲品牌，一個融合創意與茶飲精神的茶飲品牌，茶不僅僅是一種飲料，更是一種生活態度，Teamars的時光機！Teamars：過去、現在、未來
                    」─ 茶馬司訪山茶店網站介紹。</p>
                <div class="detail-photo">
                    <img src="../../assets/style/image/media/detail/media-a2.png" alt="">
                    <img src="../../assets/style/image/media/detail/media-a3.png" alt="">
                </div>
                <p>走進去《茶馬司訪山茶店》會覺得真的很不一樣，看起來像是酒吧也看起來像是咖啡店，但確確實實是一家像春水堂的茶飲餐廳，《茶馬司訪山茶店》不限時而且只能現場候位，所以你問店員的話，他們也不能確定何時會有座位，吧台座位比較容易有座位，所以不想等或人數少的話，就直接選擇吧台就好。
                </p>
                <div class="detail-photo">
                    <img src="../../assets/style/image/media/detail/media-a4.png" alt="">
                </div>
                <h4>茶馬司訪山茶店菜單價格</h4>
                <p>比春水堂還要高質感的台中茶飲餐廳《茶馬司訪山茶店》，其位於台中南屯區惠文路，對面就是台中IKEA，然後離文心公園蠻近的，《茶馬司訪山茶店》地理位置非常不錯，附近也有惠文停車場，開車過來也是很方便，《茶馬司訪山茶店》門口看起來很低調，看起來像是甜點店，但因為只能現場候位，前面有一區候位區等的蠻多人。
                </p>
                <div class="detail-photo">
                    <img src="../../assets/style/image/media/detail/media-a5.png" alt="">
                </div>
                <h4>蒼靈柳枝 NT$208元</h4>
                <p>一上桌也太花俏了吧！這真的是茶飲嗎？為了保持茶飲最佳品嘗溫度下面還放了冰塊，蒼靈柳枝是用三峽碧螺春與龍鳳霞紅烏龍混搭，其茶色並沒有那麼深，喝起來茶香是蠻不錯的，整個很清新順口，紅烏龍跟碧螺春的比例抓的還不錯，不會讓人覺得很澀，是蠻剛好的，這樣子一壺也才208元，整個質感都高了好幾檔。
                </p>
                <div class="detail-photo">
                    <img src="../../assets/style/image/media/detail/media-a6.png" alt="">
                    <img src="../../assets/style/image/media/detail/media-a7.png" alt="">
                </div>
                <h4>對奕 NT$208元</h4>
                <p>一上桌也太花俏了吧！這真的是茶飲嗎？為了保持茶飲最佳品嘗溫度下面還放了冰塊，蒼靈柳枝是用三峽碧螺春與龍鳳霞紅烏龍混搭，其茶色並沒有那麼深，喝起來茶香是蠻不錯的，整個很清新順口，紅烏龍跟碧螺春的比例抓的還不錯，不會讓人覺得很澀，是蠻剛好的，這樣子一壺也才208元，整個質感都高了好幾檔。
                </p>
                <div class="detail-photo">
                    <img src="../../assets/style/image/media/detail/media-a8.png" alt="">
                </div>
                <p>對奕杉林溪雲霧春茶用窄瓶口玻璃盛裝，整體的香氣比較不會散溢，茶水倒出來後，整個香氣還蠻明顯的，入口很清香不會太厚也不會太澀，只是玻璃瓶比較不耐保溫，建議一點一點的倒，要不然溫度下降後香氣就比較沒有，澀感就會比較明顯一些。
                </p>
                <div class="detail-photo">
                    <img src="../../assets/style/image/media/detail/media-a9.png" alt="">
                    <img src="../../assets/style/image/media/detail/media-a10.png" alt="">
                </div>
                <p>只有台中才能超越台中啊！台中茶飲餐廳《茶馬司訪山茶店》真的很威，把品茗喝茶的文化整個質感拉的非常高，只是《茶馬司訪山茶店》目前只有一間，而且不能訂位也不限時，所以只能到現場等，這部份是比較不方便。如果覺得哥介紹的不錯的話，也可以推薦你的口袋名單給哥去試試看。
                </p>
                <div class="detail-photo">
                    <img src="../../assets/style/image/media/detail/media-a11.png" alt="">
                </div>
                <p>專訪連結：https://linnote.com/teamars/</p>
                <div class="page-switch">
                    <span class="switch-btn last-page">
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
                                        <rect width="9" height="13" fill="white" transform="translate(0.208984 0.271484)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span class="text">稷下會所ｘ金悅軒｜極致美味、跨界合作、感性的會所空間！</span>
                    </span>
                    <div class="divide"></div>
                    <span class="switch-btn next-page">
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
                                        <rect width="9" height="13" fill="white" transform="translate(0.208984 0.271484)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span class="text">稷下會所ｘ金悅軒｜極致美味、跨界合作、感性的會所空間！</span>

                    </span>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>
