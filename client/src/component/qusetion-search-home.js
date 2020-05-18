import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { Card } from "react-bootstrap";
import axios from "axios";
import "./question-search-home.css";
//import auth from "./auth";

const ITEMS = (props) => (
  <li className="qsn_li">
    <div className="qsn_head">
      <div className="row">
        <div className="col qsnheadcol">
          <label>Created By:</label>
          {props.question.username}
        </div>
        <div className="col qsnheadcol">
          <label>Subject:</label>
          {props.question.q_subject}
        </div>
        <div className="col qsnheadcol">
          <label>Topic:</label>
          {props.question.q_topic}
        </div>
        <div className="col qsnheadcol">
          <label>Sub-Topic:</label>
          {props.question.q_sub_topic}
        </div>
        <div className="col qsnheadcol">
          <label>Question Type:</label>
          {props.question.q_type}
        </div>
      </div>
      <div className="row">
        <div className="col qsnheadcol">
          <label>For Exam:</label>
          {props.question.exam_type}
        </div>
        <div className="col qsnheadcol">
          <label>Difficulty Level:</label>
          {props.question.difficulty_level}
        </div>
        <div className="col qsnheadcol">
          <label>Difficulty Scale:</label>
          {props.question.scale}
        </div>
        <div className="col qsnheadcol">
          <label>Ideal Time(Faculty):</label>
          {props.question.it_faculty}
        </div>
        <div className="col qsnheadcol">
          <label>Ideal Time(Exam):</label>
          {props.question.it_exam}
        </div>
      </div>
      <div className="col">
        <Link to={"/edit/" + props.question._id} style={{ float: "right" }}>
          <i className="fa fa-edit i_edit">Edit</i>
        </Link>{" "}
        <a
          href="/home"
          style={{ float: "right" }}
          // onClick={() => {
          //   props.deleteQuestion(props.question._id);
          // }}
          onClick={() => {
            if (window.confirm("Are you sure to delete this Question?")) {
              props.deleteQuestion(props.question._id);
            }
          }}
        >
          <i className="fa fa-trash i_trash">Delete</i>
        </a>
      </div>
    </div>
    <br></br>
    <br></br>
    <div className="qsndiv">{props.question.question}</div>
  </li>
);

//const Question = props => <div>{props.question}</div>;

export default class QuestionsSearchHome extends Component {
  constructor(props) {
    super(props);
    this.deleteQuestion = this.deleteQuestion.bind(this);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeQ_Subject = this.onChangeQ_Subject.bind(this);

    // this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeQ_Sub_Tpic = this.onChangeQ_Sub_Tpic.bind(this);

    this.onChangeQ_Topic = this.onChangeQ_Topic.bind(this);
    this.onChangeQ_Type = this.onChangeQ_Type.bind(this);
    this.onChangeExam_Type = this.onChangeExam_Type.bind(this);
    this.onChangeDifficulty_Level = this.onChangeDifficulty_Level.bind(this);
    this.onChangeScale = this.onChangeScale.bind(this);
    this.onChangeIt_Faculty = this.onChangeIt_Faculty.bind(this);
    this.onChangeIt_Exam = this.onChangeIt_Exam.bind(this);
    this.onChangeScale = this.onChangeScale.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      questions: "",
      q_subject: "",
      q_topic: "",
      q_sub_topic: "",
      q_type: "",
      exam_type: "",
      difficulty_level: "",
      scale: "",
      it_faculty: "",
      it_exam: "",
      a_username: [],
      a_question: [],
      a_q_subject: [],
      a_q_topic: [],
      a_q_sub_topic: [],
      a_q_type: [],
      a_exam_type: [],
      a_difficulty_level: [],
      a_scale: [],
      a_it_faculty: [],
      a_it_exam: [],
      u_username: [],
      u_q_subject: [],
      u_q_topic: [],
      u_q_sub_topic: [],
      u_q_type: [],
      u_exam_type: [],
      u_difficulty_level: [],
      u_scale: [],
      u_it_faculty: [],
      u_it_exam: [],
      l_question: [],
      question: [],
    };
  }

  componentDidMount() {
    // auth.login(() => {
    //   this.authenticated = true;
    // });
    axios.get("http://localhost:5000/question/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          question: response.data,
          questions: response.data,

          a_username: response.data.map((question) => question.username),
          a_question: response.data.map((question) => question.question),
          a_q_subject: response.data.map((question) => question.q_subject),
          a_q_topic: response.data.map((question) => question.q_topic),
          a_q_sub_topic: response.data.map((question) => question.q_sub_topic),
          a_q_type: response.data.map((question) => question.q_type),
          a_exam_type: response.data.map((question) => question.exam_type),
          a_difficulty_level: response.data.map(
            (question) => question.difficulty_level
          ),
          a_scale: response.data.map((question) => question.scale),
          a_it_faculty: response.data.map((question) => question.it_faculty),
          a_it_exam: response.data.map((question) => question.it_exam),
        });
      }

      this.setState({
        u_username: [...new Set(this.state.a_username)],
        u_q_subject: [...new Set(this.state.a_q_subject)],
        u_q_topic: [...new Set(this.state.a_q_topic)],
        u_q_sub_topic: [...new Set(this.state.a_q_sub_topic)],
        u_q_type: [...new Set(this.state.a_q_type)],
        u_exam_type: [...new Set(this.state.a_exam_type)],
        u_difficulty_level: [...new Set(this.state.a_difficulty_level)],
        u_scale: [...new Set(this.state.a_scale)],
        u_it_faculty: [...new Set(this.state.a_it_faculty)],
        u_it_exam: [...new Set(this.state.a_it_exam)],
      });
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  // onChangeQuestion(e) {
  //   this.setState({
  //     question: e.target.value,
  //   });
  // }

  onChangeQ_Subject(e) {
    this.setState({
      q_subject: e.target.value,
    });
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

  deleteQuestion(id) {
    axios
      .delete("http://localhost:5000/question/" + id)
      .then((res) => console.lg(res.data));
    this.setState({
      question: this.state.question.filter((el) => el._id !== id),
    });
    window.alert("Your Question Log deleted Sucessfully !!");
  }

  questionList() {
    return this.state.question.map((currentquestion) => {
      return (
        <ITEMS
          question={currentquestion}
          deleteQuestion={this.deleteQuestion}
          key={currentquestion._id}
        />
      );
    });
  }

  render() {
    // const items = this.state.a_question.map(function (item) {
    //   return (
    //     <li className="qsn_li">
    //       <div className="row">
    //         <div className="col">
    //           <label>Created By : </label>
    //           <label>username</label>
    //         </div>
    //         <div className="col a_qsn">
    //           <a href="/edit/">
    //             <i className="fas fa-edit i_edit">Edit</i>
    //           </a>
    //           <a href="/home/">
    //             <i className="fas fa-trash i_trash">Delete</i>
    //           </a>
    //         </div>
    //         {/* <Link to={"/edit/" + this.state.questions._id}>
    //           <i className="fas fa-edit i_edit">Edit</i>
    //         </Link>
    //         <a
    //           href="/home"
    //           onClick={() => {
    //             this.state.deleteQuestion(this.state.questions._id);
    //           }}
    //         >
    //           <i className="fas fa-trash i_trash">Delete</i>
    //         </a> */}
    //       </div>
    //       <div className="qsndiv">{item}</div>
    //     </li>
    //   );
    // });
    // const ITEMS = props => ( this.state.question.map(function (items) {
    //   return (
    //     <li className="qsn_li">
    //       <div className="qsn_head">
    //         <div className="row">
    //           <div className="col qsnheadcol">
    //             <label>Created By:</label>
    //             {items.username}
    //           </div>
    //           <div className="col qsnheadcol">
    //             <label>Subject:</label>
    //             {items.q_subject}
    //           </div>
    //           <div className="col qsnheadcol">
    //             <label>Topic:</label>
    //             {items.q_topic}
    //           </div>
    //           <div className="col qsnheadcol">
    //             <label>Sub-Topic:</label>
    //             {items.q_sub_topic}
    //           </div>
    //           <div className="col qsnheadcol">
    //             <label>Question Type:</label>
    //             {items.q_type}
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col qsnheadcol">
    //             <label>For Exam:</label>
    //             {items.exam_type}
    //           </div>
    //           <div className="col qsnheadcol">
    //             <label>Difficulty Level:</label>
    //             {items.difficulty_level}
    //           </div>
    //           <div className="col qsnheadcol">
    //             <label>Difficulty Scale:</label>
    //             {items.scale}
    //           </div>
    //           <div className="col qsnheadcol">
    //             <label>Ideal Time(Faculty):</label>
    //             {items.it_faculty}
    //           </div>
    //           <div className="col qsnheadcol">
    //             <label>Ideal Time(Exam):</label>
    //             {items.it_exam}
    //           </div>
    //         </div>
    //         <div className="col">
    //           <Link to={"/edit/" + items._id} style={{ float: "right" }}>
    //             <i className="fa fa-edit i_edit">Edit</i>
    //           </Link>{" "}
    //           <a
    //             href="/home"
    //             style={{ float: "right" }}
    //             onClick={() => {
    //               items.deleteQuestion(items._id);
    //             }}
    //           >
    //             <i className="fa fa-trash i_trash">Delete</i>
    //           </a>
    //         </div>
    //       </div>
    //       <br></br>
    //       <br></br>
    //       <br></br>
    //       <div className="qsndiv">{items.question}</div>
    //     </li>
    //   );
    // })
    // );

    return (
      <div className="container-fluid qsn_main_div">
        <h3> Question List</h3>
        <div className="row qsh_row">
          <div className="col">
            <label>Username: </label>
            <select
              multiple
              required
              className="form-control multiple"
              value={this.username}
              onChange={this.onChangeUsername}
              style={{ height: "50px" }}
            >
              {this.state.u_username.map(function (u_username) {
                return (
                  <option key={u_username} value={u_username}>
                    {u_username}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label>Question Subject: </label>
            <select
              required
              className="form-control"
              value={this.q_subject}
              onChange={this.onChangeQ_Subject}
            >
              {this.state.u_q_subject.map(function (u_q_subject) {
                return (
                  <option key={u_q_subject} value={u_q_subject}>
                    {u_q_subject}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label>Question Topic: </label>
            <select
              required
              className="form-control"
              value={this.q_topic}
              onChange={this.onChangeQ_Topic}
            >
              {this.state.u_q_topic.map(function (u_q_topic) {
                return (
                  <option key={u_q_topic} value={u_q_topic}>
                    {u_q_topic}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label> Sub Topic: </label>
            <select
              required
              className="form-control"
              value={this.q_topic}
              onChange={this.onChangeQ_Sub_Tpic}
            >
              {this.state.u_q_sub_topic.map(function (u_q_sub_topic) {
                return (
                  <option key={u_q_sub_topic} value={u_q_sub_topic}>
                    {u_q_sub_topic}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label>Question Type: </label>
            <select
              required
              className="form-control"
              value={this.q_type}
              onChange={this.onChangeQ_Type}
            >
              {this.state.u_q_type.map(function (u_q_type) {
                return (
                  <option key={u_q_type} value={u_q_type}>
                    {u_q_type}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row qsh_row">
          <div className="col">
            <label>Exam Type: </label>
            <select
              required
              className="form-control"
              value={this.exam_type}
              onChange={this.onChangeExam_Type}
            >
              {this.state.u_exam_type.map(function (u_exam_type) {
                return (
                  <option key={u_exam_type} value={u_exam_type}>
                    {u_exam_type}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label>Difficulty Level: </label>
            <select
              required
              className="form-control"
              value={this.difficulty_level}
              onChange={this.onChangeDifficulty_Level}
            >
              {this.state.u_difficulty_level.map(function (u_difficulty_level) {
                return (
                  <option key={u_difficulty_level} value={u_difficulty_level}>
                    {u_difficulty_level}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label>Difficulty Scale: </label>
            <select
              required
              className="form-control"
              value={this.scale}
              onChange={this.onChangeScale}
            >
              {this.state.u_scale.map(function (u_scale) {
                return (
                  <option key={u_scale} value={u_scale}>
                    {u_scale}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label> Ideal Time(Faculty) </label>
            <select
              required
              className="form-control"
              value={this.it_faculty}
              onChange={this.onChangeIt_Faculty}
            >
              {this.state.u_it_faculty.map(function (u_it_faculty) {
                return (
                  <option key={u_it_faculty} value={u_it_faculty}>
                    {u_it_faculty}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label>Ideal Time(Exam): </label>
            <select
              required
              className="form-control"
              value={this.it_exam}
              onChange={this.onChangeIt_Exam}
            >
              {this.state.u_it_exam.map(function (u_it_exam) {
                return (
                  <option key={u_it_exam} value={u_it_exam}>
                    {u_it_exam}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row qsh_row">
          <div className="col">
            <div className="form-group">
              <button type="submit" className="btn btn-success button_design">
                Search
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="qsn_container">
          <ol>
            <pre>{this.questionList()}</pre>
          </ol>
        </div>
      </div>
    );
  }
}
