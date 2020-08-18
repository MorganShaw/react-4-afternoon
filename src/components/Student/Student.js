import React, { Component } from 'react';
import axios from "axios";
import { Switch, Route, Link } from 'react-router-dom';


export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount = () => {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      // console.log("match object", this.props.match)
      this.setState({
        studentInfo: res.data
      })
    })
  }

  render() {
    const {studentInfo} = this.state;
    // console.log(this.props.history)
    return (
      <div className="box">
        <h1>Student:</h1>
        <h1>{studentInfo.first_name} {studentInfo.last_name}</h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email: {studentInfo.email}</h3>
        {/* <Switch>
          <Route path='/classlist/:class' component={ClassList}/>
        </Switch> */}
        {/* <Link to='/classlist/:class'> */}
          <button onClick={() =>  {this.props.history.goBack()}}>Back to Class List</button>
        {/* </Link> */}
      </div>
    )
  }
}

// {`/student/${student.id}`}