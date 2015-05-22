import React from 'react'
import Todos from './todos'
import actions from '../actions'
export default class Main extends React.Component {
	handleChange(e) {
		actions.toggleAll(e.target.checked)
	}
	render() {
		return (
			<section id="main">
				<input id="toggle-all" type="checkbox" onChange={(e) => this.handleChange(e)} checked={this.props.isAllCompleted} />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<Todos todos={this.props.todos} />
			</section>
			)
	}
}
