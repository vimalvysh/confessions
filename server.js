const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const confMesg = require("./routes/Messages");

const app = express();
app.use(bodyParser.json());

const db = require("./config/key").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected succesfully"))
  .catch(err => console.log(err));

// use Routes
app.use("/confessionMesg", confMesg);

// serve static asset if we are in production.

if (process.env.NODE_ENV === "production") {
  // set static folder.
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at ${port}`));
