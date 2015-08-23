import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class Todos extends React.Component {
	render() {
		let { deleteItem, updateItem, todos } = this.props
		return <ul id="todo-list">{
			todos.map(todo =>
				<Todo
				key={ todo.id }
				deleteItem={ () => deleteItem(todo.id) }
				updateItem={ data => updateItem({
					...data,
					id: todo.id
				})}
				{...todo} />
			)
		}</ul>
	}
}

Todos.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object.isRequired),
	updateItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
}