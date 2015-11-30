import React, { Component } from 'react'
import { injectProps } from 'react-props'
import NewTodo from '../components/NewTodo'
import Main from '../components/Main'
import Filters from '../components/Filters'

@injectProps()
export default class Root extends Component {
	render() {
		console.log('Root rendering')
		return (
		<div>
			<NewTodo />
			<Main />
			<Filters />
		</div>
		)
	}
}