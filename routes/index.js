import express from 'express'
import store from '../database/todos-store'

let router = express.Router()
let ok = {
	meta: {
		state: 0,
		message: 'ok'
	},
	data: null
}

router.get('/', (req, res) => {
	res.render('index', store.getComponent())
})

router.post('/todos', (req, res) => {
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

router.patch('/todos', (req, res) => {
	store.updateTodo(req.body.todo)
	res.send(ok)
})

router.delete('/todos', (req, res) => {
	store.removeTodo(req.body.id)
	res.send(ok)
})

export default router