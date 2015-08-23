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
	res.render('index', {
		component: store.getComponent(),
		initialData: JSON.stringify(store.getState())
	})
})

router.post('/todos', (req, res) => {
	store.dispatch(req.body)
	res.json(Object.assign({}, ok, {
		data: req.body
	}))
})

export default router