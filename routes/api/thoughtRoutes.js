const router = require("express").Router();

const {
  getThought,
 getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction

  } = require("../../controllers/thoughtController");
// /api/thoughts
  router
   .route("/")
   .get(getThought)
  .post(createThought)
//api/thoughts/thoughtId
  router
  .route("/:ThoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)
//  /api/thoughts/:thoughtId/reactions
  router
  .route("/:thoughtId/reactions")
  .post(addReaction)
// /api/thoughts/:thoughtId/reactions/:reactionId
  router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);

  module.exports = router;
