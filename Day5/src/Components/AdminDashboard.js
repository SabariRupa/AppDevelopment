import React from 'react';
import './admin.css';
import DangerousIcon from '@mui/icons-material/Dangerous';

function AdminDashboard() {
  return (
    <div id="main">
  <div>
  <h2 id="h2">OVERVIEW </h2>
  </div>
        <div>
        <div id="overview">
        <div className="one">
        <img id="truck" src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Preppy_1.png"/>
        <h5>Total number of Students Enrolled</h5>
        <h6>100</h6>
        </div>
        </div>   
        <div id="overview">
        <div className="two">
        <img id="truck" src="https://w7.pngwing.com/pngs/871/895/png-transparent-subject-tutor-english-learning-school-school-angle-material-teacher-thumbnail.png"/>
        <h5>Total Number of Subjects offered</h5>
        <h6>27</h6>
        </div>
        </div>   
        <div id="overview">
        <div className="three">
        <img id="truck" src="https://img.favpng.com/8/3/7/apprendimento-online-computer-icons-course-educational-technology-learning-png-favpng-7B4Dqihzd05XStsSBK7Sdvqiy.jpg"/>
      
        
        <h5>Enrolled Courses by Students</h5>
        <h6>75</h6>
        </div>
        </div>   
        <div id="overview">
        <div className="four">
        <img id="truck" src="https://www.rippleslearning.com/wp-content/uploads/2019/04/photo_2020-02-21_17-26-57.jpg"/>
        <h5>Instructors</h5>
        <h6>50 </h6>
        </div>
        </div>
        </div>  
        
        <div id="div2">
        <div className="booking-list">
        <h3 id="det">STUDENT DETAILS</h3>     
        <table id="home-table">
        <tr id="home-tr">
        <th id="home-th">STUDENT ID</th>
        <th id="home-th">DEPT</th>
        <th id="home-th">ENROLLED COURSES</th>
        <th id="home-th">GRADE</th>
        </tr>
        <tr>
        <td id="home-td">127</td>
        <td id="home-td">RUPA</td>
        <td id="home-td"> Java</td>
        <td id="home-td">A</td>
        </tr>
        <tr>
        <td id="home-td">139</td>
        <td id="home-td">SIVA</td>
        <td id="home-td"> RDBMS</td>
        <td id="home-td">O</td>
        </tr>
        <tr>
        <td id="home-td">110</td>
        <td id="home-td">NITHEESH</td>
        <td id="home-td"> C++</td>
        <td id="home-td">A+</td>
        </tr>
        
        </table>
        </div>
        </div>
       
        
    </div>
  );
}

export default AdminDashboard;
