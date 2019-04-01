var express = require('express');

var router = express.Router();
var users = require('../controllers/controller');
var chatController = require("../controllers/chatController");
var auth = require('../authantication');

router.get('/getAllUser', auth, users.getAllUser);
router.get('/getUserMsg', auth, chatController.getUserMsg);

module.exports = router