import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux'
import { bindReducer, setFluxConfig } from 'react-props'
import * as actionCreators from '../actions'
import createLogger from 'redux-logger'
import reducer from '../reducer'
import * as selectors from './selectors'
import match from './match'

let loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  duration: true
})

let finalStoreCreator

if (typeof window !== 'undefined') {
	finalStoreCreator = applyMiddleware(loggerMiddleware)(createStore)
} else {
	finalStoreCreator = createStore
}




export default initialState => {
	let store = finalStoreCreator(bindReducer(reducer), initialState)
	let { dispatch, getState } = store
	let actions = bindActionCreators(actionCreators, store.dispatch)
	setFluxConfig({
		getState,
		actions,
		selectors,
		match
	})
	return store
}