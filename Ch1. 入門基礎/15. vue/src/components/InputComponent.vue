<template>
    <!-- 
        input 如果是單純的文本框，再 v-nodel 雙向綁定後，就不要使用 value 屬性了
        而是通過綁定的數據去添加初始值 (value)。使用場景如修改、編輯文章等
        需要返回上一次的數據    
    -->
    <input type="text" v-model="form.title">
    <hr />
    
    <!-- 文本域，使用大致跟 input: text 一樣 -->
    <textarea v-model="form.contents"></textarea>
    <hr />

    <!-- 單/多選框 checkbox -->
    <!-- 如果 v-model 綁定的是 checkbox 的話，那雙向變化的值就是 true or false -->
    <!-- 若想改變 true / false 的值，就可以用 true-value / false-value 去修改 -->
    <!-- 而 form 裡面的初始值也必須是修改的值，而不是 true / false -->
    <!-- <input type="checkbox" v-model="form.agree" true-value="yes" false-value="no"> 同意 -->
    <input type="checkbox" v-model="form.agree"> 同意
    <hr />

    <!-- 多選框 checkbox -->
    <!-- 多選框的情況下，就必須給定 value 值，否則勾選的值會變成默認 boolean 值  -->
    <!-- with value -->
    <label v-for="lesson in lessons" :key="lesson.title">
        <input type="checkbox" v-model="form.lesson" :value="lesson.value"> {{lesson.title}}
    </label>
    <hr />

    <!-- 單選框 radio -->
    <!-- <input type="radio" v-model="form.sex" value="1"> 男 -->
    <!-- <input type="radio" v-model="form.sex" value="2"> 女 -->

    <!-- value 動態綁定的話，傳入的就是表達式(number)，如果不是動態綁定的話 就是一個 string -->
    <!-- 使用動態綁定 value 還是一般 value 取決於後端數據庫的設置在去做變化 -->
    <input type="radio" v-model="form.sex" :value="1"> 男
    <input type="radio" v-model="form.sex" :value="2"> 女
    <hr />

    <!-- select 下拉選單 -->
    <select v-model="form.city">
        <!-- 如果是多選的話，就將 form 裡的 city 改成 Array，再將 select 添加 multiple 屬性 -->
        <option value="">=== 請選擇城市 ===</option>
        <option value="Taipei">台北</option>
        <option value="Taichung">台中</option>
        <option value="Tainan">台南</option>
    </select>
    <hr />
    {{form}}
</template>

<script>
    const lessons = [
        {title: "JavaScrip", value: "JavaScrip"}, 
        {title: 'HTML5', value: 'HTML5'}, 
        {title: 'CSS3', value: 'CSS3'}, 
        {title: "PHP", value: "PHP"}, 
        {title: 'Linux', value: 'Linux'}
        ];

    const form = {title: 'houdunren.com', contents: '後盾人，人人做後盾', agree: false, lesson: [], sex: 1, city: ''};
    export default {
       data() {
           return {
               form,
               lessons
           }
       }, 
    }
</script>

<style lang="scss" scoped>

</style>