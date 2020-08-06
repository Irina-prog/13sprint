const Card = require('../models/card');

// To Reviewer: ошибки обрабатываются в app.js

async function listCards(req, res) {
  const cards = await Card.find({});
  res.send(cards);
}

async function deleteCard(req, res) {
  await Card.deleteOne({ _id: req.params.id }).orFail();
  res.send({});
}

async function createCard(req, res) {
  const card = new Card(req.body);
  await card.save();
  res.send(card);
}

async function addLike(req, res) {
  const card = await Card
    .findByIdAndUpdate(req.params.id, { $addToSet: { likes: req.user._id } }, { new: true })
    .orFail();
  res.send(card);
}

async function removeLike(req, res) {
  const card = await Card
    .findByIdAndUpdate(req.params.id, { $pull: { likes: req.user._id } }, { new: true })
    .orFail();
  res.send(card);
}

module.exports = {
  listCards, deleteCard, createCard, addLike, removeLike,
};
