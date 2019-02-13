const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const app = express();

// Port Setup
const port = process.env.PORT || 5000;

// DB Config
const db = require("./config/keys").mongoURI;

// Obtain routes
const users = require("./routes/api/users");
const activities = require("./routes/api/activities");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Use routes
app.use("/api/users", users);
app.use("/api/activities", activities);

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Promise
mongoose.Promise = global.Promise;

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Heroku post-build script
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server start
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
