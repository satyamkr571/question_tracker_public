import React, { Component } from "react";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class EditExercise extends Component {
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
    axios
      .get("http://localhost:5000/question/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          question: response.data.question,
          q_subject: response.data.q_subject,
          q_topic: response.data.q_topic,
          q_sub_topic: response.data.q_sub_topic,
          q_type: response.data.q_type,
          exam_type: response.data.exam_type,
          difficulty_level: response.data.difficulty_level,
          scale: response.data.scale,
          it_faculty: response.data.it_faculty,
          it_exam: response.data.it_exam,
        });
      });

    axios.get("http://localhost:5000/user/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
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
    this.setState({
      q_subject: e.target.value,
    });
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
        topic_list: this.state.q_topic,
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
    console.log(question);

    axios
      .post(
        "http://localhost:5000/question/update/" + this.props.match.params.id,
        question
      )
      .then(res => console.log(res.data));
    window.alert("Question Updated Successfully !!!");
    window.location = "/home";
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Edit Question Log.</h3>
        <div className="container-fluid">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <select
                ref="userInput"
                required
                className="form-control"
                value={this.username}
                onChange={this.onChangeUsername}
                disabled={true}
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
            <div className="form-group">
              <label>Question: </label>
              <textarea
                type="text"
                style={{
                  height: "200px",
                  padding: "5px",
                  display: "block",
                  overflow: "visible",
                }}
                className="form-control"
                value={this.state.question}
                onChange={this.onChangeQuestion}
              ></textarea>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Question Subject: </label>
                  <select
                    className="form-control"
                    value={this.state.q_subject}
                    onChange={this.onChangeQ_Subject}
                  >
                    <option>{this.state.q_subject}</option>
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
                    <option>{this.state.q_topic}</option>
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
                    <option>{this.state.q_type}</option>
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
                    <option>{this.state.exam_type}</option>
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
                    <option>{this.state.difficulty_level}</option>
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
                    <option>{this.state.scale}</option>
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
                  <label>Ideal Time Faculty (in seconds): </label>
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
              <input
                type="submit"
                value="Update Exercise Log"
                className="btn btn-primary btn-lg"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
