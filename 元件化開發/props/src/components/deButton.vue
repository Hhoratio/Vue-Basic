<template>
	<section>
		<!-- v-bind="$attrs" 可以直接繼承所有子元件上所有非 props 的屬性，或者使用動態綁定方式綁定單一的屬性 -->

		<div :class="[type, { disabled: disabled }]"> {{content}} </div>
		<!-- <div :id="$attrs.id" :class="[type, { disabled: disabled }]"> {{content}} </div> -->
		
		<h2 v-bind="$attrs" @click="click"> 按我會觸發父元件傳遞的方法 </h2>

	</section>
	<!-- <button @click="onClick">子元件</button> -->
</template>

<script>
    export default {
		/* 控制根標籤是否繼承非 props 的屬性，默認是 true */
		inheritAttrs: false,


        /* props 是一個單向流，也就是子元件'專門'接收父元件所傳遞的數據。當復原見髓傳遞的值發生變化時，相對的子元件的值也會發生變化 */
		/* 但在子元件裡更改 props 裡的值時，是不會影響父元件所傳遞的(只會作用在子元件裡)，但引用類型例外 */
		/* a(父) 透過 props => b(子)，a 改變=> b 也會跟著變；相反的，b(子) 改變 => a(父) 並不會改變 */

		/* 如果要變成響應數據，一樣要通過 data() 來完成 */
		
		/* props: ['content', 'type', 'disable', 'icon'] */
		/* 如果要對 props 進行設置的話，則使用 object 形式設置*/
		props: {
			click: {
				type: Function
			},
			content: {
				type: String,
				default: '送出',
				
				/* required 要求必須傳 string */
				required: true
			},
			type: {
				type: String,
				default: 'info',

				/* validator 驗證自定義屬性的 value 是否符合要求 */
				validator(v) {
					return ['success', 'danger', 'info'].includes(v);
				}
			},
			disabled: {
				type: Boolean,
				default: false
			},
			icon: {
				type: String
			}
		},
		watch: {
			/* 如果父元件的 content 發生變化，那子元件的響應是數據也要跟著變 */
			content(nv) {
				this.value = nv;
			}
		},
		data() {
			return {
				value: this.content
			}
		},
		methods: {
			onClick() {
				this.value = 'loading...';
				setTimeout(()=> this.value = this.content, 3000)
			}
		}
    }
</script>

<style lang="scss" scoped>
    div {
		color: white;
		display: inline-block;
		padding: 5px 10px;
		border-radius: 10px;
		opacity: .6;
		transition: .3s;
		cursor: pointer;
		margin-right: 10px;
		margin-bottom: 5px;
		&:hover {
			opacity: 1;
		}

		&.info {
			background-color: #bdc3c7;
		}

		&.success {
			background: #008c8c;
		}

		&.danger {
			background-color: #e74c3c;
		}

		&.disabled {
			background-color: #7f8c8d !important;
			cursor: not-allowed;
			opacity: 1;
		}
    }
</style>