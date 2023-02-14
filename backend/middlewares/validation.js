const { celebrate, Joi, Segments } = require('celebrate');
const { urlPattern } = require('../utils/constants');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.validateCardId = celebrate({
  [Segments.PARAMS]: Joi.object({
    cardId: Joi.objectId(),
  }),
});

module.exports.validateCreationCard = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(urlPattern),
  }),
});

module.exports.validateLogin = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.validateRegistration = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(urlPattern),
  }),
});

module.exports.validateUpdatingAvatar = celebrate({
  [Segments.BODY]: Joi.object().keys({
    avatar: Joi.string().required().pattern(urlPattern),
  }),
});

module.exports.validateUpdatingUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

module.exports.validateUserId = celebrate({
  [Segments.PARAMS]: Joi.object({
    userId: Joi.objectId(),
  }),
});
