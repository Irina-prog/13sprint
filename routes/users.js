const { Router } = require('express');
const asyncHandler = require('express-async-handler');
const {
  listUsers, getUser, createUser, updateUser,
} = require('../controllers/users');

const router = new Router();

router.get('/users', asyncHandler(listUsers));
router.post('/users', asyncHandler(createUser));
router.get('/users/:id', asyncHandler(getUser));
router.patch('/users/:id', asyncHandler(updateUser));

module.exports = router;
