import React, { Component, PropTypes } from 'react'
import { ENTER_KEY, ESCAPE_KEY } from '../constants/KeyCode'

export default class NewTodo extends Component {
	checkInput(input) {
		let title = input.value
		if (title) {
			this.props.addItem(title)
			input.value = ''
		}
	}
	handleBlur(e) {
		this.checkInput(e.currentTarget)
	}
	handleKeyup(e) {
		let keyCode = e.keyCode
		if (keyCode === ENTER_KEY || keyCode === ESCAPE_KEY) {
			this.checkInput(e.currentTarget)
		}
	}
	render() {
		return (
			<header id="header">
				<h1>todos</h1>
				<input
					id="new-todo"
					placeholder="What needs to be done?"
					onBlur={ ::this.handleBlur }
					onKeyUp={ ::this.handleKeyup } />
			</header>
			)
	}
}

NewTodo.propTypes = {
	addItem: PropTypes.func.isRequired
}


