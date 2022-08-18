
import './App.css';
import Form from './Components/Form';
import { useState } from 'react';
import StudentSection from './Components/StudentSection';
function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  return (
    <div className="App">
      <div>
        <Form studentName={studentName} setStudentName={setStudentName} students={students} setStudents={setStudents} editStudent={editStudent} setEditStudent={setEditStudent} editableStudent={editableStudent} setEditableStudent={setEditableStudent}/>
        
      </div>
      
      <StudentSection students={students} studentName={studentName} setStudents={setStudents} setStudentName={setStudentName} editStudent={editStudent} setEditStudent={setEditStudent} editableStudent={editableStudent} setEditableStudent={setEditableStudent}/>
      
    </div>
  );
}

export default App;
