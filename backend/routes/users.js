const router = require('express').Router();
const {
  getUsers,
  getUserById,
  getUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');
const {
  validateUserId,
  validateUpdatingAvatar,
  validateUpdatingUser,
} = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/me', getUser);
router.get('/:userId', validateUserId, getUserById);
router.patch('/me', validateUpdatingUser, updateUser);
router.patch('/me/avatar', validateUpdatingAvatar, updateAvatar);

module.exports = router;
