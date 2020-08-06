import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students = []
    }
  }
  
  componentDidMount(){
     this.state.params.match.id()
  }

  render() {
    const mappedStudents = this.state.students.map(student => {
      return <h3 key={student.id}>{student.first_name} {student.last_name}</h3>
    })
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}