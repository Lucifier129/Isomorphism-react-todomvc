import todoDispatcher from './todoDispatcher'
export default {
	addTodo(title) {
		todoDispatcher.dispatch({
			actionType: 'addTodo',
			title: title
		})
	},
	toggleAll(completed) {
		todoDispatcher.dispatch({
			actionType: 'toggleAll',
			completed: completed
		})
	},
	updateTodo(todo) {
		todoDispatcher.dispatch({
			actionType: 'updateTodo',
			todo: todo
		})
	},
	removeTodo(id) {
		todoDispatcher.dispatch({
			actionType: 'removeTodo',
			id: id
		})
	},
	clearCompleted() {
		todoDispatcher.dispatch({
			actionType: 'clearCompleted'
		})
	}
}