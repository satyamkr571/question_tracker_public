const router = require("express").Router();
let User = require("../modules/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const userid = req.body.userid;
  const password = req.body.password;
  const subject = req.body.subject;
  const dateOfJoining = Date.parse(req.body.dateOfJoining);

  const newUser = new User({
    username,
    userid,
    password,
    subject,
    dateOfJoining,
  });

  newUser
    .save()
    .then(() => res.json("User added !"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
