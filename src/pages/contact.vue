<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';
</script>

<template>
    <Header />
    <div class="container contact-page other-page">
        <section>
            <div class="row">
                <img class="flow-img" src=".././assets/style/image/common/flow.gif" alt="" />
                <span>
                    <div class="title">Contact</div>
                    <div class="subtitle">聯絡我們</div>
                </span>
            </div>
            <div class="bread-crumbs">
                <span>首頁 </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path opacity="0.3"
                        d="M4.74675 11.4801C4.34986 11.1275 4.35095 10.5071 4.74908 10.1559L7.4774 7.7491C7.92837 7.35128 7.92875 6.64828 7.47822 6.24998L4.748 3.83628C4.35077 3.4851 4.3511 2.86528 4.74872 2.51453C5.08199 2.22053 5.58198 2.22053 5.91525 2.51453L10.1499 6.25008C10.6012 6.64819 10.6012 7.35181 10.1499 7.74992L5.91903 11.4821C5.58389 11.7778 5.08085 11.7769 4.74675 11.4801Z"
                        fill="#323333" />
                </svg>
                <span> 聯絡我們</span>
            </div>
            <div class="contact-wrapper">
                <li>
                    <label for="name">姓名 Name *</label>
                    <input type="text" id="name">
                </li>
                <li>
                    <label for="company">公司 Company *</label>
                    <input type="text" id="company">
                </li>
                <li>
                    <label for="job">職稱 Job title *</label>
                    <input type="text" id="job">
                </li>
                <li>
                    <label for="country">國家 Country *</label>
                    <select name="country" id="country">
                        <option value="台灣" selected>台灣</option>
                        <option value="日本">日本</option>
                    </select>
                </li>
                <li>
                    <label for="area">地區 Area *</label>
                    <select name="area" id="area">
                        <option value="台北">台北</option>
                        <option value="台中">台中</option>
                        <option value="台南">台南</option>
                    </select>
                </li>
                <li>
                    <label for="phone">聯絡電話 Tel NO *</label>
                    <input type="text" id="phone">
                </li>
                <li>
                    <label for="email">電子郵件 E-mail *</label>
                    <input type="text" id="email">
                </li>
                <li>
                    <label for="line">Line ID *</label>
                    <input type="text" id="line">
                </li>
                <li class="content">
                    <label for="content">需求描述 Content *</label>
                    <textarea name="content" id="content"></textarea>
                </li>
                <div class="row">
                    <li>
                        <label for="verification">輸入驗證碼 *</label>
                        <input type="text" id="verification">
                    </li>
                    <span class="verification-pic"></span>
                    <span>點擊驗證圖片可更換驗證碼，請注意大小寫區分。</span>
                </div>
                <div class="row">
                    <input type="checkbox" name="agree" id="agree">
                    <label for="agree">同意<a href="#!">隱私政策</a>*</label>
                </div>
                <li class="no-bg">
                    <div class="btn confirm-btn">
                        <div class="text">Send 送出諮詢</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                            <path
                                d="M8.5683 6.20755C9.0883 6.60785 9.0883 7.39205 8.5683 7.79235L2.20766 12.6888C1.55008 13.195 0.597656 12.7262 0.597656 11.8964V2.10353C0.597656 1.27369 1.55008 0.804924 2.20766 1.31112L8.5683 6.20755Z"
                                fill="#323333" />
                        </svg>
                    </div>
                </li>
                <div class="contact-app">
                    <div class="title">Follow us</div>
                    <div class="app-btns">
                        <div class="btn">
                            <img src="../assets/style/image/common/facebook-round-gray.svg" alt="">
                            <span>Follow us on Facebook</span>
                        </div>
                        <div class="btn">
                            <img src="../assets/style/image/common/instagram-round-gray.svg" alt="">
                            <span>Follow us on Instagram</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>
