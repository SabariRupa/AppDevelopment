import React, { useEffect, useState } from 'react';
import './AttendStaff.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const studentDatabase = [
  {
    id: 1,
    name: 'John Smith',
    department: 'ECE A',
    year: 'Year I',
    rollNumber: 'ECEA001',
    contact: '123-456-7890',
    isPresent: true,
  },
  {
    id: 2,
    name: 'Alice Johnson',
    department: 'ECE A',
    year: 'Year I',
    rollNumber: 'ECEA002',
    contact: '234-567-8901',
    isPresent: true,
  },
  {
    id: 3,
    name: 'Michael Brown',
    department: 'ECE B',
    year: 'Year I',
    rollNumber: 'ECEB001',
    contact: '345-678-9012',
    isPresent: true,
  },
  {
    id: 4,
    name: 'Emily Davis',
    department: 'ECE B',
    year: 'Year I',
    rollNumber: 'ECEB002',
    contact: '456-789-0123',
    isPresent: true,
  },
  {
    id: 5,
    name: 'Daniel Lee',
    department: 'EEE A',
    year: 'Year I',
    rollNumber: 'EEEA001',
    contact: '567-890-1234',
    isPresent: true,
  },
  {
    id: 6,
    name: 'Olivia White',
    department: 'EEE A',
    year: 'Year I',
    rollNumber: 'EEEA002',
    contact: '678-901-2345',
    isPresent: true,
  },
  {
    id: 7,
    name: 'William Anderson',
    department: 'EEE B',
    year: 'Year I',
    rollNumber: 'EEEB001',
    contact: '789-012-3456',
    isPresent: true,
  },
  {
    id: 8,
    name: 'Sophia Hall',
    department: 'EEE B',
    year: 'Year I',
    rollNumber: 'EEEB002',
    contact: '890-123-4567',
    isPresent: true,
  },
  {
    id: 9,
    name: 'James Turner',
    department: 'IT A',
    year: 'Year I',
    rollNumber: 'ITA001',
    contact: '901-234-5678',
    isPresent: true,
  },
  {
    id: 10,
    name: 'Ava King',
    department: 'IT A',
    year: 'Year I',
    rollNumber: 'ITA002',
    contact: '012-345-6789',
    isPresent: true,
  },
  {
    id: 11,
    name: 'Benjamin Walker',
    department: 'IT B',
    year: 'Year I',
    rollNumber: 'ITB001',
    contact: '123-456-7890',
    isPresent: true,
  },
  {
    id: 12,
    name: 'Mia Martin',
    department: 'IT B',
    year: 'Year I',
    rollNumber: 'ITB002',
    contact: '234-567-8901',
    isPresent: true,
  },
  {
    id: 13,
    name: 'Ethan Baker',
    department: 'CSE A',
    year: 'Year I',
    rollNumber: 'CSEA001',
    contact: '345-678-9012',
    isPresent: true,
  },
  {
    id: 14,
    name: 'Emma Garcia',
    department: 'CSE A',
    year: 'Year I',
    rollNumber: 'CSEA002',
    contact: '456-789-0123',
    isPresent: true,
  },
  {
    id: 15,
    name: 'Jacob Allen',
    department: 'CSE B',
    year: 'Year I',
    rollNumber: 'CSEB001',
    contact: '567-890-1234',
    isPresent: true,
  },
];const AttendanceStaff = () => {
  
  const nav=useNavigate();
  const token=localStorage.getItem("token")
  useEffect(()=>{

    if(token===null){
      nav("/inslogin")
      
    }
  },[])
  const [studentDatabase, setStudentsDatabase] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedClassAttendance, setSelectedClassAttendance] = useState([]);
  const [selectedHour, setSelectedHour] = useState(1);

  const handleAttendanceChange = (studentId) => {
    setAttendanceData((prevData) =>
      prevData.map((student) =>
        student.studentId === studentId ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  const getAttendanceText = (isPresent) => {
    return isPresent ? 'Present' : 'Absent';
  };

  const generateClassAttendanceData = () => {
    axios
      .post("http://localhost:8080/attendence", {
        hour: selectedHour,
        date: new Date(), 
        values: attendanceData.map((student) => ({
          studentId: student.studentId,
          value: student.isPresent ? 'Present' : 'Absent',
        })),
      })
      .then((response) => {
      if(response.status===200){
        alert("Attendence Posted")
        window.location.reload();
      }
      else{
        
      }
    })
    .catch((error) => {
      console.error('Failed to post attendance data:', error);
      alert("Somehting Went Wrong...")
      });
  };

  const fetchStudentsByDepartmentAndYear = () => {
    console.log(selectedDepartment)
    console.log(selectedYear)
    axios
      .get(`http://localhost:8080/students/department/${selectedDepartment}/year/${selectedYear}`)
      .then((response) => {
        console.log(response)
        setAttendanceData(response.data);
        setStudentsDatabase(response.data);
        console.log(attendanceData)
      })
      .catch((error) => {
        console.error('Failed to fetch students:', error);
      });
  };

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/students/unique/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="att">
      <h2>Attendance Generator</h2>
      <div class="ice">
        <label>Department and section:</label>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="class">Select Class</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>

      <div class="ice">
        <label>Acdm Year:</label>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="1">Select Year </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div class="ice">
        <label>Select Hour:</label>
        <select  value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
          <option value={1}>Hour 1</option>
          <option value={2}>Hour 2</option>
          <option value={3}>Hour 3</option>
          <option value={4}>Hour 4</option>
          <option value={5}>Hour 5</option>
          <option value={6}>Hour 6</option>
          <option value={7}>Hour 7</option>
        </select>
      </div>
      <button onClick={fetchStudentsByDepartmentAndYear}>Fetch Students</button>
      <table>
        <thead>
          <tr>
            <th>Register Number</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData
            
            .map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.contactnum}</td>
                <td>
                  <span
                    onClick={() => {
                      handleAttendanceChange(student.studentId);
                    }}
                    style={{
                      cursor: 'pointer',
                      color: student.isPresent ? 'green' : 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    {getAttendanceText(student.isPresent)}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button onClick={generateClassAttendanceData}>Submit</button>

      
    </div>
  );
};

export default AttendanceStaff;