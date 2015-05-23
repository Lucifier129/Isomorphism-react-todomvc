import React from 'react'
import Todo from './todo'

export default class Todos extends React.Component {
	render() {
		let todoList = this.props.todos.map((todo) => <Todo key={todo.id} {...todo} />)
		return <ul id="todo-list">{todoList}</ul>
	}
}