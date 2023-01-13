const router = require("express").Router();

const {
  getSingleUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");
// api/users
router
.route("/")
.get(getUser)
.post(createUser);
//api/users/id
router.route("/:id")
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router
.route("/:id/friends/:friendId")
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
