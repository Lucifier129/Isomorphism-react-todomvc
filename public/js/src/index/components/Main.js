import React, { Component, PropTypes } from 'react'
import Todos from './Todos'

export default class Main extends Component {
	render() {
		let { updateItem, deleteItem, updateItems, todos, isAllCompleted } = this.props
		let toggleAll = e => updateItems({
			status: e.currentTarget.checked
		})
		return (
			<section id="main">
				<input id="toggle-all" type="checkbox" onChange={ toggleAll } checked={ isAllCompleted } />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<Todos todos={ todos } updateItem={ updateItem } deleteItem={ deleteItem } />
			</section>
			)
	}
}

Main.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object.isRequired),
	updateItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired,
	updateItems: PropTypes.func.isRequired,
	isAllCompleted: PropTypes.bool.isRequired
}