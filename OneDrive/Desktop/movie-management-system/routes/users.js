const express = require("express");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");

const router = express.Router();

// Registration page
router.get("/register", (req, res) => {
  res.render("register", {
    errors: [],
    user: {},
  });
});

// Register user
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("register", {
        errors: errors.array(),
        user: req.body,
      });
    }

    try {
      const existingUser = await User.findOne({ email: req.body.email });

      if (existingUser) {
        return res.render("register", {
          errors: [{ msg: "Email already exists" }],
          user: req.body,
        });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      await user.save();

      res.redirect("/users/login");

    } catch (error) {
      res.send("Registration failed");
    }
  }
);

// Login page
router.get("/login", (req, res) => {
  res.render("login", {
    errors: [],
  });
});

// Login user
router.post("/login", async (req, res) => {

  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.render("login", {
      errors: [{ msg: "Invalid email or password" }],
    });
  }

  const match = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!match) {
    return res.render("login", {
      errors: [{ msg: "Invalid email or password" }],
    });
  }

  req.session.userId = user._id;

  res.redirect("/movies");

});

// Logout
router.get("/logout", (req, res) => {

  req.session.destroy();

  res.redirect("/");

});

module.exports = router;