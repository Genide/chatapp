var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.redirect('/');
});

router.post('/', function(req, res) {
	res.render('chat', { title: 'Chat App', name: req.body.name});
});

module.exports = router;