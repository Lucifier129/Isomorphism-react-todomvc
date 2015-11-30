import * as FilterTypes from '../constants/FilterTypes'
import * as ActionTypes from '../constants/ActionTypes'
import { API_TODOS } from '../constants/API'
import { SERVER_UPDATE } from '../constants/SocketTypes'

let matcher = data => {
	let { action, state, nextState } = data
	fetchByAction(action)
	switch (true) {
		case FilterTypes.hasOwnProperty(action.type):
			return ['Filters', 'Todos']
		case action.type === ActionTypes.UPDATE_ITEM:
			return matchItem(action.data)
		case action.type === SERVER_UPDATE:
			return handleWebSocket(action)
		default:
			return 'Root'
	}
}

export default matcher

let matchItem = ({ id, text }) => {
	if (!text) {
		return 'Root'
	}
	let callback = component => {
		if (component.props.id === id) {
			component.forceUpdate()
		}
	}
	return {
		name: 'Todo',
		callback
	}
}

let fetcded = false
let fetchByAction = action => {
	if (!ActionTypes.hasOwnProperty(action.type) || typeof window === 'undefined') {
		return
	}
	fetch(API_TODOS, {
		method: 'post',
		headers: {
			'Accept': 'application/json',
    		'Content-Type': 'application/json'
		},
		body: JSON.stringify(action)
	})
	fetcded = true
}

let handleWebSocket = action => {
	if (fetcded) {
		fetcded = false
		return
	}
	return 'Root'
}

