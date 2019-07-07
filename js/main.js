Vue.component('todo-main', {
	template: `
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li v-for="item in list" :key="item.id" :class="{ completed: item.flag, editing: item.id === now }">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.flag">
            <label @dblclick="showEdit(item.id)">{{item.name}}</label>
            <button class="destroy" @click="delTodo(item.id)"></button>
          </div>
          <input class="edit" v-model="item.name" @keyup.enter="updateTodo">
        </li>
      </ul>
    </section>
  `,
	props: ['list'],
	methods: {
		delTodo(id) {
			// console.log(id)
			// 触发了del-todo这个事件
			this.$emit('del-todo', id)
		},
		showEdit(id) {
			console.log('哈哈')
			console.log(id)
			this.now = id
			console.log(this.now)
		},
		updateTodo() {
			this.now = -1
		}
	},
	data() {
		return {
			now: -1
		}
	}
})
