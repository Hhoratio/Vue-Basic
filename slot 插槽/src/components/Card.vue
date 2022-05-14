<template>
    <div>
        <!-- <slot name="default" > 默認情況下，slot 也有 name 為 default -->
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot name="main" />
        </main>
        <footer>
            <slot name="footer" />
        </footer>
    </div>
</template>

<script>
    export default {
        props: ['content'],
    }
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid #ddd;
        header, main, footer {
            padding: 20px;
        }       
        main {
            border-width: 1px 0;
            border-style: solid;
            border-color: #ddd;
        }
    }
</style>