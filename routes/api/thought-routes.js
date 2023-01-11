const router = require("express").Router();

const {
  getAllThought,
 getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction

  } = require("../../controllers/thought-controller");

  router
   .route("/")
   .get(getThought)
  .post(createThought);

  router
  .route("/thoughts/:id")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought)

  router
  .route("/:thoughtId/reactions")
  .post(addReaction)

  router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction)

  module.exports = router;
