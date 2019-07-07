;(function(window) {
	const router = new VueRouter({
		linkActiveClass: 'selected',
		linkExactActiveClass: 'selected'
	})
	const vm = new Vue({
		router,
		el: '.todoapp',
		data: {
			list: [
				{ id: 1, name: '找女朋友', flag: false },
				{ id: 2, name: '找男朋友', flag: true },
				{ id: 3, name: '分手', flag: true }
			]
		},
		methods: {
			addTodo(todoName) {
				this.list.unshift({
					id: +new Date(),
					name: todoName,
					flag: false
				})
			},
			delTodo(id) {
				this.list = this.list.filter(item => item.id !== id)
			},
			clearTodo() {
				// 清除已经完成的任务
				this.list = this.list.filter(item => !item.flag)
			}
		},
		// 给子组件的数据应该根据list和  路由中的路径进行计算
		// 如果路径是 / , 显示所有的数据
		// 如果路径是 /active  显示所有未完成的数据
		// 如果路径是个 /completed 显示所有完成的数据
		computed: {
			showList() {
				const path = this.$route.path
				if (path === '/') {
					return this.list
				} else if (path === '/active') {
					return this.list.filter(item => !item.flag)
				} else if (path === '/completed') {
					return this.list.filter(item => item.flag)
				}
			}
		}
	})

	window.vm = vm
})(window)
