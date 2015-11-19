let hashToFilter = {
	'#/': 'SHOW_ALL',
	'#/active': 'SHOW_ACTIVE',
	'#/completed': 'SHOW_COMPLETED'
}

export let filterItems = active => state => {
	return {
		...state,
		activeFilter: hashToFilter[active || 'SHOW_ALL']
	}
}