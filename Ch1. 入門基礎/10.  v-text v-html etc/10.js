/* 文本數據操作 */

const app = Vue.createApp({
    data() {
        return {
            title: `文本數據使用 {{ }} 渲染，5 秒鐘之後內容自動銷毀。`,
            text: `文本數據使用 v-text 屬性渲染。`,

            html: `<div>必須通過 v-html 才會解析 html 標籤，但不建議這樣使用，因為可能會造成 xss 攻擊的可能 </div>`
        }
    },
})

const vm = app.mount('#app');

setTimeout(() => {
    vm.title = ''
}, 5000)