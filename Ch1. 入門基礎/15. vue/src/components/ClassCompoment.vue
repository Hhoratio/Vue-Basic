<template>
    <div class="ClassComponent">
        <!-- 
            動態添加 class
            :class= '' 可以為物件形式，陣列 ( 管理多個 object) 等
            -->
       <div class="hd" :class="{ active }">hdcms</div>
       <div :class="[{xj}]">向軍大叔</div>

        <!-- 直接寫表達式，數據就必須是 object 或是一個 computed 屬性 -->
       <div :class="[hdr]">向軍大叔</div>
       
       <!-- computed 屬性 -->
       <div :class="[change]">向軍大叔</div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: true,
                xj:true,
                hdr: {
                    active: true,
                    xj: true
                }
            }
        },
        computed: {
            change() {
                return {
                    hdcms: true
                }
            }
        }
    }

</script>

<!-- 
    scoped 類似 block 的概念，這裡所寫的 style 只會作用在當前的元件上 
    就算其他組件有相同的 class or id 也不會影響其他的元件，其他元件也不影響當前元件
    但 scoped 會有些許上的性能開銷。

    scoped 會在當前作用的的標籤上，添加自定義屬性，並且以屬性值取值 .hd[data-v-.....]

    基本上如果不使用 scope 就會在元件上再套一層 div 專門定義 class 也一樣擁有 block (作用域) 的概念
-->
<style lang="scss">
    .ClassComponent {
        .hd {
            color: #008c8c
        }

        .active {
            border: 3px solid #ddd;
        }

        .xj {
            border: 3px solid #aaf;
        }

        .hdcms {
            background-color: red;
        }
    }
</style>