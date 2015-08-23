import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import View from '../components/View'
import * as actions from '../actions'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterTypes'

export let stateToProps = state => {
	let { todos, activeFilter } = state
	return {
		activeFilter,
		todos: todos.filter(todo => {
			switch (activeFilter) {
				case SHOW_ALL:
				return true

				case SHOW_ACTIVE:
				return !todo.status

				case SHOW_COMPLETED:
				return todo.status
			}
		}),
		isAllCompleted: !!todos.length && todos.every(item => item.status),
		todoCount: todos.filter(item => !item.status).length,
		completedCount: todos.filter(item => item.status).length
	}
}

export let dispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(stateToProps, dispatchToProps)(View)