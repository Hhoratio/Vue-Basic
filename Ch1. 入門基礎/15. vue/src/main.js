import { createApp } from 'vue';
import App from './App.vue';

/* 引入全局樣式 */
import './assets/global.scss';

const vm = createApp(App).mount('#app')

// console.log(vm);