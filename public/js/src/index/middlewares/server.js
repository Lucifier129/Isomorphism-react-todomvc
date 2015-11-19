export let updateTodos = data => state => {
	return {
		...state,
		todos: data.todos
	}
}