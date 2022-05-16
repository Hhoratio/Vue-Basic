<template>
    <div>
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot name="main" />
        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    div {
        border-radius: 5px;
        margin-top: 10px;
        width: 500px;
        border: 1px solid #ddd;
        header, main {
            padding: 10px;
        }
        header {
            border-bottom: 1px solid #ddd;
            background-color: #f3f3f3;
        }
    }
</style>