const express = require("express");
const { authenticator } = require("../middleware/auth");
const router = express.Router();
const home = require("./modules/home");
const todos = require("./modules/todos");
const users = require("./modules/users");

router.use("/todos", authenticator, todos);
router.use("/users", users);
router.use("/", authenticator, home);

module.exports = router;
