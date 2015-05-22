var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
	var data = {
		title: 'pratise',
		body: null,
		appScript: 'js/dest/index.bundle.js'
	}
	res.render('index', data)
})

module.exports = router
