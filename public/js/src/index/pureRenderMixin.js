import shallowCompare from 'react-addons-shallow-compare'

let pureRender = Component => {
	Component.prototype.shouldComponentUpdate = function(nextProps, nextState) {
		let result = shallowCompare(this, nextProps, nextState)
		console.log(`${ Component.name }#shouldComponentUpdate: ${ result }`)
		return result
	}
	return Component
}

export default pureRender