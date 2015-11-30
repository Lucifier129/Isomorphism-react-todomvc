import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterTypes'
import { injectProps } from 'react-props'
import pureRender from '../pureRenderMixin'

@injectProps()
@pureRender
export default class Filters extends Component {
	static propTypes = {
		deleteItems: PropTypes.func.isRequired,
		todoCount: PropTypes.number.isRequired,
		completedCount: PropTypes.number.isRequired,
		activeFilter: PropTypes.string.isRequired
	}
	getTodoCount() {
		let { todoCount } = this.props
		return `${ todoCount } item${ todoCount > 1 ? 's' : '' } left`
	}
	getCompletedCount() {
		let { completedCount } = this.props
		return completedCount > 0 ? 'Clear completed (' + completedCount + ')' : ''
	}
	getClassName = filterType => classnames({
		selected: this.props.activeFilter === filterType
	})
	clearCompleted = () => this.props.deleteItems({
		status: true
	})
	render() {
		console.log('Filters rendering')
		let { getClassName, clearCompleted } = this
		return (
			<footer id="footer">
				<span id="todo-count">{ this.getTodoCount() }</span>
				<ul id="filters">
					<li>
						<a href="#/" className={ getClassName(SHOW_ALL) }>All</a>
					</li>
					<li>
						<a href="#/active" className={ getClassName(SHOW_ACTIVE) }>Active</a>
					</li>
					<li>
						<a href="#/completed" className={ getClassName(SHOW_COMPLETED) }>Completed</a>
					</li>
				</ul>
				<button id="clear-completed" onClick={ clearCompleted }>{ this.getCompletedCount() }</button>
			</footer>
			)
	}
}
