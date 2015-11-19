import { createStore } from 'refer'
import createLogger from 'refer-logger'
import * as handlers from '../handlers'
import * as server from '../middlewares/server'
import restful from '../middlewares/restful'
import { createRecord } from '../middlewares/record'

let record = createRecord(['updateTodos'])

let logger = createLogger({
	debug: true
})
let store = createStore([server, restful, logger, record.recorder, handlers])

record.setStore(store)

window.record = record

export default store