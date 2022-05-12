<script>
/* 將子元件引入根元件，並且註冊後才能使用 */
import ClassCompoment from "./components/ClassCompoment.vue";
import LessonList from "./components/LessonList.vue";
import StyleComponent from "./components/StyleComponent.vue";
import IfComponent from "./components/IfComponent.vue";
import vForComponent from "./components/vForComponent.vue";
import EventComponent from "./components/EventComponent.vue";
import InputComponent from "./components/InputComponent.vue";

export default {
  components: { ClassCompoment, LessonList, StyleComponent, IfComponent, vForComponent, EventComponent, InputComponent },
  data() {
  },
}
</script>

<template>
  <!-- <class-compoment /> -->
  <!-- <lesson-list /> -->

   <!-- 子元件也可以設置 class，默認情況下會給定子元件 template 最外層的元素添加 -->
  <!-- <style-component class="hdxj" /> -->

  <!-- <if-component /> -->
  <!-- <v-for-component /> -->
  <!-- <event-component /> -->
  <input-component />
</template>

<style>
  /* 元件樣式，專門針對酖一個元件進行 css 處理的 */
  /* .hd {
    background-color: #008c8c;
    color: white;
    text-align: center;
    top: 60px;
  } */
</style>
