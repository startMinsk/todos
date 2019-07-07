Vue.component('todo-header', {
  template: `
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" v-model="todoName" @keyup.enter="add">
    </header>
  `,
  // 子组件获取到任务名字
  data() {
    return {
      todoName: ''
    }
  },
  methods: {
    add() {
      // 需要把todoName传递父组件
      console.log(this.todoName)
      // 触发了父组件注册事件
      this.$emit('add-todo', this.todoName)
      // 清空子组件的内容
      this.todoName = ''
    }
  }
})