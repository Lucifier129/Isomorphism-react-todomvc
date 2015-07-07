import React from 'react'
import {addTodo} from '../actions'
const ENTER_KEY = 13
const ESCAPE_KEY = 27
export default class NewTodo extends React.Component {
	handleBlur(e) {
		let title = e.currentTarget.value.trim()
		if (title) {
			addTodo(title)
			e.currentTarget.value = ''
		}
	}
	handleKeyup(e) {
		let keyCode = e.keyCode
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
					autoFocus={true} />
			</header>
			)
	}
}