import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Students.css';
import { useNavigate } from 'react-router-dom';
import EnrollPopup from './EnrollPopup';

const baseURL = 'http://localhost:8080';

function Students() {

  useEffect(()=>{
    if(token===null){
      nav("/login")  
    }
  },[])
  const [editStudent, setEditStudent] = useState(
    {
      studentId:'',
      studentName: '',
      email: '',
      gender: '',
      year: '',
      dept: '',
      contactnum: '',
      address: '',
      quota: '',
      age: '',
      totalFees: '',
      feesPaid: '',
      dob: '',
    }
  );
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [edit,setEdit]=useState(false)
  const [enrollmentPopupOpen, setEnrollmentPopupOpen] = useState(false);
  const [studentsData, setStudentData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({
  
    studentName: '',
    email: '',
    gender: '',
    year: '',
    dept: '',
    contactnum: '',
    address: '',
    quota: '',
    age: '',
    totalFees: '',
    feesPaid: '',
    dob: '',
  });

  const [formErrors, setFormErrors] = useState({
    studentName: '',
    email: '',
    gender: '',
    year: '',
    dept: '',
    contactnum: '',
    address: '',
    quota: '',
    age: '',
    totalFees: '',
    feesPaid: '',
    dob: '',
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateFormData = () => {
    let valid = true;
    const errors = {};

    if (!formData.studentName) {
      valid = false;
      errors.studentName = 'Student Name is required';
    }

    if (!formData.email) {
      valid = false;
      errors.email = 'Student Email is required';
    }

    if (!formData.gender) {
      valid = false;
      errors.gender = 'Gender is required';
    }

    if (!formData.year) {
      valid = false;
      errors.year = 'Year is required';
    }

    if (!formData.dept) {
      valid = false;
      errors.dept = 'Department is required';
    }

    if (!formData.contactnum) {
      valid = false;
      errors.contactnum = 'Contact Number is required';
    } else if (!/^\d+$/.test(formData.contactnum)) {
      valid = false;
      errors.contactnum = 'Contact Number must contain only digits';
    }

    if (!formData.address) {
      valid = false;
      errors.address = 'Address is required';
    }

    if (!formData.quota) {
      valid = false;
      errors.quota = 'Quota is required';
    }

    if (!formData.age) {
      valid = false;
      errors.age = 'Age is required';
    } else if (!/^\d+$/.test(formData.age)) {
      valid = false;
      errors.age = 'Age must contain only digits';
    }

    if (!formData.totalFees) {
      valid = false;
      errors.totalFees = 'Total Fees is required';
    } else if (!/^\d+$/.test(formData.totalFees)) {
      valid = false;
      errors.totalFees = 'Total Fees must contain only digits';
    }

    if (!formData.feesPaid) {
      valid = false;
      errors.feesPaid = 'Fees Paid is required';
    } else if (!/^\d+$/.test(formData.feesPaid)) {
      valid = false;
      errors.feesPaid = 'Fees Paid must contain only digits';
    }

    if (!formData.dob) {
      valid = false;
      errors.dob = 'DOB is required';
    }

    setFormErrors(errors);
    return valid;
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${baseURL}/students`);
      setStudentData(response.data);
    } catch (error) { 
      console.error('Error fetching students:', error);
    }
  };
  useEffect(() => {
    axios.get("http://localhost:8080/students",{
      headers:{
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', 
      }}).then(response=>{
        setStudentData(response.data)
        console.log(studentsData)
        
      }).catch(error=>{
        if(error.response.status===403){
          localStorage.clear();
        alert("Something went Wrong..! Try logging in again")
        nav("/login")
        }
      })
  }, []);
  const handleEdit=(student)=>{
    setEdit(true)
    togglePopup();
    setFormData({
      studentName:student.studentName,
      email:student.email,
      gender:student.gender,
      year:student.year,
      dept:student.dept,
      contactnum:student.contactnum,
      address:student.address,
      quota:student.quota,
      age:student.age,
      totalFees:student.totalFees,
      feesPaid:student.feesPaid,
      dob:student.dob,
    });
   setEditStudent({
        studentId:student.studentId,
        studentName:formData.studentName,
        email:formData.email,
        gender:formData.gender,
        year:formData.year,
        dept:formData.dept,
        contactnum:formData.contactnum,
        address:formData.address,
        quota:formData.quota,
        age:formData.age,
        totalFees:formData.totalFees,
        feesPaid:formData.feesPaid,
        dob:formData.dob,
      });
  }
  const handleSubmit = () => {
    console.log(formData)

    if(edit){
      const submitData = {
        studentName: formData.studentName,
        email: formData.email,
        gender: formData.gender,
        year: formData.year,
        dept:formData.dept,
        contactnum:formData.contactnum,
        address:formData.address,
        quota:formData.quota,
        age:formData.age,
        totalFees:formData.totalFees,
        feesPaid:formData.feesPaid,
        dob:formData.dob,
      };      
      console.log(editStudent.studentId);
      console.log(token)
        axios.put(`http://localhost:8080/students/${editStudent.studentId}`, submitData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': "application/json",
            },
          })
          .then((response) => {
            if (response.data) {
              alert("Student detail Updated");
            }
            fetchStudents();
            window.location.reload()
          })
          .catch((error) => {
            console.error('Failed to update Student details:', error);
          });
      
    }
    else{
      if (validateFormData()) {
        axios.post(`${baseURL}/students`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            if (response.status === 200) {
              alert('Student Added');
              fetchStudents();
              window.location.reload()
              togglePopup();
            }
            console.log(response);
          })
          .catch((error) => {
            if (error.response.status === 403) {
              localStorage.clear();
              alert('Something went wrong! Try logging in again');
              nav('/login');
            }
          });
      } else {
        console.error('Please fill in all the required fields.');
      }
    }
    togglePopup();
   };

  const handleDeleteStudent = (studentId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete the Student?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8080/students/${studentId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data) {
            alert("Student Deleted");
          }
          fetchStudents();
        })
        .catch((error) => {
          console.error('Failed to delete a Student:', error);
        });
        window.location.reload()
    }
  };
  

  const token = localStorage.getItem('token');
  const nav = useNavigate();

  const handleEnroll = (courseId) => {
    const enrollmentData = {
      courseId: courseId,
      studentId: selectedStudentId,
    };
  }
  const handleEnrollmentClick = (studentId) => {
    setSelectedStudentId(studentId);
    setEnrollmentPopupOpen(true);
  };
  return (
    <div className="stud">
      <div className="students-container">
        <div className="topstu">
          <h3 id="sphd">STUDENT PROFILE</h3>
          <input id="stuser" type="text" placeholder="Search.." />
          <button onClick={togglePopup} id="addstubtn">
            Add Student
          </button>
          {isOpen && (
            <div className="popup">
              <div className="popup-content">
                <span className="close" onClick={togglePopup}>
                  &times;
                </span>
                <h2>ADD STUDENT</h2>
                <form>
                  <label htmlFor="studentName">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    id="name"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.studentName && (
                    <p className="error-message">{formErrors.studentName}</p>
                  )}

                  <label htmlFor="email">Student Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.email && (
                    <p className="error-message">{formErrors.email}</p>
                  )}

                  <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.gender && (
                    <p className="error-message">{formErrors.gender}</p>
                  )}

                  <label htmlFor="year">Year</label>
                  <input
                    type="text"
                    name="year"
                    id="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.year && (
                    <p className="error-message">{formErrors.year}</p>
                  )}

                  <label htmlFor="dept">Department</label>
                  <input
                    type="text"
                    name="dept"
                    id="dept"
                    value={formData.dept}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.dept && (
                    <p className="error-message">{formErrors.dept}</p>
                  )}

                  <label htmlFor="contactnum">Contact Number</label>
                  <input
                    type="text"
                    name="contactnum"
                    id="contactnum"
                    value={formData.contactnum}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.contactnum && (
                    <p className="error-message">{formErrors.contactnum}</p>
                  )}

                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.address && (
                    <p className="error-message">{formErrors.address}</p>
                  )}

                  <label htmlFor="quota">Quota</label>
                  <input
                    type="text"
                    name="quota"
                    id="quota"
                    value={formData.quota}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.quota && (
                    <p className="error-message">{formErrors.quota}</p>
                  )}

                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.age && (
                    <p className="error-message">{formErrors.age}</p>
                  )}

                  <label htmlFor="totalFees">Total Fees</label>
                  <input
                    type="text"
                    name="totalFees"
                    id="totalFees"
                    value={formData.totalFees}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.totalFees && (
                    <p className="error-message">{formErrors.totalFees}</p>
                  )}

                  <label htmlFor="feesPaid">Fees Paid</label>
                  <input
                    type="text"
                    name="feesPaid"
                    id="feesPaid"
                    value={formData.feesPaid}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.feesPaid && (
                    <p className="error-message">{formErrors.feesPaid}</p>
                  )}

                  <label htmlFor="dob">DOB</label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.dob && (
                    <p className="error-message">{formErrors.dob}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="submit-button"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        {studentsData.map((student) => (
          <div className="student-box" key={student.id}>
            <div className="student-image">
            <img src={student.gender==="Male"
              ? 'https://cdn-icons-png.flaticon.com/512/4537/4537069.png'
              : 'https://cdn-icons-png.flaticon.com/512/180/180679.png'
       } alt={student.studentName} />
          </div>
            <div className="student-details">
              <div className="student-info">
                <p className="student-name">NAME : {student.studentName}</p>
                <p className="student-id">STUDENT ID : {student.studentId}</p>
              </div>
              <div className="detail-box">
                <div className="detail">
                  <strong>Department:</strong> {student.dept}
                </div>
                <div className="detail">
                  <strong>Quota:</strong> {student.quota}
                </div>
                <div className="detail">
                  <strong>Contact:</strong> {student.contactnum}
                </div>
                <div className="detail">
                  <strong>Address:</strong> {student.address}
                </div>
                <div className="detail">
                  <strong>AvgGrade:</strong> {student.avggrade}
                </div>
                <div className="button-container">
                  <button className="student-button edit" onClick={()=>handleEdit(student)}>Edit</button>
                  <button className="student-button delete" onClick={() =>  handleDeleteStudent(student.studentId)}>Delete</button>
                  <button className="student-button enroll" onClick={() => handleEnrollmentClick(student.studentId)}>Enroll</button>
          
                </div>
              </div>
            </div>
          </div>
        ))}
        {enrollmentPopupOpen && (
          <EnrollPopup 
          onEnroll={handleEnroll}
          selectedStudentId={selectedStudentId}
          onClose={() => setEnrollmentPopupOpen(false)}
          setEnrollmentPopupOpen={setEnrollmentPopupOpen}
          />
          )}
          </div>
          </div>
  );
}

export default Students;
