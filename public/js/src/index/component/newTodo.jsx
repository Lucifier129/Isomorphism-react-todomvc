import React from 'react'
import actions from '../actions'
let ENTER_KEY = 13
let ESCAPE_KEY = 27
export default class NewTodo extends React.Component {
	handleBlur(e) {
		var title = e.target.value.trim()
		if (title) {
			actions.addTodo(title)
			e.target.value = ''
		}
	}
	handleKeyup(e) {
		var keyCode = e.keyCode
		if (keyCode === ENTER_KEY || keyCode === ESCAPE_KEY) {
			this.handleBlur(e)
		}
	}
	render() {
		return (
			<header id="header">
				<h1>todos</h1>
				<input
					id="new-todo"
					placeholder="What needs to be done?"
					onBlur={(e) => this.handleBlur(e)}
					onKeyUp={(e) => this.handleKeyup(e)}
					autofocus />
			</header>
			)
	}
}