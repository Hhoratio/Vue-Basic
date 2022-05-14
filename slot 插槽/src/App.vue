<template>
	<div>
		<!-- <card :content="content"> -->
			<!-- 這裡 button 的作用域是當前的 App.vue -->
			<!-- <button @click="show">按鈕</button> -->
			<!-- <button>按鈕</button> -->
		<!-- </card> -->

		<!-- <card> -->
			<!-- <template v-slot:header>社區小站</template>
			<template #main>後盾人，人人做後盾</template>
			<template #footer>
				<button>訂閱會員</button>
				<button>發表文章</button>
			</template> -->
		<!-- </card> -->
		<lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson">
			<!-- #btn="slotProps" 可以接到整個 object~，也可以使用解構 -->
			<template #btn="{ id }">
				<button @click="del(id)">刪除</button>	
			</template>
		</lesson>
	</div>
</template>

<script>
	// import Card from './components/Card.vue'
	// import DeButton from './components/DeButton.vue'
	import Lesson from './components/lesson.vue'
	import lessons from './data/lessons'
	export default {
		components: { Lesson },
		data() {
			return {
				lessons
			}
		},
		methods: {
			del(id) {
				const index = this.lessons.findIndex(lesson => lesson.id == id);
				this.lessons.splice(index, 1) 
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>