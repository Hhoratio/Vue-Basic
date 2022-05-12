<!-- 
    在某些情況下， template 標籤可以當作是一個標籤，可以用來參與 v-for v-if 等
    而 template 標籤實際上並不會渲染到頁面
 -->
<template>
    <div v-for="(lesson, index) in lessons" :key="index">
        <div v-if="lesson.isDelete" :class="{isTrue}"> {{lesson.title}}</div>
        <div v-else :class="{isFalse}"> {{lesson.title}}</div>
    </div>
</template>

<script>
import lessons from '../data/lessons'
    export default {
        data() {
            return {
                lessons,
                isTrue: true,
                isFalse: true,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .isTrue {
        border: 2px solid green;
        margin-top: 5px;
    }
    .isFalse {
        border: 2px solid red;
        text-decoration: line-through;
        margin-top: 5px;
    }
</style>