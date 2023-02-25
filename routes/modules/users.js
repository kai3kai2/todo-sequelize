const express = require("express");
const router = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

const db = require("../../models");
const User = db.User;

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
  })
);

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];

  if (!name || !email || !password || !confirmPassword) {
    errors.push({ message: "所有欄位不能為空" });
  }
  if (password !== confirmPassword) {
    errors.push({ message: "密碼與再次輸入的密碼不相符。" });
  }
  if (errors.length) {
    return res.render("register", {
      errors,
      name,
      email,
      password,
      confirmPassword,
    });
  }
  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      errors.push({ message: "這個信箱已經存在!" });
      return res.render("register", {
        errors,
        name,
        email,
        password,
        confirmPassword,
      });
    }
    return bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) =>
        User.create({
          name,
          email,
          password: hash,
        })
      )
      .then(() => res.redirect("/"))
      .catch((err) => console.log(err));
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "成功登出，歡迎再次使用。");
  res.redirect("/users/login");
});

module.exports = router;
