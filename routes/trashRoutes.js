const express = require('express')

const trashController = require('../controllers/trashController')

const router = express.Router()

router.get('/', trashController.showMainPage)

router.get('/add-trash', trashController.getAddTrash)

router.post('/add-trash', trashController.postAddTrash)

router.get('/search', trashController.getAllTrash)

module.exports = router
