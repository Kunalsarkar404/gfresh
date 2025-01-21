const express = require('express')
const userlist = require('../controllers/user/userlist');
const register = require('../controllers/user/register');
const login = require('../controllers/user/login');
const usersingle = require('../controllers/user/usersingle');
const updateuser = require('../controllers/user/updateuser');
const authenticateToken = require('../middlewares/verifytoken');
const deleteuser = require('../controllers/user/deleteuser');
const frontenduser = require('../controllers/user/frontend/frontend_usersingle');
const frontendupdateuser = require('../controllers/user/frontend/frontend_updateuser');

const router = express.Router()


router.get('/', userlist)
router.get('/userinfo', authenticateToken, frontenduser)
router.get('/:id', usersingle)
router.delete('/:id', deleteuser)
router.post('/register', register)
router.post('/login', login)
router.patch('/:id', authenticateToken, updateuser)
router.patch('/', authenticateToken, frontendupdateuser)

module.exports = router