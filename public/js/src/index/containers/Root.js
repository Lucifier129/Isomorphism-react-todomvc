import React, { Component, PropTypes } from 'react'
import NewTodo from '../components/NewTodo'
import Main from '../components/Main'
import Filters from '../components/Filters'
import { injectProps } from 'react-props'

@injectProps()
export default class Root extends Component {
	render() {
		return (<div>
					<NewTodo />
					<Main />
					<Filters />
				</div>)
	}
}