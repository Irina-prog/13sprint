const User = require('../models/user');

// To Reviewer: ошибки обрабатываются в app.js

async function listUsers(req, res) {
  const users = await User.find({});
  res.send(users);
}

async function getUser(req, res) {
  const user = await User.findById(req.params.id).orFail();
  res.send(user);
}

async function createUser(req, res) {
  const user = new User(req.body);
  await user.save();
  res.send(user);
}

// обновляет информацию о профиле, включая аватар
async function updateUser(req, res) {
  const user = await User
    .findByIdAndUpdate(req.user._id, { $set: req.body }, { new: true })
    .orFail();
  res.send(user);
}

module.exports = {
  listUsers, getUser, createUser, updateUser,
};
