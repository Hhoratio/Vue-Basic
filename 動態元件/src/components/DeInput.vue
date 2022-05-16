<template>
    <label>
        <div>{{title}}</div>
        <input type="text" v-model="content" />
    </label>
    <!-- {{webname}} -->
</template>

<script>
    export default {
        props: ['title', 'modelValue'],
        emits: ['update:modelValue'],
        inject: ['webname'],
        data() {
            return {
                content: this.modelValue,
            }
        },
        watch: {
            content(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    label {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        div {
            width: 100px;
            font-size: 16px;
            color: #666;
            margin-right: 10px;
        }

        input {
            outline: none;
            padding: 5px 5px;
            border: 2px solid #ddd;
            color: #666;
        }
    }
</style>