import React from 'react'
import NewTodo from './newTodo'
import Main from './main'
import Filters from './filters'

export default class View extends React.Component {
	render() {
		return (<div>
					<NewTodo />
					<Main
						isAllCompleted={this.props.isAllCompleted}
						todos={this.props.todos} />
					<Filters
						hash={this.props.hash}
						completedCount={this.props.completedCount}
						todoCount={this.props.todoCount} />
				</div>)
	}
}