import React from 'react'
import { renderToString } from 'react-dom/server'
import Root from '../public/js/src/index/containers/Root'
import createStore from '../public/js/src/index/store'

let store = createStore({ todos: [] })
store.getComponent = () => renderToString(<Root />)

export default store