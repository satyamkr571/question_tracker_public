import React, { Component } from "react";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateQuestion extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeQ_Subject = this.onChangeQ_Subject.bind(this);
    this.onChangeQ_Topic = this.onChangeQ_Topic.bind(this);
    this.onChangeQ_Sub_Tpic = this.onChangeQ_Sub_Tpic.bind(this);
    this.onChangeQ_Type = this.onChangeQ_Type.bind(this);
    this.onChangeExam_Type = this.onChangeExam_Type.bind(this);
    this.onChangeDifficulty_Level = this.onChangeDifficulty_Level.bind(this);
    this.onChangeScale = this.onChangeScale.bind(this);
    this.onChangeIt_Faculty = this.onChangeIt_Faculty.bind(this);
    this.onChangeIt_Exam = this.onChangeIt_Exam.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      question: "",
      q_subject: "",
      q_topic: "",
      q_sub_topic: "",
      q_type: "",
      exam_type: "",
      difficulty_level: "",
      scale: "",
      it_faculty: "",
      it_exam: "",
      users: [],
      topic_list: [],
      quants_list: [
        "Select Quants Topic",
        "Arithmetic",
        "Algebra",
        "Numbers",
        "Geometery",
        "Set Theory",
        "Permutaion & Combination",
        "Probability",
        "Trigonometry",
        "Co-Ordinate Geometry",
        "Calculas",
        "Others",
      ],
      verbal_list: [
        "Select Verbal Topic",
        "Vocabulary Based",
        "Grammar on English Usgae",
        "Sentence Correction",
        "Reading Comprehension(RC)",
        "Jumbled Paragraph",
        "Critical Reasoning",
        "Summary Question",
        "Analogies",
        "Verbal Reasoning",
        "Others",
      ],
      dilr_list: [
        "Select DI&LR Topic",
        "Caselets and Tables",
        "Bar Graph and Column Graph",
        "Venn Diagrams",
        "Line Charts and Pie Chart",
        "Combined Concept",
        "Number and Letter Series",
        "Calenders, Cube and Clocks",
        "Binary Logics",
        "Seating Arrangments",
        "Matching",
        "Logical Sequence",
        "Connectives",
        "Blood Relations",
        "Others",
      ],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/user/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
    console.log(this.state.username);
  }

  onChangeQuestion(e) {
    this.setState({
      question: e.target.value,
    });
  }

  onChangeQ_Subject(e) {
    e.preventDefault();
    this.setState({
      q_subject: e.target.value,
    });

    // const subject = {
    //   q_subject: this.state.q_subject,
    // };

    //this.q_subject = this.state.q_subject;
    //console.log(this.state.q_subject, e.target.value);

    if (e.target.value === "Quantative Aptitude") {
      this.setState({
        topic_list: this.state.quants_list.map(function (sub_topic) {
          return sub_topic;
        }),
      });
    } else if (e.target.value === "Verbal Ability") {
      this.setState({
        topic_list: this.state.verbal_list.map(function (sub_topic) {
          return sub_topic;
        }),
      });
    } else if (e.target.value === "DI&LR") {
      this.setState({
        topic_list: this.state.dilr_list.map(function (sub_topic) {
          return sub_topic;
        }),
      });
    } else {
      this.setState({
        topic_list: ["Please select subject"],
      });
    }
  }

  onChangeQ_Topic(e) {
    this.setState({
      q_topic: e.target.value,
    });
  }

  onChangeQ_Sub_Tpic(e) {
    this.setState({
      q_sub_topic: e.target.value,
    });
  }

  onChangeQ_Type(e) {
    this.setState({
      q_type: e.target.value,
    });
  }

  onChangeExam_Type(e) {
    this.setState({
      exam_type: e.target.value,
    });
  }

  onChangeDifficulty_Level(e) {
    this.setState({
      difficulty_level: e.target.value,
    });
  }

  onChangeScale(e) {
    this.setState({
      scale: e.target.value,
    });
  }

  onChangeIt_Faculty(e) {
    this.setState({
      it_faculty: e.target.value,
    });
  }

  onChangeIt_Exam(e) {
    this.setState({
      it_exam: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const question = {
      username: this.state.username,
      question: this.state.question,
      q_subject: this.state.q_subject,
      q_topic: this.state.q_topic,
      q_sub_topic: this.state.q_sub_topic,
      q_type: this.state.q_type,
      exam_type: this.state.exam_type,
      difficulty_level: this.state.difficulty_level,
      scale: this.state.scale,
      it_faculty: this.state.it_faculty,
      it_exam: this.state.it_exam,
    };
    // if (
    //   question.username === "" ||
    //   (question.username === null && question.question === "") ||
    //   (question.question === null && question.q_subject === "") ||
    //   (question.q_subject === null && question.q_topic === "") ||
    //   (question.q_topic === null && question.exam_type === "") ||
    //   (question.exam_type === null && question.difficulty_level === "") ||
    //   (question.difficulty_level === null && question.scale === "") ||
    //   (question.scale === null && question.it_faculty === "") ||
    //   (question.it_faculty === null && question.it_faculty === "") ||
    //   question.it_faculty === null
    // )
    // var valid = 2;
    // for (let i in question) {
    //   console.log(i);
    // }
    // if (valid === 2) {
    //   window.alert("Please check all the input details");
    // } else {
      axios
        .post("http://localhost:5000/question/add", question)
        .then(res => console.log(res.data));
      window.alert("Question Created Successfully !!!");
      window.location = "/home";
    }
  

  render() {
    return (
      <div className="container-fluid">
        <h3>Create New Question Log.</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Question Subject: </label>
                <select
                  type="select"
                  className="form-control"
                  value={this.state.q_subject}
                  onChange={this.onChangeQ_Subject}
                >
                  <option>Select Subject</option>
                  <option>Quantative Aptitude</option>
                  <option>Verbal Ability</option>
                  <option>DI&LR</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Question Topic: </label>
                <select
                  className="form-control"
                  value={this.state.q_topic}
                  onChange={this.onChangeQ_Topic}
                >
                  {this.state.topic_list.map(topic_list => {
                    return (
                      <option key={topic_list} value={topic_list}>
                        {topic_list}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Question Sub-Topic: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.q_sub_topic}
                  onChange={this.onChangeQ_Sub_Tpic}
                ></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Question Type: </label>
                <select
                  type="text"
                  className="form-control "
                  value={this.state.q_type}
                  onChange={this.onChangeQ_Type}
                >
                  <option>Select Question Type</option>
                  <option>Concept</option>
                  <option>Theory</option>
                  <option>Logic</option>
                  <option>Concept + Logic</option>
                  <option>Comprehension Based</option>
                  <option>Vocabulary Based</option>
                  <option>Grammar</option>
                  <option>Critical Reasoning</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Exam Type: </label>
                <select
                  type="text"
                  className="form-control"
                  value={this.state.exam_type}
                  onChange={this.onChangeExam_Type}
                >
                  <option>Select Exam</option>
                  <option>GRE</option>
                  <option>GMAT</option>
                  <option>GRE + GMAT</option>
                  <option>CAT</option>
                  <option>XAT</option>
                  <option>CMAT</option>
                  <option>NMAT</option>
                  <option>SNAP</option>
                  <option>IIFT</option>
                  <option>SBI PO</option>
                  <option>IBPS</option>
                  <option>BANK OF BARODA</option>
                  <option>SSC CGL</option>
                  <option>CRT</option>
                  <option>RBI AAO</option>
                  <option>RBI GRADE-B</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Difficulty Level: </label>
                <select
                  type="text"
                  className="form-control"
                  value={this.state.difficulty_level}
                  onChange={this.onChangeDifficulty_Level}
                >
                  <option>Select Difficulty Level</option>
                  <option>Very Easy</option>
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Hard</option>
                  <option>Very Hard</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Difficulty Scale(1 to 10): </label>
                <select
                  type="text"
                  className="form-control"
                  value={this.state.scale}
                  onChange={this.onChangeScale}
                >
                  <option>Select Difficulty Scale</option>
                  <option>1.0</option>
                  <option>1.5</option>
                  <option>2.0</option>
                  <option>2.5</option>
                  <option>3.0</option>
                  <option>3.5</option>
                  <option>4.0</option>
                  <option>4.5</option>
                  <option>5.0</option>
                  <option>5.5</option>
                  <option>6.0</option>
                  <option>6.5</option>
                  <option>7.0</option>
                  <option>7.5</option>
                  <option>8.0</option>
                  <option>8.5</option>
                  <option>9.0</option>
                  <option>9.5</option>
                  <option>10.0</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Ideal Time Faculty(in seconds): </label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.it_faculty}
                  onChange={this.onChangeIt_Faculty}
                ></input>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Ideal Time Exam (in seconds): </label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.it_exam}
                  onChange={this.onChangeIt_Exam}
                ></input>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Question: </label>
            <textarea
              type="text"
              className="form-control"
              style={{
                height: "300px",
                padding: "0.4em",
                display: "block",
                overflow: "visible",
              }}
              value={this.state.question}
              onChange={this.onChangeQuestion}
              placeholder="Type your Question here.................."
            ></textarea>
            {/* <div class="form-group">
              <input type="file" class="form-control-file w-25" name="file" />
            </div> */}
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Question Log"
              className="btn btn-primary btn-lg"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
