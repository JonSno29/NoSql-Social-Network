const { User, Thought } = require("../models");

const thoughtController = {
  getAllThought(req, res) {
    Thought.find({})
      .populate({
        path: "reactions", //Thought also populates Thoughts
        select: "-__v", // The minus sign - in front of the field indicates that we don't want it to be returned.
      })
      .select("-__v") //this put the sort in DESC order by the _id value
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  