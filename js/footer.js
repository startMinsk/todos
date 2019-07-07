Vue.component('todo-footer', {
	template: `
		<footer class="footer" v-show="isShowFooter">
			<span class="todo-count"><strong>{{count}}</strong> item left</span>
			<ul class="filters">
				<li>
					<router-link to="/" exact>All</router-link>
				</li>
				<li>
					<router-link to="/active">Active</router-link>
				</li>
				<li>
					<router-link to="/completed">Completed</router-link>
				</li>
			</ul>
			<button class="clear-completed" v-show="isShowClear" @click="clearTodo">Clear completed</button>
		</footer>
	`,
	props: ['list'],
	computed: {
		isShowFooter() {
			return this.list.length > 0
		},
		count() {
			// 未完成的任务的数量
			return this.list.filter(item => !item.flag).length
		},
		isShowClear() {
			return this.list.some(item => item.flag)
		}
	},
	methods: {
		clearTodo() {
			// 清空list中所有的已经完成的任务
			this.$emit('clear-todo')
			// this.list = this.list.filter(item => !item.flag)
		}
	}
})
