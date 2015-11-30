import React, { Component, PropTypes } from 'react'
import { ENTER_KEY, ESCAPE_KEY } from '../constants/KeyCode'
import { injectProps } from 'react-props'

@injectProps()
export default class NewTodo extends Component {
	static propTypes = {
		addItem: PropTypes.func.isRequired
	}
	shouldComponentUpdate() {
		return false
	}
	checkInput(input) {
		let text = input.value
		if (text) {
			this.props.addItem({
				id: Date.now(),
				text
			})
			input.value = ''
		}
	}
	handleBlur = (e) => {
		this.checkInput(e.currentTarget)
	}
	handleKeyup = (e) => {
		let keyCode = e.keyCode
		if (keyCode === ENTER_KEY || keyCode === ESCAPE_KEY) {
			this.checkInput(e.currentTarget)
		}
	}
	render() {
		console.log('NewTodo rendering')
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


