/* 方法的使用細節 */

const app = Vue.createApp({
    data() {
        return {
            num: 0,
            error: ''    
        }
    },
    methods: {
        add() {
            this.error = '';
            if(this.num < 10) {
                this.num ++
            } else {
                this.error = `不能超過 10`
            }
        },
        dec() {
            this.error = '';
            if(this.num > 0) {
                this.num--
            } else {
                this.error = `不能小於 0`
            }
        }
    }
})

const vm = app.mount('#app');