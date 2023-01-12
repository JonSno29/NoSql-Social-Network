const { User, Thought } = require("../models");

module.exports = {
  getThought(req, res) {
    Thought.find({})
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Thought by id  Get http://localhost:3001/api/Thoughts/<Thought-id-here>
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought found with this ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // createThought Post /api/Thoughts
  createThought(req, res) {
    Thought.create(req.body)
      .then((_id) => {
        // it associates which id we are creating
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      // createThought(req, res) {
      // Thought.findOneAndUpdate

      .then((thought) => {
        !thought
          ? res.status(404).json({ message: "No User found with this id!" })
          : res.json(thought);
      })
      .catch((err) => res.status(500).json(err));
  },

  // updateThought Update http://localhost:3001/api/Thoughts/id here
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, New: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No thought found with this ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // deleteThought Delete http://localhost:3001/api/Thoughts/id
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: "No Thought found with this id!" })
          : User.findOneAndUpdate(
              { thoughts: req.parmas.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Deleted, No User found with this id!" })
          : res.json({ message: "Thought deleted" })
      )

      .catch((err) => res.status(500).json(err));
  },
  // add a reaction to a thought
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then(( thought ) => 
        !thought
         ? res.status(404).json({ message: "No ID found" })
         : res.json( thought )
      )
      .catch((err) => res.status(500).json(err));
  },
};




