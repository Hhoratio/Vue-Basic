/* 簡單創建一個 vue 模板 */
/* mount() 是將單前創建的模板掛載到 html 的容器裡 */

Vue.createApp({
    data() {
        return {
            title: 'houdunren'
        }
    },
    /* template 的內容可以寫在這，也可以寫在 html */
    // template: `<div>{{title}}</div>`
}).mount('#app')