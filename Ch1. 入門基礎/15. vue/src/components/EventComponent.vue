<template>
    <div @click="sum(1, 2, 3, 4, $event)">{{num}}</div>
    <div @click="ev">{{num}}</div>
</template>

<script>
    export default {
        data() {
            return {
                num: 1
            }
        },
        methods: {
            sum(...args) {
                console.log(args);
            },
            ev(event) {
                /* 不傳參數的情況下，默認會有 event 事件源 */
                console.log(event);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>