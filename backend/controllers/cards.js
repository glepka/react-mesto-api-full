const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');
const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards.reverse()))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('Некорректные данные прит создании карточки'));
      } else {
        next(err);
      }
    });
};

module.exports.deleteCard = (req, res, next) => {
  const userId = req.user._id;
  const { cardId } = req.params;
  Card.findById(cardId)
    .orFail(() => {
      throw new NotFound('Каточка не найдена.');
    })
    .then((card) => {
      if (card.owner.toString() !== userId) {
        return next(new Forbidden('Невозможно удалить чужую карточку.'));
      }
      return card
        .remove()
        .then(() => res.send({ message: 'Карточка удалена.' }));
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFound('Каточка не найдена.');
    })
    .then((card) => res.send(card))
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFound('Каточка не найдена.');
    })
    .then((card) => res.send(card))
    .catch(next);
};
