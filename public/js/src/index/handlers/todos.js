let $createItem = text => {
	let date = new Date()
	let time = date.getTime()
	return {
		id: time,
		addTime: time,
		updateTime: time,
		diplayTime: date.toLocaleString(),
		status: false,
		text
	}
}

let $updateItem = ({ id, ...other }, state) => {
	let date = new Date()
	return state.map(item =>
		item.id === id ?
		Object.assign({}, item, other, {
			updateTime: date.getTime(),
			displayTime: date.toLocaleString()
		}) :
		item
	)
}

let $filterItems = (query, state) => {
	return state.filter(
		item => Object.keys(query).some(key => item[key] !== query[key])
	)
}

export let addItem = text => state => {
	return {
		...state,
		todos: [$createItem(text)].concat(state.todos)
	}
}

export let deleteItem = id => state => {
	return {
		...state,
		todos: state.todos.filter(item => item.id !== id)
	}
}

export let updateItem = data => state => {
	return {
		...state,
		todos: $updateItem(data, state.todos)
	}
}

export let updateItems = data => state => {
	return {
		...state,
		todos: state.todos.map(item => Object.assign({}, item, data))
	}
}

export let deleteItems = query => state => {
	return {
		...state,
		todos: $filterItems(query, state.todos)
	}
}