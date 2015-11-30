import * as ActionTypes from '../handlers/todos'

const API_TODOS = '/todos'

export let WILL_UPDATE = data => {
	let { key, value } = data
	if (ActionTypes.hasOwnProperty(key)) {
		fetch(API_TODOS, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ key, value })
		})
	}
	return data
}