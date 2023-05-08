const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
// http://localhost:3001/api/thoughts/
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
// http://localhost:3001/api/thoughts/123
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/:thoughtId/assignments
// http://localhost:3001/api/thoughts/123/thoughts
router.route('/:thoughtId/thoughts').put(updateThought);

// /api/thoughts/:thoughtId/assignments/:assignmentId
// http://localhost:3001/api/thoughts/123/thought/125
router.route('/:thoughtId/thought/:userId').delete(deleteThought);

module.exports = router;
