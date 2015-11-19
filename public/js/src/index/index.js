import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import storeCreator from './store'
import { SERVER_UPDATE } from './constants/SocketTypes'
import { FILTER_ITEMS } from './constants/FilterTypes'

const initialState = JSON.parse(document.getElementById('initialData').innerHTML)
const store = storeCreator(initialState)

render(
	<Root store={ store } />,
	document.getElementById('todoapp')
)

io().on('change', state => store.dispatch({
	type: SERVER_UPDATE,
	state
}))

let dispatchFilter = () => store.dispatch({
	type: FILTER_ITEMS,
	active: location.hash
})

document.addEventListener('DOMContentLoaded', dispatchFilter)
window.addEventListener('hashchange', dispatchFilter)