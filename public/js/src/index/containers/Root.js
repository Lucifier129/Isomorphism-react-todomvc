import React, { Component, PropTypes } from 'react'
import View from '../components/View'
import { stateToProps } from '../selectors'
import * as ActionTypes from '../handlers/todos'

export default class Root extends Component {
	componentDidMount() {
		let { store } = this.props
		this.unbind = store.subscribe(() => this.forceUpdate())
	}
	componentWillUnmount() {
		this.unbind()
	}
	render() {
		let { getState, actions } = this.props.store
		return <View {...stateToProps(getState())} {...actions} />
	}
}