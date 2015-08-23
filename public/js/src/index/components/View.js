import React, { Component, PropTypes } from 'react'
import NewTodo from './NewTodo'
import Main from './Main'
import Filters from './Filters'

export default class View extends Component {
	render() {
		let {
			addItem, updateItem, deleteItem, updateItems, deleteItems,
			todos, activeFilter, isAllCompleted, todoCount, completedCount
		} = this.props
		return (<div>
					<NewTodo addItem={ addItem } />
					<Main
						updateItem={ updateItem }
						deleteItem={ deleteItem }
						updateItems={ updateItems }
						isAllCompleted={ isAllCompleted }
						todos={ todos } />
					<Filters
						activeFilter={ activeFilter }
						deleteItems={ deleteItems }
						completedCount={ completedCount }
						todoCount={ todoCount } />
				</div>)
	}
}

View.propTypes = {
	addItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired,
	updateItem: PropTypes.func.isRequired,
	deleteItems: PropTypes.func.isRequired,
	updateItems: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.object.isRequired),
	todoCount: PropTypes.number.isRequired,
	completedCount: PropTypes.number.isRequired,
	activeFilter: PropTypes.string.isRequired
}