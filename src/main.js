// 共用樣式
import './assets/style/css/reset.css';
import './assets/style/css/style.css';
// 各分頁樣式
import './assets/style/css/about.css';
import './assets/style/css/projects.css';
import './assets/style/css/service.css';
import './assets/style/css/media.css';
import './assets/style/css/terms.css';
import './assets/style/css/detail.css';
import './assets/style/css/blog.css';
import './assets/style/css/contact.css';
// 字型樣式
import './assets/style/font/font.css';
// 路徑設定
import router from './router';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
