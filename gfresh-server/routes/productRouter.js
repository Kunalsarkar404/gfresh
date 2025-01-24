const express = require('express');
const productlist = require('../controllers/Product/productlist');
const createProduct = require('../controllers/Product/createProduct');
const upload = require('../middlewares/image-uploader');
const updateProduct = require('../controllers/Product/updateProduct');
const getSingleProduct = require('../controllers/Product/singleProduct');
const deleteProduct = require('../controllers/Product/deleteProduct');
const productRouter = express.Router()

productRouter.get('/', productlist);
productRouter.post('/', upload.fields([
    { name: 'product_image1', maxCount: 1 },
    { name: 'product_image2', maxCount: 1 },
    { name: 'product_image3', maxCount: 1 },
    { name: 'product_image4', maxCount: 1 },
]), createProduct)
productRouter.patch('/:id', upload.fields([
    { name: 'product_image1', maxCount: 1 },
    { name: 'product_image2', maxCount: 1 },
    { name: 'product_image3', maxCount: 1 },
    { name: 'product_image4', maxCount: 1 },
]), updateProduct)
productRouter.get('/:id', getSingleProduct)
productRouter.delete('/:id', deleteProduct)

module.exports = productRouter;