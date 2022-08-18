import React from 'react'

function PresentStudent(props) {
  return (
    <ul>
    {props.students
      .filter((item) => item.isPresent === true)
      .map((student) => (
        <li>
          <span>{student.name}</span>
          <button onClick={() => props.toggleHandler(student.id)} className="mx-5 bg-red-400 rounded-md px-4 py-2 text-white">
            Accidentally Added
          </button>
        </li>
      ))}
  </ul>
  )
}

export default PresentStudent
