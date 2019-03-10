
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/test', userController.test);
router.post('/user/create', userController.user_create);
router.get('/user/:userName', userController.user_details);
router.get('/allUsers', userController.user_showAll);
router.put('/user/update/:userName', userController.user_update);
router.delete('/user/delete/:userName', userController.user_delete);

module.exports = router;
