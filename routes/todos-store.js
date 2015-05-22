var React = require('react')
var Model = require('../public/js/src/todomvc/model')
var View = require('../public/js/src/todomvc/component/view')
var low = require('lowdb')
var db = low('./database/db.json')

var store = {
	emit: function() {
		if (this.io) {
			this.io.emit('change', {
				todos: db('todos')
			})
		}
	},
	getComponent: function() {
		var data = new Model(db('todos')).getData('/')
		var component = React.renderToString(React.createElement(View, data))
		return {
			component: component,
			initialData: JSON.stringify(data)
		}
	},
	addTodo: function(todo) {
		db('todos').push(todo)
		db.save()
		this.emit()
	},
	toggleAll: function(completed) {
		new Model(db('todos')).toggleAll(completed)
		db.save()
		this.emit()
	},
	clearCompleted: function() {
		db('todos').remove(function(todo) {
			return todo.completed
		})
		db.save()
		this.emit()
	},
	updateTodo: function(todo) {
		new Model(db('todos')).updateTodo(todo)
		db.save()
		this.emit()
	},
	removeTodo: function(id) {
		new Model(db('todos')).removeTodo(id)
		db.save()
		this.emit()
	}
}

module.exports = store