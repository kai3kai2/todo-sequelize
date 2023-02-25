const express = require("express");
const router = express.Router();

const Todo = require("../../models/todo");

router.get("/", (req, res) => {
  User.findByPk(req.user.id).then((user) => {
    if (!user) throw new Error("user not found");
  });
  return Todo.findAll({
    raw: true,
    nset: true,
    where: { UserId: req.user.id },
  })
    .then((todos) => {
      return res.render("index", { todos });
    })
    .catch((error) => console.error(error));
});

module.exports = router;
