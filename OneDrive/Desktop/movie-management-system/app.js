const express = require("express");
const path = require("path");
const session = require("express-session");

require("./config/database");

const app = express();

// Pug setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Form data and public files
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Session setup
app.use(
  session({
    secret: "movie-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Make login status available in every Pug page
app.use((req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.userId);
  next();
});

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Routes
const movieRoutes = require("./routes/movies");
const userRoutes = require("./routes/users");

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});