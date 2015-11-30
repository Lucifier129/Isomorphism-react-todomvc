import * as FilterTypes from '../constants/FilterTypes'
import { UPDATE_ITEM } from '../constants/ActionTypes'

let matcher = data => {
	let { action, state, nextState } = data
	switch (true) {
		case FilterTypes.hasOwnProperty(action.type):
			return ['Filters', 'Todos']
		case action.type === UPDATE_ITEM:
			return matchItem(state, nextState)
		default:
			return 'Root'
	}
}

export default matcher

let matchItem = (state, nextState) => {
	for (let i = 0, len = nextState.length; i < len; i += 1) {
		let curTodo = state.todos[i]
		let nextTodo = nextState.todos[i]
		if (curTodo === nextTodo) {
			continue
		}
		if (curTodo.text === nextTodo.text) {
			return 'Root'
		}
		let callback = component => {
			if (component.props.id === nextTodo.id) {
				component.forceUpdate()
			}
		}
		return {
			name: 'Todo',
			callback
		}
	}
}