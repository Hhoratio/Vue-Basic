/* 動態屬性 與基礎指令 */

const app = Vue.createApp({
    data() {
        return {
            value: 'houdunren',
            arg: 'id'
        }
    },
})

const vm = app.mount('#app');

setTimeout(() => {
    /* 兩種寫法都可以 */
    /* 動態改變 value 的值 */
    // vm.$data.value = 'hdcms';
    vm.value = 'https://www.houdunren.com';
    vm.arg = 'href'
}, 3000)