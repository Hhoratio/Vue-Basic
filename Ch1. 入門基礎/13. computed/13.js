/* computed 計算屬性 */
/* computed 觸發：只要當前元件裡的 data 的值發生變化時，就會觸發 computed 裡有使用 data 那個值的方法  */

/* 並非所有 computed 裡的所有方法都會觸發，必須是方法裡的 data 值發生變化時才觸發 */

const app = Vue.createApp({
    data() {
        return {
            num: 1,
            note: ''
        }
    },
    computed: {
        // test() { // test() 並不包含 data 裡的值，所以不會觸發
        //     setTimeout(()=> {
        //         console.log(1);
        //     }, 2000)
        // }

        // error() {
        //     return this.num == 10? '不可超過 10': this.num == 0? '不可低於 0': '';
        // }

        // 也可以使用 get / set 方法

        error1: {
            get() {
                const m = this.num == 10? '不可超過 10': this.num == 0? '不可低於 0': '';
                if(m) return this.note + m; 
            },
            set(w) {
                this.note = w;
            }
        }
    },
    methods: {
        add() {
            this.error1 = '警告：'
            if(this.num < 10) this.num++;
        },
        desc() {
            this.error1 = '提示：'
            if(this.num > 0) this.num--;
        }
    }
})

const vm = app.mount('#app');