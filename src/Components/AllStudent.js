import React from "react";

function AllStudent(props) {
  const editHandeler = (id) => {
    const studentId = props.students.find((item) => item.id === id);
    props.setEditStudent(true);
    props.setStudentName(studentId.name);
    props.setEditableStudent(studentId);
  };

  const deleteHandeler = (id) => {
    const studentId = props.students.filter((item) => item.id !== id);
    props.setStudents(studentId);
  };

  const presentHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("The Student is already present in the present list");
    } else if (student.isPresent === false) {
      alert("The Student is already present in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((item) => {
          if (item.id === student.id) {
            item.isPresent = true;
          }

          return item;
        })
      );
    }
  };

  const absentHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("The Student is already present in the present list");
    } else if (student.isPresent === false) {
      alert("The Student is already present in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((item) => {
          if (item.id === student.id) {
            item.isPresent = false;
          }

          return item;
        })
      );
    }
  };

  return (
    <ul>
      {props.students.map((student) => (
        <li>
          <span>{student.name}</span>
          <button
            className="mx-5 bg-blue-500 my-2 px-5 py-2 rounded-xl text-white"
            onClick={() => {
              editHandeler(student.id);
            }}
          >
            Edit
          </button>
          <button
            className="mx-5 bg-red-500 my-2 px-5 py-2 rounded-xl text-white"
            onClick={() => {
              deleteHandeler(student.id);
            }}
          >
            Delete
          </button>
          <button
            className="mx-5 bg-green-500 my-2 px-5 py-2 rounded-xl text-white"
            onClick={() => presentHandler(student.id)}
          >
            Present
          </button>

          <button
            className="mx-5 bg-yellow-500 my-2 px-5 py-2 rounded-xl text-white"
            onClick={() => absentHandler(student.id)}
          >
            Absent
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AllStudent;
