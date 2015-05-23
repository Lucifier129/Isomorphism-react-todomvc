import React from 'react'
import actions from '../actions'
export default class Filters extends React.Component {
	getClassName(name) {
		return this.props.hash === name ? 'selected' : ''
	}
	getTodoCount() {
		let count = this.props.todoCount
		let text = ''
		if (count > 0) {
			text += count + (count > 1 ? ' items left' : ' item left')
		}
		return text
	}
	getCompletedCount() {
		let count = this.props.completedCount
		return count > 0 ? 'Clear completed (' + count + ')' : ''
	}
	render() {
		return (
			<footer id="footer">
				<span id="todo-count">{this.getTodoCount()}</span>
				<ul id="filters">
					<li>
						<a href="#/" className={this.getClassName('/')}>All</a>
					</li>
					<li>
						<a href="#/active" className={this.getClassName('/active')}>Active</a>
					</li>
					<li>
						<a href="#/completed" className={this.getClassName('/completed')}>Completed</a>
					</li>
				</ul>
				<button id="clear-completed" onClick={actions.clearCompleted}>{this.getCompletedCount()}</button>
			</footer>
			)
	}
}