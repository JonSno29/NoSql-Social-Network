const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require("../../controllers/user-controller");

router
.route("/")
.get(getUser)
.post(createUser);

router
.route("/users/:id")
.get(getOneUser)
.put(updateUser)
.delete(deleteUser);

router
.route("/users/:id/friends/:friendId")
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
