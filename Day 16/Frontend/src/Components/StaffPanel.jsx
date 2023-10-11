import React from 'react';
import './StaffPanel.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

function StaffPanel() {

  const barChartData = [
    { name: 'Category 1', value: 10 },
    { name: 'Category 2', value: 20 },
    { name: 'Category 3', value: 15 },
    { name: 'Category 4', value: 25 },
  ];
  const studentDetails = [
    { studentId: 1, name: 'John Doe', department: 'Computer Science' },
    { studentId: 2, name: 'Jane Smith', department: 'Electrical Engineering' },
    
  ];


  const pieChartData = [
    { name: 'Category A', value: 30 },
    { name: 'Category B', value: 20 },
    { name: 'Category C', value: 10 },
  ];


  const pieChartColors = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="staff-panel">
      <header>
        <h2>Staff Panel</h2>
      </header>
      <div className="overview">
      <div className="overview-item">
        <img src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Preppy_1.png" alt="User Icon" />
        <h5>Total Staff Members</h5>
        <h6>50</h6>
      </div>

      <div className="overview-item">
        <img src="https://w7.pngwing.com/pngs/871/895/png-transparent-subject-tutor-english-learning-school-school-angle-material-teacher-thumbnail.png" alt="Subjects Icon" />
        <h5>Total Subjects Taught</h5>
        <h6>27</h6>
      </div>

      <div className="overview-item">
        <img src="https://img.favpng.com/8/3/7/apprendimento-online-computer-icons-course-educational-technology-learning-png-favpng-7B4Dqihzd05XStsSBK7Sdvqiy.jpg" alt="Courses Icon" />
        <h5>Total Courses Offered</h5>
        <h6>45</h6>
      </div>
    </div>

      <div className="charts-container">
        <div className="bar-chart-section">
          <h3>Bar Chart</h3>
          <div className="bar-chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="pie-chart-section">
          <h3>Pie Chart</h3>
          <div className="pie-chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="student-details">
        <h3>Student Details</h3>
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.name}</td>
                <td>{student.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="additional-content">
        <h3>Additional Content</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis in
          metus tincidunt, sit amet posuere est venenatis. Fusce lacinia turpis non risus
          interdum, eget varius tellus ultrices.
        </p>
      </div>
    </div>
  );
}

export default StaffPanel;
