import React from 'react'
import Todos from './todos'
import {toggleAll} from '../actions'
export default class Main extends React.Component {
	render() {
		return (
			<section id="main">
				<input id="toggle-all" type="checkbox" onChange={(e) => toggleAll(e.currentTarget.checked)} checked={this.props.isAllCompleted} />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<Todos todos={this.props.todos} />
			</section>
			)
	}
}
