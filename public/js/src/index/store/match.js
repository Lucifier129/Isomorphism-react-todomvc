import * as filter from './handlers/activeFilter'

let matcher = data => {
	let { key } = data
	switch (true) {
		case filter.hasOwnProperty(key):
			return ['Filters', 'Todos']
		default:
			return 'Root'
	}
}

export default matcher