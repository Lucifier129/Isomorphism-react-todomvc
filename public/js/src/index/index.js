import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import store from './store'

const initialState = JSON.parse(document.getElementById('initialData').innerHTML)
store.replaceState(initialState)

render(
	<Root store={ store } />,
	document.getElementById('todoapp')
)

let { updateTodos, filterItems } = store.actions
let dispatchFilter = () => filterItems(location.hash)

io().on('change', updateTodos)

document.addEventListener('DOMContentLoaded', dispatchFilter)
window.addEventListener('hashchange', dispatchFilter)