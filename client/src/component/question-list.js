import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Question = props => (
  <tr>
    <td>{props.question.username}</td>
    <td>{props.question.question}</td>
    <td>{props.question.q_subject}</td>
    <td>{props.question.q_topic}</td>
    <td>{props.question.q_sub_topic}</td>
    <td>{props.question.q_type}</td>
    <td>{props.question.exam_type}</td>
    <td>{props.question.difficulty_level}</td>
    <td>{props.question.scale}</td>
    <td>{props.question.it_faculty}</td>
    <td>{props.question.it_exam}</td>
    <td>
      <Link to={"/edit/" + props.question._id}>Edit</Link> |
      <a
        href="/home"
        onClick={() => {
          props.deleteQuestion(props.question._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.deleteQuestion = this.deleteQuestion.bind(this);

    this.state = {
      question: [],
    };
  }
  

  componentDidMount() {
    axios
      .get("http://localhost:5000/question/")
      .then(response => {
        this.setState({
          question: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteQuestion(id) {
    axios
      .delete("http://localhost:5000/question/" + id)
      .then(res => console.lg(res.data));
    this.setState({
      question: this.state.question.filter(el => el._id !== id),
    });
    window.confirm("Do you really want to delete this question Log ?");
  }

  questionList() {
    return this.state.question.map(currentquestion => {
      return (
        <Question
          question={currentquestion}
          deleteQuestion={this.deleteQuestion}
          key={currentquestion._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h3> Logged Questions List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Questions </th>
              <th>Question Subject</th>
              <th>Question Topic</th>
              <th>Question Sub Topic</th>
              <th>Question Type</th>
              <th>Exam Type</th>
              <th>Difficulty Level</th>
              <th>Difficulty Scale</th>
              <th>Ideal Time Faculty</th>
              <th>Ideal Time Exam</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.questionList()}</tbody>
        </table>
      </div>
    );
  }
}
