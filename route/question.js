const router = require("express").Router();
let Question = require("../modules/question.model");

router.route("/").get((req, res) => {
  Question.find()
    .then(question => res.json(question))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const question = req.body.question;
  const q_subject = req.body.q_subject;
  const q_topic = req.body.q_topic;
  const q_sub_topic = req.body.q_sub_topic;
  const q_type = req.body.q_type;
  const exam_type = req.body.exam_type;
  const difficulty_level = req.body.difficulty_level;
  const scale = req.body.scale;
  const it_faculty = req.body.it_faculty;
  const it_exam = req.body.it_exam;

  const newQuestion = new Question({
    username,
    question,
    q_subject,
    q_topic,
    q_sub_topic,
    q_type,
    exam_type,
    difficulty_level,
    scale,
    it_faculty,
    it_exam,
  });

  newQuestion
    .save()
    .then(() => res.json("Question added !"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Question.findByIdAndDelete(req.params.id)
    .then(() => res.json("Question deleted !"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Question.findById(req.params.id)
    .then(question => {
      question.username = req.body.username;
      question.question = req.body.question;
      question.q_subject = req.body.q_subject;
      question.q_topic = req.body.q_topic;
      question.q_sub_topic = req.body.q_sub_topic;
      question.q_type = req.body.q_type;
      question.exam_type = req.body.exam_type;
      question.difficulty_level = req.body.difficulty_level;
      question.scale = req.body.scale;
      question.it_faculty = req.body.it_faculty;
      question.it_exam = req.body.it_exam;

      question
        .save()
        .then(() => res.json("Question updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
