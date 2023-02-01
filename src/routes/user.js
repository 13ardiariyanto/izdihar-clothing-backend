const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const { protect } = require('../middlewares/auth')
// const { protect } = require('../middlewares/auth')
const upload = require('../middlewares/upload')

router.get('/', userController.getData)
// router.get('/profile', protect, userController.getProfile)
router.get('/:id', userController.getProfile)
router.post('/register', userController.insertData)
router.post('/login', userController.login)
router.put('/contact/:id', protect, userController.updateContact)
router.put('/:id', protect, upload.single('photo'), userController.updateData)
router.delete('/:id', protect, userController.deleteData)

module.exports = router