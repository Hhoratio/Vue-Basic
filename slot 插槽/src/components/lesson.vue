<template>
    <div>
        {{ lesson.title }}
        <slot :id="lesson.id" name="btn" />
    </div>
</template>

<script>
    export default {
        props:['lesson'],
    }
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        justify-content: space-between;
        width: 600px;
        margin: auto;
        border: solid 1px #ddd;
        margin-bottom: 10px;
        padding: 5px 10px;
    }
</style>