const express = require("express");
const { body, validationResult } = require("express-validator");
const Movie = require("../models/movie");
const isLoggedIn = require("../middleware/auth");

const router = express.Router();

// Display all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.render("movies", { movies });
});

// Display Add Movie form
router.get("/add", isLoggedIn, (req, res) => {
  res.render("add-movie", {
    errors: [],
    movie: {},
  });
});

// Add Movie
router.post(
  "/add",
  isLoggedIn,
  [
    body("name").notEmpty().withMessage("Movie name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("year").notEmpty().withMessage("Year is required"),
    body("genres").notEmpty().withMessage("Genre is required"),
    body("rating").notEmpty().withMessage("Rating is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("add-movie", {
        errors: errors.array(),
        movie: req.body,
      });
    }

    const movie = new Movie({
      name: req.body.name,
      description: req.body.description,
      year: req.body.year,
      genres: req.body.genres,
      rating: req.body.rating,
      user: req.session.userId,
    });

    await movie.save();

    res.redirect("/movies");
  }
);

// Movie Details
router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    return res.send("Movie not found");
  }

  res.render("movie-details", { movie });
});

// Edit Form
router.get("/:id/edit", isLoggedIn, async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    return res.send("Movie not found");
  }

  if (movie.user.toString() !== req.session.userId.toString()) {
    return res.send("You cannot edit this movie");
  }

  res.render("edit-movie", {
    movie,
    errors: [],
  });
});

// Update Movie
router.post(
  "/:id/edit",
  isLoggedIn,
  [
    body("name").notEmpty().withMessage("Movie name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("year").notEmpty().withMessage("Year is required"),
    body("genres").notEmpty().withMessage("Genre is required"),
    body("rating").notEmpty().withMessage("Rating is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("edit-movie", {
        errors: errors.array(),
        movie: {
          _id: req.params.id,
          ...req.body,
        },
      });
    }

    const movie = await Movie.findById(req.params.id);

    if (movie.user.toString() !== req.session.userId.toString()) {
      return res.send("You cannot edit this movie");
    }

    movie.name = req.body.name;
    movie.description = req.body.description;
    movie.year = req.body.year;
    movie.genres = req.body.genres;
    movie.rating = req.body.rating;

    await movie.save();

    res.redirect("/movies/" + req.params.id);
  }
);

// Delete Movie
router.delete("/:id", isLoggedIn, async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (movie.user.toString() !== req.session.userId.toString()) {
    return res.send("You cannot delete this movie");
  }

  await Movie.findByIdAndDelete(req.params.id);

  res.send("success");
});

module.exports = router;