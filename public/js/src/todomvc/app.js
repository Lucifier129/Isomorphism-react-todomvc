import React from 'react'
import todoDispatcher from './todoDispatcher'
import Model from './model'
import View from './component/view'
import request from 'superagent'
window.request = request
class App {
	constructor(View, Model) {
		this.View = View
		this.Model = Model
		this.url = 'todomvc/todos'
	}
	init() {
		this.model = new this.Model(this.getInitialData().todos)
		//初始化渲染，获取服务端vdom tree
		this.render(this.model.getData('/'))
		this.render()
		this.register()
		this.listen()
		window.addEventListener('hashchange', () => this.render(), false)
	}
	getInitialData() {
		let initialDataStore = document.getElementById('initialData')
		let initalData = initialDataStore.innerHTML
		initialDataStore.parentNode.removeChild(initialDataStore)
		return JSON.parse(initalData)
	}
	post(data) {
		request.post(this.url).send(data).end()
	}
	register() {
		todoDispatcher.register((action) => {
			let model = this.model
			let todo
			switch (action.actionType) {
				case 'addTodo':
					todo = model.addTodo(action.title)
					this.post({
						type: 'addTodo',
						todo: todo
					})
					break
				case 'toggleAll':
					let hasTodo = model.toggleAll(action.completed)
					if (hasTodo !== false) {
						this.post({
							type: 'toggleAll',
							completed: action.completed
						})
					}
					break
				case 'updateTodo':
					todo = model.updateTodo(action.todo)
					if (todo) {
						request.patch(this.url).send({
							todo: todo
						}).end()
					}
					break
				case 'removeTodo':
					model.removeTodo(action.id)
					request.del(this.url).send({
						id: action.id
					}).end()
					break
				case 'clearCompleted':
					let hasTodo = model.clearCompleted()
					if (hasTodo) {
						this.post({
							type: 'clearCompleted'
						})
					}
					break
			}
			this.render()
		})
	}
	render(props) {
		props = props || this.model.getData('/' + location.hash.replace('#/', ''))
		React.render(
			<this.View {...props} />,
			document.getElementById('todoapp')
		)
	}
	listen() {
		//socket
		io().on('change', (data) => {
			this.model = new Model(data.todos)
			this.render()
		})
	}
}

new App(View, Model).init()