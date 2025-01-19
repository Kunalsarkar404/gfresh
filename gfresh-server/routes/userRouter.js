const express = require('express')
const userlist = require('../controllers/user/userlist');
const register = require('../controllers/user/register');
const login = require('../controllers/user/login');

const router = express.Router()


router.get('/',userlist)
router.post('/register',register);
router.post('/login',login)

module.exports = router