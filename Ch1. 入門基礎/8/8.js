/* 模擬後端讀取數據方法 */

const app = Vue.createApp({
    data() {
        return {
            lessons: window.lessons,
        }
    },
})

app.mount('#app')