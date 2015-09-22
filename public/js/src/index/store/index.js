import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import restfulMiddleware from '../middleware/restful'
import rootReducers from '../reducers'

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  duration: true
})

const finalStoreCreator = applyMiddleware(
	loggerMiddleware,
	restfulMiddleware
)(createStore)

export default initialState => {
	return finalStoreCreator(rootReducers, initialState)
}