import React from 'react'
import AllStudent from './AllStudent'
import PresentStudent from './PresentStudent'
import AbsentStudent from './AbsentStudent'

function StudentSection(props) {
  const toggleHandler = (id) => {
    const student = props.students.find((item) => item.id === id);

    props.setStudents(
      props.students.map((item) => {
        if (item.id === student.id) {
          item.isPresent = !item.isPresent; // !true // !false
        }
        return item;
      })
    );
  };
  return (
    <table className="table-auto border w-full my-10 container mx-auto">
  <thead className='border-b-2 border-dashed'>
    <tr>
      <th className='py-3'>All Student</th>
      <th className='py-3'>Present Student</th>
      <th className='py-3'>Absent Student</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='py-3'><AllStudent students={props.students} studentName ={props.studentName} setStudents={props.setStudents} setStudentName={props.setStudentName} editStudent={props.editStudent} setEditStudent={props.setEditStudent} editableStudent={props.editableStudent} setEditableStudent={props.setEditableStudent}/></td>
      <td><PresentStudent students={props.students} studentName ={props.studentName} setStudents={props.setStudents} setStudentName={props.setStudentName} toggleHandler={toggleHandler}/></td>
      <td><AbsentStudent students={props.students} studentName ={props.studentName} setStudents={props.setStudents} setStudentName={props.setStudentName} toggleHandler={toggleHandler}/></td>
    </tr>
  </tbody>
</table>
  )
}

export default StudentSection

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/freelancerrishad/second-application-todo-app-with-api.git
// git push -u origin main