import * as types from '../constants/ActionTypes'

export function addItem({ text , id }) {
    return {
        type: types.ADD_ITEM,
        id,
        text
    }
}

export function deleteItem(id) {
    return {
        type: types.DELETE_ITEM,
        id
    }
}

export function updateItem(data) {
    return {
        type: types.UPDATE_ITEM,
        data
    }
}

export function deleteItems(query) {
	return {
		type: types.DELETE_ITEMS,
		query
	}
}

export function updateItems(data) {
    return {
        type: types.UPDATE_ITEMS,
        data
    }
}