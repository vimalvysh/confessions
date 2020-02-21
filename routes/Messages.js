const express = require("express");
const router = express.Router();

// import model
const MessageDB = require("../models/Messages");

// Add message
router.post("/addMesg", (req, res) => {
  console.log(req);
  const newMesg = new MessageDB({
    mesg: req.body.mesg,
    status: "active",
    comment: ""
  });

  newMesg.save().then(mesg => res.json(mesg));
});

//   View messages
router.get("/allMesg", (req, res) => {
  MessageDB.find()
    .sort({ date: -1 })
    .then(mesgs => res.json(mesgs));
});

router.post("/deleteMesg/:id", (req, res) => {
  MessageDB.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: "deleted"
      }
    },
    { new: true }
  )
    .then(mesg => res.json(mesg))
    .catch(err => res.json(err));
});

// messages update as Reported

router.post("/reportMesg/:id", (req, res) => {
  console.log(req);
  MessageDB.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: "reported",
        comment: req.body.comment + "|" + req.body.comments
      }
    },
    { upsert: true }
  )
    .then(mesg => res.json(mesg))
    .catch(err => res.json(err));
});

module.exports = router;
