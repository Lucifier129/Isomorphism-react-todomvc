import React from 'react'
import Todo from './todo'
import { TransitionSpring } from '../spring/Spring'

export default class Todos extends React.Component {
	getValues(update) {
	    let configs = {}
	    this.props.todos.forEach(todo => {
	        configs[todo.id] = {
	          todo: update(todo, -1, -1),
	          height: 60,
	          opacity: 1
	        }
	    })
	    return update(configs, 120, 17)
  	}
  	willEnter(id) {
  		console.log('enter')
  		let todo = this.props.todos.filter(todo => String(todo.id) === id)[0]
  		return {
  			height: 0,
  			opacity: 1,
  			todo: todo
  		}
	}
	willLeave(id, update, destVals, currVals) {
		if (currVals[id].opacity > 0) {
			return update({
				height: 0,
				opacity: 0,
				todo: update(currVals[id].todo, -1, -1),
			})
		}
	}
	render() {
		if (typeof window === 'undefined') {
			let todoList = this.props.todos.map((todo) => <Todo key={todo.id} {...todo} />)
			return <ul id="todo-list">{todoList}</ul>
		}
		return (<TransitionSpring ref="transition" endValue={::this.getValues} willLeave={::this.willLeave} willEnter={::this.willEnter}>
			 	
				{
					configs => {
						return <ul id="todo-list">
						{
							Object.keys(configs).map((id, i, list) => {
								let {todo, ...style} = configs[id]
								if (!style.opacity) {
									return null
								}
								return <Todo key={todo.id} style={style} {...todo} />
							})
						}
						</ul>
					}
				}
				</TransitionSpring>)

	}
}