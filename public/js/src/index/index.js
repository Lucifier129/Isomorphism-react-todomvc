import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import store from './store'

let { updateTodos, filterItems } = store.actions
const initialState = JSON.parse(document.getElementById('initialData').innerHTML)
store.replaceState(initialState)

render(
	<Root />,
	document.getElementById('todoapp')
)


let dispatchFilter = () => filterItems(location.hash)

io().on('change', updateTodos)

document.addEventListener('DOMContentLoaded', dispatchFilter)
window.addEventListener('hashchange', dispatchFilter)