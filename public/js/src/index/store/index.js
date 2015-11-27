import { createStore } from 'refer'
import createLogger from 'refer-logger'
import * as handlers from '../handlers'
import * as server from '../middlewares/server'
import * as restful from '../middlewares/restful'
import { config, updater } from 'react-props'
import * as selectors from '../selectors'
import matcher from '../matchers'

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

config({
	getState,
	actions,
	selectors,
	matcher
})

export default store