import React, { Component, PropTypes } from 'react'
import Todos from './Todos'
import { injectProps } from 'react-props'

@injectProps()
export default class Main extends Component {
	render() {
		let { updateItems, isAllCompleted } = this.props
		let toggleAll = e => updateItems({
			status: e.currentTarget.checked
		})
		return (
			<section id="main">
				<input id="toggle-all" type="checkbox" onChange={ toggleAll } checked={ isAllCompleted } />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<Todos />
			</section>
			)
	}
}

Main.propTypes = {
	updateItems: PropTypes.func.isRequired,
	isAllCompleted: PropTypes.bool.isRequired
}