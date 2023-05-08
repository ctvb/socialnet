const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/courses
// http://localhost:3001/api/users/
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
// http://localhost:3001/api/users/123
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
