import React, { Component } from 'react';

class StudentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: "Swaraj", marks: 85 },
        { name: "Abhi", marks: 92 },
        { name: "Nik", marks: 76 },
        { name: "Adity", marks: 88 }
      ]
    };
  }
  
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {this.state.students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StudentTable;