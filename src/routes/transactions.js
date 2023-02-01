const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions')
const { protect } = require('../middlewares/auth')
// const { protect, user } = require('../middlewares/auth')

router.get('/', protect, transactionsController.getData)
router.get('/myBag/:id', protect, transactionsController.getMyBag)
router.get('/checkout/:id', protect, transactionsController.getCheckout)
router.post('/', protect, transactionsController.insert)
router.delete('/:id', transactionsController.deleteTransaction)
// router.put('/:id', transactionsController.update)

module.exports = router