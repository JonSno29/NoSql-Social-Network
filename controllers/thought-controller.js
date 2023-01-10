const { User, Thought } = require("../models");

const thoughtController = {
  getAllThought(req, res) {
    Thought.find({})
      .populate({
        path: "reactions", //Thought also populates Thoughts
        select: "-__v", // '-' Don't want it to be returned.
      })
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one Thought by id  Get http://localhost:3001/api/Thoughts/<Thought-id-here>
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // createThought Post /api/Thoughts
  createThought({ body }, res) {
    Thought.create(body)
      .then((_id) => {
        // it associates which id we are creating
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
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

  // updateThought Update http://localhost:3001/api/Thoughts/id here
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: body.id },
      { $set: body },
      { new: true }
    )
     .then((dbThoughtData) => {

        if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!"})
            return;
        }
        res.json(dbThoughtData);

    })
    .catch((err) => res.status(400).json(err));
},

  // deleteThought Delete http://localhost:3001/api/Thoughts/id
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
     .then((dbThoughtData) => {
        if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!"});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.status(400).json(err));
},

addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
        { _id: params.ThoughtId },
        { $addToSet: { reactions: body } },
        { new: true }
    )
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!"})
            return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.json(err));
},

deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
        { _id: params.ThoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
    )
    .then((dbThoughtData) => {
        res.json(dbThoughtData);
    })
    .catch((err) => res.json(err));

},

};



module.exports = thoughtController;