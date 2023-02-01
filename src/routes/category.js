const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')
// const { admin } = require('../middlewares/auth')
// const {hitCache} = require('../middlewares/redis')

router.get('/', categoryController.get)
router.post('/', categoryController.insert)
router.put('/:id', categoryController.update)
router.delete('/:id', categoryController.deleteData)

module.exports = router