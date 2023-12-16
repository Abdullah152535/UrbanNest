const express = require('express');

const {getAllUsers , createUser, getUserById } = require('../../Controllers/UserControllers');

const router = express.Router();

router.get('/' ,getAllUsers )
router.post('/',createUser);
router.get('/:id', getUserById);


module.exports = router