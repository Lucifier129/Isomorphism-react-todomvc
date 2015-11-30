import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { injectProps } from 'react-props'

@injectProps()
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
	getClassName = filterType => {
		return classnames({
			selected: this.props.activeFilter === filterType
		})
	}
	clearCompleted = () => this.props.deleteItems({
		status: true
	})
	render() {
		let { clearCompleted, getClassName } = this 
		return (
			<footer id="footer">
				<span id="todo-count">{ this.getTodoCount() }</span>
				<ul id="filters">
					<li>
						<a href="#/" className={ getClassName('SHOW_ALL') }>All</a>
					</li>
					<li>
						<a href="#/active" className={ getClassName('SHOW_ACTIVE') }>Active</a>
					</li>
					<li>
						<a href="#/completed" className={ getClassName('SHOW_COMPLETED') }>Completed</a>
					</li>
				</ul>
				<button id="clear-completed" onClick={ clearCompleted }>{ this.getCompletedCount() }</button>
			</footer>
			)
	}
}
