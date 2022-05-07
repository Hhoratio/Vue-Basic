/* 應用和元件的分析 */

/* 一個頁面必須要有一個根元件，再將其他子元件放入根元件，形成嵌套關係 */

/* 創建根元件 */
const app = Vue.createApp({
    data() {
        return {
            name: '根元件 - 元件的最頂層'
        }
    },
    template: `<div>{{name}} - <ch /></div>`
})

/* 子元件創建 component('子元件標籤名', {子元件的數據、等元件資料}) */
app.component('ch', {
    data() {
        return {
            name: '子元件的 data，嵌套在根元件裡面'
        }
    },
    template: `<h4>{{name}}</h4>`
})

const vm = app.mount('#app');
