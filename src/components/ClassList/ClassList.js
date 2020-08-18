import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }
  
  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        students: res.data
      })
      // console.log("PARAMS", this.props.match.params)
    })
  }
//may need to change the key to index. Test this and find out.
  render() {
    const mappedStudents = this.state.students.map((student) => {
      return <Link to={`/student/${student.id}`} key={student.id}>
      <h3>{student.first_name} {student.last_name}</h3>
      </Link>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}