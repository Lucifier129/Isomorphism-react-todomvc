import React, { Component, findDOMNode, PropTypes } from 'react'
import classnames from 'classnames'
import { ENTER_KEY, ESCAPE_KEY } from '../constants/KeyCode'

export default class Todo extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			onEdit: false
		}
	}
	checkEditor(input) {
		let text = input.value
		if (text && text !== this.props.text) {
			this.updateItem({ text })
		} else if (!text) {
			this.props.deleteItem()
		}
		this.setState({
			onEdit: false
		})
	}
	handleBlur(e) {
		this.checkEditor(e.currentTarget)
	}
	handleKeyup(e) {
		let { keyCode, currentTarget } = e
		if (keyCode === ENTER_KEY ||  keyCode === ESCAPE_KEY) {
			this.checkEditor(currentTarget)
		}
	}
	handleDblclick() {
		let editor = this.refs.editor
		editor.value = this.props.text
		this.setState({
			onEdit: true
		})
		setTimeout(::editor.focus, 1)
	}
	toggleTodo(e) {
		this.updateItem({
			status: e.currentTarget.checked
		})
	}
	updateItem(options = {}) {
		this.props.updateItem(options)
	}
	render() {
		let { id, text, diplayTime, deleteItem, status } = this.props
		let className = classnames({
			completed: status,
			editing: this.state.onEdit
		})
		return (
			<li key={ id } className={ className } title={ diplayTime }>
				<div className="view">
					<input className="toggle" type="checkbox" onChange={ ::this.toggleTodo } checked={ status } />
					<label onDoubleClick={ ::this.handleDblclick }>{ text }</label>
					<button className="destroy" onClick={ deleteItem }></button>
				</div>
				<input className="edit" onBlur={ ::this.handleBlur } onKeyUp={ ::this.handleKeyup } ref="editor" />
			</li>
			)
	}
}

Todo.propTypes = {
	id: PropTypes.any.isRequired,
	text: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
	updateItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
}
