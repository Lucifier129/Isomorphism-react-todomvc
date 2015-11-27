export let stateToProps = state => {
	let { todos, activeFilter } = state
	return {
		activeFilter,
		todos: todos.filter(todo => {
			switch (activeFilter) {
				case 'SHOW_ALL':
				return true

				case 'SHOW_ACTIVE':
				return !todo.status

				case 'SHOW_COMPLETED':
				return todo.status
			}
		}),
		isAllCompleted: !!todos.length && todos.every(item => item.status),
		todoCount: todos.filter(item => !item.status).length,
		completedCount: todos.filter(item => item.status).length
	}
}


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

export let Todos = (state, actions, props) => {
	let { todos, activeFilter } = state
	return {
		...actions,
		todos: todos.filter(todo => {
			switch (activeFilter) {
				case 'SHOW_ALL':
				return true

				case 'SHOW_ACTIVE':
				return !todo.status

				case 'SHOW_COMPLETED':
				return todo.status
			}
		})
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