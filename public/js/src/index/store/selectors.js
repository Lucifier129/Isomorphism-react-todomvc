export let NewTodo = (state, actions, props) => {
	return actions
}

export let Main = (state, actions, props) => {
	let { todos } = state
	return {
		...actions,
		isAllCompleted: !!todos.length && todos.every(item => item.status),
	}
}

export let Todo = (state, actions, props) => {
	let todo = state.todos.filter(todo => todo.id === props.id)[0]
	let { deleteItem, updateItem } = actions 
	return {
		updateItem,
		deleteItem,
		...todo
	}
}

export let Todos = (state, actions, props) => {
	let { activeFilter } = state
	let todos = state.todos.filter(todo => {
		switch (activeFilter) {
			case 'SHOW_ALL':
			return true

			case 'SHOW_ACTIVE':
			return !todo.status

			case 'SHOW_COMPLETED':
			return todo.status
		}
	}).map(todo => todo.id)
	return {
		...actions,
		todos
	}
}

export let Filters = (state, actions, props) => {
	let { todos, activeFilter } = state
	let todoCount = todos.filter(item => !item.status).length
	activeFilter = activeFilter || 'SHOW_ALL'
	return {
		...actions,
		activeFilter,
		todoCount,
		completedCount: todos.length - todoCount
	}
}