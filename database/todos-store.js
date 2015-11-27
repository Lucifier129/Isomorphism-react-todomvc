import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'refer'
// import * as handlers from '../public/js/src/index/handlers'
import Root from '../public/js/src/index/containers/Root'
// import * as selectors from '../public/js/src/index/selectors'
// import { createInjector, updateState } from 'react-props'
import store from '../public/js/src/index/store'

// let injector = createInjector(selectors)
// let store = createStore([injector, handlers], {
// 	activeFilter: 'SHOW_ALL',
// 	todos: []
// })

store.getComponent = () => renderToString(<Root />)
let initialState = {
	todos: [],
	activeFilter: 'SHOW_ALL'
}
store.replaceState(initialState)
export default store