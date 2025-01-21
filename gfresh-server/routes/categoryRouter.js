const express = require('express');
const createcategory = require('../controllers/ProductCategory/createcategory');
const routercate = express.Router();

routercate.post('/',createcategory);

module.exports = routercate