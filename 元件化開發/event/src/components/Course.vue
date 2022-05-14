<template>
    <div>
        <img :src="course.image" :alt="course.itle">
        <h4 @dblclick="inputShow = true">
            <!-- 需求： 雙擊可以更改名稱 -->
            <input v-if="inputShow" type="text" @input="changeTitle" :value="course.title"
            @blur="inputShow = false" @keyup.enter="inputShow = false">
            
            <strong v-else>{{course.title}}</strong>
        </h4>

        <!-- price 部分 -->
        <h4 @dblclick="priceShow = true">
            <!-- 需求： 雙擊可以更改名稱 -->
            <input v-if="priceShow" type="text" @input="$emit('update:price', Number($event.target.value))" :value="course.price"
            @blur="priceShow = false" @keyup.enter="priceShow = false">
            
            <strong v-else>價格： {{course.price}}</strong>
        </h4>


        <!-- <span v-bind="$attrs">x</span> -->
        <!-- <span @click="$emit('del', course)">x</span> -->
        <span @click="del">x</span>
    </div>
</template>

<script>
    export default {
        // inheritAttrs: false,
        props: ['course', 'title', 'price', 'titleModifiers'],
        data() {
            return {
                inputShow: false,
                priceShow: false
            }
        },

        /* emits 用來接收父元件所傳遞的事件，然後再子元件透過 $emit 來進行調用 */
        /* 也可以針對事件做配置，原理跟 props 類似 */
        // emits: ['del'],
        // created() {
        //     console.log(this.titleModifiers);
        // },
        emits: {
            'update:title': null,
            'update:price': null,
            del(v) {
                if(/^\d+$/.test(v)) {
                    return true;
                }
                throw new Error(`emit 參數類型錯誤`)
            }
        },
        methods: {
            del() {
               if(confirm(`是否確定刪除 ?`)) {
                    this.$emit('del', this.course.id)
               }
            },
            changeTitle(ev) {
                let value = ev.target.value;
                if(this.titleModifiers.toupper) {
                    value = value.toUpperCase();
                }

                let substr = Object.keys(this.titleModifiers).find(item => /^substr/.test(item));
                if(substr) {
                    let index = substr.split('_');
                    value = value.substr(0, index[1])
                }
                this.$emit('update:title', value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid #ddd;
        text-align: center;
        transition: .4s;
        position: relative;
        h4 {
            margin: 0;
            padding: 0 0 10px 0;
        }

        img {
            width: 100%;
        }

        &:hover {
            box-shadow: 0 0 20px #aaa;
            >span {
                opacity: 1;
            }
        }

        span {
            background-color: #95a5a6;
            color: white;
            position: absolute;
            width: 20px;
            height: 20px;
            top: 5px;
            right: 5px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            opacity: 0;
            transition: .4s;
        }
    }
</style>