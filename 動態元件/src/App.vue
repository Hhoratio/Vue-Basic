<template>
		<main>
			<div v-for="component in components" :key="component.id" :class="{ active: currentComponent == component.name }" @click="current(component)">{{component.title}}</div>
		</main>

		<component :is="currentComponent" />
		<!-- <input type="text" v-model="teacher"> -->
		<!-- {{teacher}} -->
</template>

<script>
	import MasterCard from './components/MasterCard.vue'
	import Visa from './components/Visa.vue'
	import { computed } from 'vue'
	import config from './config.js'
	export default {
		components: { MasterCard, Visa },

		/* 如果數據是固定的值，可以直接寫 provide" {key: value} */
		/* 如果傳遞的數據是響應式數據，也就是 data 裡的值的話，就要以函數方式傳遞 */
		// provide: {webname: '向軍大叔'},
		provide() {
			return { webname: computed(() => this.teacher), config: this.config}
		},
		data() {
			return {
				config,
				teacher: '向軍大叔',
				currentComponent: 'MasterCard',
				components: [
					{id: 1, title: '萬事達卡', name: 'MasterCard'},
					{id: 2, title: '維薩卡', name: 'Visa'}
				]
			}
		},
		methods: {
			current(component) {
				this.currentComponent = component.name
			}
		},
	}
</script>

<style lang="scss" scoped>
	main {
		display: flex;
		div {
			cursor: pointer;
			border: solid 1px #ddd;
			padding: 10px;
			margin-right: 20px;
			&.active {
				background-color: #27ae60;
				color: #fff;
			}
		}
	}
</style>
