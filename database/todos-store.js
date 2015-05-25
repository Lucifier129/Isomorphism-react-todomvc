import React from 'react'
import Model from '../public/js/src/index/model'
import View from '../public/js/src/index/component/view'
import low from 'lowdb'
let db = low('./database/db.json')

export default {
	emit() {
		if (this.io) {
			this.io.emit('change', {
				todos: db('todos')
			})
		}
	},
	getComponent() {
		let data = new Model(db('todos')).getData('/')
		let component = React.renderToString(React.createElement(View, data))
		return {
			component: component,
			initialData: JSON.stringify(data)
		}
	},
	addTodo(todo) {
		db('todos').push(todo)
		db.save()
		this.emit()
	},
	toggleAll(completed) {
		new Model(db('todos')).toggleAll(completed)
		db.save()
		this.emit()
	},
	clearCompleted() {
		db('todos').remove((todo) => todo.completed)
		db.save()
		this.emit()
	},
	updateTodo(todo) {
		new Model(db('todos')).updateTodo(todo)
		db.save()
		this.emit()
	},
	removeTodo(id) {
		new Model(db('todos')).removeTodo(id)
		db.save()
		this.emit()
	}
}