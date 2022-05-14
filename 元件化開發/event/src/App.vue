<template>
	<div class="course">
		<course v-for="course in courseData" :key="course.id" :course="course" @del="del" 
		v-model:title.toupper.substr_5="course.title"
		v-model:price="course.price" />
		
		<!-- v-model 雙向綁定 -->
		<!-- <input type="text" v-model="title"> {{title}} --> 

		<!-- oninput 當輸入框發生變化 就會調用一次 oninput  -->
		<!-- <input type="text" :value="title" @input="input"> {{title}} -->
	</div>

	<!-- <de-input :value="title" @update:value="update" /> -->
	<!-- 這裡的 $event 就是子元件調用自定義事件 $emit 所傳入的參數。此處就是子元件的 this.content -->

	<!-- <de-input :value="title" @update:value="title = $event" /> -->
	<!-- 簡化 -->
	<!-- <de-input v-model:value="title" /> -->
	<!-- 簡化 props 改成 modelValue 子組件也必須更改-->
	<!-- <de-input v-model:modelValue="title" /> -->
	<!-- 簡化 如果 props 傳的是 modelValue 的話，又可以省略掉-->
</template>

<script>
	import './assets/global.scss'
	import Course from './components/Course.vue'
	import DeInput from './components/DeInput.vue'
    import courseData from './data/course'
    export default {
		components: { Course, DeInput },
		data() {
			return {
				courseData,
				title: '後盾人'
			}
		},
		methods: {
			update(value) {
				this.title = value;
			},
			input(e) {
				this.title = e.target.value;
			},
			del(id) {
				const index = this.courseData.findIndex(c => c.id == id);
				this.courseData.splice(index, 1);
			}
		}
    }
</script>

<style lang="scss" scoped>
	.course {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
</style>