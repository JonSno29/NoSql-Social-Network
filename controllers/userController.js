const { User, Thought } = require('../models');

module.exports = {
  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json(err));
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(400).json(err));
  },

  // createUser   Post http://localhost:3001/api/users
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No user with this id!!" })
          : res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },

  //delete
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No User found with this id!" })
          : res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(400).json(err));
  },
};



