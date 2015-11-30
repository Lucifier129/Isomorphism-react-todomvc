import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import { injectProps } from 'react-props'

@injectProps()
export default class Todos extends React.Component {
	static propTypes = {
		todos: PropTypes.arrayOf(PropTypes.number.isRequired)
	}
	render() {
		console.log('Todos rendering')
		let { todos } = this.props
		return <ul id="todo-list">{
			todos.map(id =>
				<Todo id={ id } key={ id } />
			)
		}</ul>
	}
}