import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, DELETE_ITEMS, UPDATE_ITEMS } from '../constants/ActionTypes'
import { SERVER_UPDATE } from '../constants/SocketTypes'

let createItem = ({text, id}) => {
	let date = new Date()
	let time = date.getTime()
	return {
		id,
		addTime: time,
		updateTime: time,
		displayTime: date.toLocaleString(),
		status: false,
		text
	}
}

let updateItem = ({ id, ...other }, state) => {
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

let filterItems = (query, state) => {
	return state.filter(
		item => Object.keys(query).some(key => item[key] !== query[key])
	)
}

export default (state = [], action) => {
	switch (action.type) {
		case ADD_ITEM:
		return [createItem(action), ...state]

		case DELETE_ITEM:
		return state.filter(item => item.id !== action.id)

		case UPDATE_ITEM:
		return updateItem(action.data, state)

		case UPDATE_ITEMS:
		return state.map(item => Object.assign({}, item, action.data))

		case DELETE_ITEMS:
		return filterItems(action.query, state)

		case SERVER_UPDATE:
		return action.state.todos

		default:
		return state
	}
}