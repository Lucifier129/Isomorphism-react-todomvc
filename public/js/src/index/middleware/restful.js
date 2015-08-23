import { API_TODOS } from '../constants/API'
import * as ActionTypes from '../constants/ActionTypes'

export default store => next => action => {
	if (action.type in ActionTypes) {
		fetch(API_TODOS, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
    			'Content-Type': 'application/json'
			},
			body: JSON.stringify(action)
		})
	}
	return next(action)
}