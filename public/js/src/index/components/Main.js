import React, { Component, PropTypes } from 'react'
import Todos from './Todos'
import { injectProps } from 'react-props'

@injectProps()
export default class Main extends Component {
	static propTypes = {
		updateItems: PropTypes.func.isRequired,
		isAllCompleted: PropTypes.bool.isRequired
	}
	toggleAll = e => this.props.updateItems({
		status: e.currentTarget.checked
	})
	render() {
		console.log('Main rendering')
		let { toggleAll } = this
		let { updateItem, deleteItem, updateItems, todos, isAllCompleted } = this.props
		return (
			<section id="main">
				<input id="toggle-all" type="checkbox" onChange={ toggleAll } checked={ isAllCompleted } />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<Todos />
			</section>
			)
	}
}