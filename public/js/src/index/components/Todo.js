import React, { Component, findDOMNode, PropTypes } from 'react'
import classnames from 'classnames'
import { ENTER_KEY, ESCAPE_KEY } from '../constants/KeyCode'
import { injectProps } from 'react-props'
import pureRender from '../pureRenderMixin'

@injectProps()
@pureRender
export default class Todo extends Component {
	static propTypes = {
		id: PropTypes.any.isRequired,
		text: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired,
		updateItem: PropTypes.func.isRequired,
		deleteItem: PropTypes.func.isRequired
	}
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
			this.destroy()
		}
		this.setState({
			onEdit: false
		})
	}
	destroy = () => {
		this.props.deleteItem(this.props.id)
	}
	handleBlur = (e) => {
		this.checkEditor(e.currentTarget)
	}
	handleKeyup = (e) => {
		let { keyCode, currentTarget } = e
		if (keyCode === ENTER_KEY ||  keyCode === ESCAPE_KEY) {
			this.checkEditor(currentTarget)
		}
	}
	handleDblclick = () => {
		let editor = this.refs.editor
		editor.value = this.props.text
		this.setState({
			onEdit: true
		})
		setTimeout(() => editor.focus(), 0)
	}
	toggleTodo = (e) => {
		this.updateItem({
			status: e.currentTarget.checked
		})
	}
	updateItem(options = {}) {
		this.props.updateItem({
			id: this.props.id,
			...options
		})
	}
	render() {
		let { id, text, displayTime, status } = this.props
		let className = classnames({
			completed: status,
			editing: this.state.onEdit
		})
		console.log(`Todo: [${ text }] rendering`)
		return (
			<li key={ id } className={ className } title={ displayTime }>
				<div className="view">
					<input className="toggle" type="checkbox" onChange={ this.toggleTodo } checked={ status } />
					<label onDoubleClick={ this.handleDblclick }>{ text }</label>
					<button className="destroy" onClick={ this.destroy }></button>
				</div>
				<input className="edit" onBlur={ this.handleBlur } onKeyUp={ this.handleKeyup } ref="editor" />
			</li>
			)
	}
}
