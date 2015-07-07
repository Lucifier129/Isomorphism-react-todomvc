import React from 'react'
import {updateTodo, removeTodo} from '../actions'
const ENTER_KEY = 13
const ESCAPE_KEY = 27

export default class Todo extends React.Component {
	constructor() {
		super()
		this.state = {
			onEdit: false
		}
	}
	getClassName() {
		let className = []
		if (this.props.completed) {
			className.push('completed')
		}
		if (this.state.onEdit) {
			className.push('editing')
		}
		return className.join(' ')
	}
	handleBlur(e) {
		let newTitle = e.currentTarget.value.trim()
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
		let keyCode = e.keyCode
		if (keyCode === ENTER_KEY ||  keyCode === ESCAPE_KEY) {
			this.handleBlur(e)
		}
	}
	handleDblclick() {
		let editor = this.refs.editor
		editor.value = this.props.title
		this.setState({
			onEdit: true
		})
		setTimeout(editor.focus.bind(editor), 20)
	}
	toggleTodo(e) {
		this.updateTodo({
			completed: e.currentTarget.checked
		})
	}
	updateTodo(options) {
		updateTodo({
			id: this.props.id,
			title: options.title || this.props.title,
			time: options.time || this.props.time,
			completed: options.completed !== undefined ? options.completed : this.props.completed
		})
	}
	render() {
		return (
			<li key={this.props.key} className={this.getClassName()} title={this.props.time} style={this.props.style}>
				<div className="view">
					<input className="toggle" type="checkbox" onChange={(e) => this.toggleTodo(e)} checked={this.props.completed} />
					<label onDoubleClick={(e) => this.handleDblclick(e)}>{this.props.title}</label>
					<button className="destroy" onClick={() => removeTodo(this.props.id)}></button>
				</div>
				<input className="edit" onBlur={(e) => this.handleBlur(e)} onKeyUp={(e) => this.handleKeyup(e)} ref="editor" />
			</li>
			)
	}
}