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
  createThought({ body }, res) {
    createThought
      .create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
  },
  // createThought(req, res) {
  // Thought.findOneAndUpdate
  //.then((_id) => {
  // it associates which id we are creating
  // return User.findOneAndUpdate(
  //{ _id: body.userId },
  //{ $push: { thoughts: _id } },
  //{ new: true }
  // );
  // })
  //.then((dbThoughtData) => {
  // if (!dbThoughtData) {
  //res.status(404).json({ message: "No User found with this id!" });
  // return;
  //}
  //res.json(dbThoughtData);
  //})
  //.catch((err) => res.json(err));
  //},

  // updateThought Update http://localhost:3001/api/Thoughts/id here
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: body.id }, { $set: body }, { new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // deleteThought Delete http://localhost:3001/api/Thoughts/id
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thought found with this id!" });
          return;
        }
        return User.findOneAndUpdate(
          { _id: req.parmas.userId },
          { $pull: { thoughts: req.params.Id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // add a reaction to a thought
  addReaction(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbReactionData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteReaction({ params }, res) {
    Thought.findOneAndDelete(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No way jose." });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = thoughtController;


