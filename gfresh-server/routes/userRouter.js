const express = require('express')
const userlist = require('../controllers/user/userlist');
const register = require('../controllers/user/register');
const login = require('../controllers/user/login');
const usersingle = require('../controllers/user/usersingle');
const updateuser = require('../controllers/user/updateuser');
const authenticateToken = require('../middlewares/verifytoken');
const deleteuser = require('../controllers/user/deleteuser');

const router = express.Router()


router.get('/',userlist)
router.get('/:id',usersingle)
router.patch('/:id',authenticateToken,updateuser)
router.delete('/:id',deleteuser)
router.post('/register',register)
router.post('/login',login)

module.exports = router