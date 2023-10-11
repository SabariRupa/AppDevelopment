import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cources.css';
import { useNavigate } from 'react-router-dom';

function Courses() {
  const nav=useNavigate();
  const token=localStorage.getItem("token")
  useEffect(()=>{

    if(token===null){
      nav("/login")
    }
  },[])
  const [edit,setEdit]=useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mentor: '',
    url: '',
    desc: '',
  });
  const [coursesData, setCoursesData] = useState([]);
  const [editCourse, setEditCourse] = useState(null);
  const type = localStorage.getItem("role");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = {
      courseDescription: formData.desc,
      courseName: formData.name,
      courseUrl: formData.url,
      instructor: formData.mentor,
    };
    

    if (edit) {
      axios.put(`http://localhost:8080/courses/${editCourse.courseId}`, submitData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': "application/json",
          },
        })
        .then((response) => {
          if (response.data) {
            alert("Course Updated");
          }
          fetchCourses();
          setEditCourse(null);
        })
        .catch((error) => {
          console.error('Failed to update course:', error);
        });
    } 
    else {
      axios
        .post("http://localhost:8080/courses", submitData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': "application/json",
          },
        })
        .then((response) => {
          if (response.data) {
            alert("Course Added");
          }
          fetchCourses();
        })
        .catch((error) => {
          console.error('Failed to add course:', error);
        });
    }
    window.location.reload()
    togglePopup();
  };

  const handleEditCourse = (course) => {
    setEdit(true)
    setEditCourse(course);
    setFormData({
      name: course.courseName,
      mentor: course.instructor,
      url: course.courseUrl,
      desc: course.courseDescription,
    });
    togglePopup();
  };

  const handleDeleteCourse = (courseId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8080/courses/${courseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data) {
            alert("Course Deleted");
          }
          
          fetchCourses();
        })
        .catch((error) => {
          console.error('Failed to delete course:', error);
        });
        window.location.reload()
    }
  };

  const fetchCourses = () => {
    axios
      .get("http://localhost:8080/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCoursesData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch courses:', error);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="cour-top">
      <h3 id="cdhd">COURSE OVERVIEW</h3>
      <input id="courser" type="text" placeholder="Search.." />
      {type === "ADMIN" ? (
        <button onClick={togglePopup} id="addcourbtn">Add Courses</button>
      ) : <></>}

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h2>{editCourse ? "EDIT COURSE" : "ADD COURSE"}</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Course Title:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="mentor">Course Mentor</label>
              <input
                type="text"
                name="mentor"
                id="email"
                value={formData.mentor}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="url">Course URL</label>
              <input
                type="text"
                name="url"
                id="email"
                value={formData.url}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="desc">Course Description</label>
              <textarea
                name="desc"
                id="message"
                value={formData.desc}
                onChange={handleInputChange}
                required
              ></textarea>

              <button type="submit" className="submit-button">
                {editCourse ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="cour">
        {coursesData.map((course) => (
          <a href="#" className="course_block" key={course.courseId}>
            <div className="course_image">
              <img src={course.courseUrl} alt={course.courseName} />
          
              <div className="view_course">VIEW DETAILS</div>
            </div>
            <div className="course_details">
              <h3>{course.courseName}</h3>
              <p>{course.courseDescription}</p>
            </div>
            <div className="course_top_notices">
              {course.isNew ? <div className="course_new" title="Newly added Course">NEW</div> : null}
              {course.isUnique ? <div className="course_unique" title="Course not easily available elsewhere">UNIQUE</div> : null}
            </div>
            {type === "ADMIN" ? (
              <div>
                <button className='coureditbtn' onClick={() => handleEditCourse(course)}>Edit</button>
                <button className='courdelbtn' onClick={() => handleDeleteCourse(course.courseId)}>Delete</button>
              </div>
            ) : <></>}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Courses;
