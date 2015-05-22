var express = require('express')
var router = express.Router()
var store = require('./todos-store')
var ok = {
	meta: {
		state: 0,
		message: 'ok'
	},
	data: null
}

router.get('/', function(req, res) {
	res.render('todomvc', store.getComponent())
})

router.post('/todos', function(req, res) {
	switch (req.body.type) {
		case 'addTodo':
			store.addTodo(req.body.todo)
			break
		case 'toggleAll':
			store.toggleAll(req.body.completed)
			break
		case 'clearCompleted':
			store.clearCompleted()
			break
	}
	res.send(ok)
})

router.patch('/todos', function(req, res) {
	store.updateTodo(req.body.todo)
	res.send(ok)
})

router.delete('/todos', function(req, res) {
	store.removeTodo(req.body.id)
	res.send(ok)
})

module.exports = router