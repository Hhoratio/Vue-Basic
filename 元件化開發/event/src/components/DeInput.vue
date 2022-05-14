<template>
    <div>
        <input type="text" :value="content" @input="input"> 子元件 {{content}}
    </div>
</template>

<script>
    export default {
        props:['modelValue'],
        emits: ['update:modelValue'],
        data() {
            return {
                content: this.modelValue
            }
        },
        methods: {
            input(e) {
                this.content = e.target.value
                this.$emit('update:modelValue', this.content)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>