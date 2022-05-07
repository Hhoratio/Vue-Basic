/* watch 監聽器 */

const app = Vue.createApp({
    data() {
        return {
            num: 1,
            name: 'houdunren',
            error: ''
        }
    },
    watch: {
        /* watch 會有兩個參數，第一個是變化後的值，第二個是變化前的值 */
        num(newValue, oldvalue) {
            this.error = newValue == 10? '不能超過 10': newValue == 0? '不能低於 0': '';
        },

        name(newValue, oldvalue) {
            console.log(newValue, oldvalue);
        }
    },
    methods: {
        add() {
            if(this.num < 10) this.num++;
        },
        desc() {
            if(this.num > 0) this.num--;
        }
    }
})

const vm = app.mount('#app');

console.log(vm.name);

setTimeout(() => {
    vm.name = '向軍大叔'
}, 3000)


