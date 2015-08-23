import { createStore, applyMiddleware } from 'redux'
import rootReducers from '../public/js/src/index/reducers'
import db from './db.json'

import React from 'react'
import View from '../public/js/src/index/components/View'
import { stateToProps, dispatchToProps } from '../public/js/src/index/containers/TodoApp'

let store = createStore(rootReducers, { todos: [] })

store.getComponent = () => {
	let props = stateToProps(store.getState())
	let actions = dispatchToProps(() => {})
	return React.renderToString(<View {...props} {...actions} />)
}

export default store