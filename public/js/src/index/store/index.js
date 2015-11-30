import { createStore } from 'refer'
import createLogger from 'refer-logger'
import * as handlers from './handlers'
import * as server from './middlewares/server'
import * as restful from './middlewares/restful'
import { setFluxConfig, updater } from 'react-props'
import * as selectors from './selectors'
import match from './match'

let logger = createLogger({
	debug: true
})

let handlerList = []
if (typeof window === 'undefined') {
	handlerList = handlers
} else {
	handlerList = [server, restful, logger, updater, handlers]
}

let store = createStore(handlerList)

let { getState, actions } = store

setFluxConfig({
	getState,
	actions,
	selectors,
	match
})

export default store