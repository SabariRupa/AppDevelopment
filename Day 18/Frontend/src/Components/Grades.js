import React, { useEffect, useState } from 'react';
import './Grades.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const nav=useNavigate();
  const token=localStorage.getItem("token")
  useEffect(()=>{

    if(token===null){
      nav("/inslogin")
      
    }
  },[])
  const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
  const courses = ['React', 'Java', 'Testing', 'RDBMS']; 

  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  const [studentGrades, setStudentGrades] = useState(
    students.reduce((initialGrades, student) => {
      initialGrades[student] = {};
      courses.forEach((course) => {
        initialGrades[student][course] = '';
      });
      return initialGrades;
    }, {})
  );

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const handleGradeChange = (course, grade) => {
    setStudentGrades({
      ...studentGrades,
      [selectedStudent]: {
        ...studentGrades[selectedStudent],
        [course]: grade,
      },
    });
  };

  const calculateAverageGrade = () => {
    const grades = Object.values(studentGrades[selectedStudent]);
    const filteredGrades = grades.filter((grade) => grade !== '');
    if (filteredGrades.length === 0) return 'N/A';

    const sum = filteredGrades.reduce((acc, grade) => acc + mapGradeToNumber(grade), 0);
    const average = sum / filteredGrades.length;
    return mapNumberToGrade(average);
  };

  const mapNumberToGrade = (number) => {
    if (number >= 90) return 'A';
    if (number >= 80) return 'B';
    if (number >= 70) return 'C';
    if (number >= 60) return 'D';
    return 'F';
  };

  const mapGradeToNumber = (grade) => {
    switch (grade.toUpperCase()) {
      case 'A':
        return 90;
      case 'B':
        return 80;
      case 'C':
        return 70;
      case 'D':
        return 60;
      default:
        return 0;
    }
  };

  return (
    <div className="app-container">
    <h3 id="grd">GRADING  SYSTEM</h3>
      <div className="app">
        <div className="student-selector">
          <label>Select Student:</label>
          <select value={selectedStudent} onChange={handleStudentChange}>
            {students.map((student) => (
              <option key={student} value={student}>
                {student}
              </option>
            ))}
          </select>
        </div>
    
        <div className="student-details">
          <h2>{selectedStudent} Details</h2>
          <p>Age: 18</p>
          <p>Address: 123 Main St</p>
        
        </div>
        <div className="course-grades-container">
          <h2>Grades for {selectedStudent}</h2>
          <div className="course-grades">
            {courses.map((course, index) => (
              <div key={index} className="course">
                <h3>{course}</h3>
                <input
                  type="text"
                  placeholder="Enter grade"
                  value={studentGrades[selectedStudent][course]}
                  onChange={(e) => handleGradeChange(course, e.target.value)}
                  className="grade-input"
                />
              </div>
            ))}
          </div>
          <div className="average-grade">
            <p>Average Grade: {calculateAverageGrade()}</p>
            
          </div>
          <button class="btn" onClick={()=>window.print()}>Download Report</button>
        </div>
      </div>
    </div>
  );
}

export default App;
