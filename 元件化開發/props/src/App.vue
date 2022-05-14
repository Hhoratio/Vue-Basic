<template>

  <!-- 非 props 的屬性默認情況下會自動添加到子元件裡的根標籤上，若是不想自動繼承的話。就要在子元件添加 inheritAttrs: false -->
  <de-button :content="submit" type="success" id="xj" class="hd" data="test" :click="show"/>
  <!-- <de-button content="刪除" type="danger" icon="@" /> -->
  <br />
  <!-- <button @click="submit = '向軍大叔'">父組件</button> {{submit}} -->
  <!-- <de-button content="反饋" /> -->
  <!-- <de-button content="編輯" :disabled="true" /> -->

  <!-- 批量設置 props 使用 v-bind="{}" -->
  <!-- <de-button v-bind="{content: '批量傳遞 props', type: 'success'}" /> -->

</template>

<script>
  import deButton from './components/deButton.vue'
  export default {
    components: { deButton },
    data() {
      return {
        submit: '保存送出'
      }
    },
    methods: {
      show() {
        alert(`我是父元件的方法，但我要透過子元件使用 ~`)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>