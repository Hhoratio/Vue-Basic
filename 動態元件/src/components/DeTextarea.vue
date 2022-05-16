<template>
    <label>
        <div>{{title}}</div>
        <textarea :rows="rows" type="text" v-model="content" @input="$emit('update:modelValue', $event.target.value)"/>
    </label>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                Required: true
            },
            rows: {
                type: Number,
                default: 3
            },
            modelValue: null
        },
        data() {
            return {
                content: this.modelValue
            }
        },
        emits: {
            'update:modelValue': null 
        }
    }
</script>

<style lang="scss" scoped>
    label {
        display: flex;
        align-items: center;
        div {
            color: #666;
            width: 100px;
            margin-right: 10px;
        }
        textarea {
            margin-bottom: 10px;
            padding: 5px;
            color: #666;   
            outline: none;
            border: 2px solid #ddd;
        }
    }
</style>