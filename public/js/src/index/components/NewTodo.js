import React, { Component, PropTypes } from 'react'
import { injectProps } from 'react-props'

const ENTER_KEY = 13
const ESCAPE_KEY = 27

@injectProps()
export default class NewTodo extends Component {
	static propTypes = {
		addItem: PropTypes.func.isRequired
	}
	handleBlur = e => {
		this.checkInput(e.currentTarget)
	}
	handleKeyup = e => {
		let keyCode = e.keyCode
		if (keyCode === ENTER_KEY || keyCode === ESCAPE_KEY) {
			this.checkInput(e.currentTarget)
		}
	}
	checkInput(input) {
		let title = input.value
		if (title) {
			this.props.addItem(title)
			input.value = ''
		}
	}
	render() {
		return (
			<header id="header">
				<h1>todos</h1>
				<input
					id="new-todo"
					placeholder="What needs to be done?"
					onBlur={ this.handleBlur }
					onKeyUp={ this.handleKeyup } />
			</header>
			)
	}
}


