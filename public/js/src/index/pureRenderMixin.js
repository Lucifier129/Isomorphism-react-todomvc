import shallowCompare from 'react-addons-shallow-compare'

let pureRender = Component => {
	if (typeof window === 'undefined') {
		return Component
	}
	Component.prototype.shouldComponentUpdate = function(nextProps, nextState) {
		let result = shallowCompare(this, nextProps, nextState)
		console.log(result)
		return result
	}
	return Component
	return class extends Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.super(nextProps, nextState) === false
			? false
			: shallowCompare(this, nextProps, nextState)
		}
	}
}

export default pureRender