import React from 'react'

function Form(props) {
  const createStudentHandeler = ()=>{
    if(props.studentName){
      const newStudent ={
        id: Date.now(),
        name: props.studentName
      }
      props.setStudentName('');
      props.setStudents([...props.students,newStudent]);
    }
    else{
      alert("please enter a student name");
    }
   
  }


  const updateStudentHandeler = ()=>{
    props.students.map((student)=>{
      if(student.id === props.editableStudent.id){
         student.name = props.studentName;
      }
      return student;
  })
    props.setEditStudent(false);
    props.setStudentName('');
    props.setEditableStudent(null);
  }

  return (
    
<form className='flex' onSubmit={(e)=>{
  e.preventDefault();
  props.editStudent?updateStudentHandeler():
  createStudentHandeler();
}}>
<div className="mb-6 my-10">
    <input type="text" id="email" className="bg-lime-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-96 mx-5 p-2.5" placeholder="write your student name" required=""
    value={props.studentName}
    onChange={(event) => props.setStudentName(event.target.value)} 
    />
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 h-11 px-5 my-10 rounded-xl">
    {props.editStudent?"Update Student" : "Add Student"}
  </button>
</form>

  )
}

export default Form
