import { constants } from 'refer'

let { DID_UPDATE } = constants

export let createRecord = (filters) => {
	let store
	let storage = []
	let max = 10
	let index = 0
	let setStore = value => store = value
	let replaceState = silent => {
		if (store) {
			store.replaceState(storage[index].currentState, silent)
		}
	}
	let setMax = value => {
		if (typeof value === 'number' && value > 0) {
			max = value
		}
	}
	let add = data => {
		if (filters.indexOf(data.key) !== -1) {
			return data
		}
		storage.push(data)
		if (storage.length > max) {
			storage.shift()
		}
		index = storage.length - 1
		return data
	}
	let clean = () => {
		storage = [storage[index]]
		index = 0
		replaceState()
	}
	let back = () => {
		if (index > 0) {
			index--
			replaceState()
		}
		return index
	}
	let forward = () => {
		if (index < storage.length - 1) {
			index++
			replaceState()
		}
		return index
	}
	let go = target => {
		if (target >= 0 && target <= storage.length - 1) {
			index = target
			replaceState()
		}
		return index
	}
	let replace = (i, data) => {
		if (storage[i]) {
			strage.splice(i, 1, data)
		}
	}
	let show = () => storage
	let recorder = {
		[DID_UPDATE]: add
	}
	return {
		show,
		recorder,
		setStore,
		back,
		forward,
		go,
		replace
	}
}