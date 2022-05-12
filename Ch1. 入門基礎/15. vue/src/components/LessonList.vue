<template>
    <div class="LessonList">
        <div v-for="(lesson, index) in Lessons" :key="index">
            <span :class="{'isDelete': lesson.isDelete}">{{lesson.title}}</span>
            <button @click="lesson.isDelete = !lesson.isDelete">{{lesson.isDelete ? '取消': '刪除'}}</button>
        </div>
    </div>
</template>

<script>
import Lessons from '../data/lessons'
    export default {
        data() {
            return {
                Lessons
            }
        },
    }
</script>

<style lang="scss">
    .LessonList {
        div {
            display: flex;
            justify-content: space-between;

            span.isDelete {
                text-decoration: line-through;
            }
        }
    }
</style>