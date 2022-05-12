<template>
    <!-- 
        
        默認情況下，在根元件裡的子元件標籤添加 class 會被放到當前子元件底下 template 最外層標籤裡
        但 vue3 已經修改 template 只能放一個根標籤的設置，所以有時候可能會有多個兄弟標籤
        這時就要在需要套用 class 的標籤上添加 :class='$attrs.class'
     
     -->
    <main></main>
    <section :class="$attrs.class"></section>
    <div style="backgroundColor: #008c8c" :style="[styles, container]">
        houdunren
    </div>
</template>

<script>
    export default {
        data() {
            return {
                styles: {
                    color: 'white',
                    fontSize: '30px',
                    textAlign: 'center'
                }
            }
        },
        computed: {
            container() {
                return {
                    width: '300px',
                    height: '50px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>