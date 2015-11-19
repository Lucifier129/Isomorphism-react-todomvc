import { createStore } from 'refer'
import React from 'react'
import { renderToString } from 'react-dom/server'
import * as handlers from '../public/js/src/index/handlers'
import Root from '../public/js/src/index/containers/Root'
import db from './db.json'

let store = createStore(handlers, {
	todos: [],
	activeFilter: 'SHOW_ALL'
})

store.getComponent = () => renderToString(<Root store={store} />)

export default store