import React from 'react'
import actions from '../actions'
let ENTER_KEY = 13
let ESCAPE_KEY = 27

export default class Todo extends React.Component {
	constructor() {
		super()
		this.state = {
			onEdit: false
		}
	}
	getClassName() {
		var className = []
		if (this.props.completed) {
			className.push('completed')
		}
		if (this.state.onEdit) {
			className.push('editing')
		}
		return className.join(' ')
	}
	handleBlur(e) {
		var newTitle = e.target.value.trim()
		this.setState({
			onEdit: false
		})
		if (newTitle && newTitle !== this.props.title) {
			this.updateTodo({
				title: newTitle,
				time: new Date().toLocaleString()
			})
		} else if (!newTitle) {
			this.removeTodo()
		}
	}
	handleKeyup(e) {
		var keyCode = e.keyCode
		if (keyCode === ENTER_KEY ||  keyCode === ESCAPE_KEY) {
			this.handleBlur(e)
		}
	}
	handleDblclick() {
		var editor = this.refs.editor.getDOMNode()
		editor.value = this.props.title
		this.setState({
			onEdit: true
		})
		setTimeout(editor.focus.bind(editor), 20)
	}
	removeTodo() {
		actions.removeTodo(this.props.id)
	}
	toggleTodo(e) {
		this.updateTodo({
			completed: e.target.checked
		})
	}
	updateTodo(options) {
		actions.updateTodo({
			id: this.props.id,
			title: options.title || this.props.title,
			time: options.time || this.props.time,
			completed: options.completed !== undefined ? options.completed : this.props.completed
		})
	}
	render() {
		return (
			<li className={this.getClassName()} title={this.props.time}>
				<div className="view">
					<input className="toggle" type="checkbox" onChange={(e) => this.toggleTodo(e)} checked={this.props.completed} />
					<label onDoubleClick={(e) => this.handleDblclick(e)}>{this.props.title}</label>
					<button className="destroy" onClick={() => this.removeTodo()}></button>
				</div>
				<input className="edit" onBlur={(e) => this.handleBlur(e)} onKeyUp={(e) => this.handleKeyup(e)} ref="editor" />
			</li>
			)
	}
}