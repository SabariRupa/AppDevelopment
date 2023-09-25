// Students.js
import React, { useState } from 'react';
import './Students.css';
const studentsData = [
  {
    id: 1,
    name: 'Manohar',
    studentId: '321000001',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MpTvf6sSdH4-HJlIdx5JJoTeErRSsRPGl7HXNpvfm-APLuQ-fGNd-WQUtK1rW5MSW8o&usqp=CAU',
    dept: 'cse',
    quota: 'GQ',
   contactnum: '9874563210',
    address: 'Coimbatore',
    avggrade: 'B+',
  },
  {
    id: 2,
    name: 'Nitheesh Annad',
    studentId: '321000002',
    imageUrl: 'https://cdn2.iconfinder.com/data/icons/user-23/512/User_Preppy_1.png',
    dept: 'cse',
    quota: 'MQ',
   contactnum: '8957463210',
    address: 'Erode',
    avggrade: 'A+',
  },
  {
    id: 3,
    name: 'Manoj Kumar',
    studentId: '321000003',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZJ924ReoKW-B03GXI7L5mlXELDcjiYQut6sX_4mPwwxjRdzXzaCr0jX32G_Nlx_M490&usqp=CAU',
    dept: 'IT',
    quota: 'GQ',
   contactnum: '7896541230',
    address: 'Namakal',
    avggrade: 'A',
  },
  {
    id: 4,
    name: 'Nagarjunan',
    studentId: '321000004',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8-G0xQpTnbWG-9gcNIpPKnoT00TchnCTF5ujm0iFDrA--nX4K79nukXwtFKHvY2arSc&usqp=CAU',
    dept: 'IT',
    quota: 'MQ',
   contactnum: '8965741230',
    address: 'Tirupur',
    avggrade: 'O+',
  },

  {
    id: 5,
    name: 'Prasath Kannan',
    studentId: '321000005',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TuRpHE4qgxxTdhCwsshNJ4iU8wZY0AiLEecSnJVBfrrOKIlpILIjkEPKwXCfcfu3Xms&usqp=CAU',
    dept: 'ECE',
    quota: 'GQ',
   contactnum: '8965741330',
    address: 'Pollachi',
    avggrade: 'B+',
  },
  {
    id: 6,
    name: 'Malarvizhi',
    studentId: '321000006',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUph_psS-pd3wxSZht0lHSzwLLJ36G6IZvBW8BEZJYxJOesx3duJzAUGK66waXc_MzSPU&usqp=CAU',
    dept: 'ECE',
    quota: 'MQ',
   contactnum: '9874526310',
    address: 'Kuniyamuthur',
    avggrade: 'B-',
  },
  {
    id: 7,
    name: 'Aravind kumar',
    studentId: '321000007',
    imageUrl: 'https://cdn3.iconfinder.com/data/icons/avatar-set-2/512/Avata_06-512.png',
    dept: 'EEE',
    quota: 'GQ',
   contactnum: '8523697410',
    address: 'Karur',
    avggrade: 'O',
  },
  {
    id: 8,
    name: 'Naveen Kumar',
    studentId: '321000008',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2059/2059570.png',
    dept: 'EEE',
    quota: 'MQ',
   contactnum: '7562241893',
    address: 'Kovaipudhur',
    avggrade: 'B+',
  },
  {
    id: 9,
    name: 'Kannnapan',
    studentId: '321000009',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/5294/5294626.png',
    dept: 'Civil',
    quota: 'GQ',
   contactnum: '8574961230',
    address: 'Thoothukudi',
    avggrade: 'A+',
  },
  {
    id: 10,
    name: 'Santhosh kumar',
    studentId: '321000010',
    imageUrl: 'https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/16-512.png',
    dept: 'Civil',
    quota: 'MQ',
   contactnum: '7854963210',
    address: 'Ariyalur',
    avggrade: 'O+',
  },
  {
    id: 11,
    name: 'Ram Kumar',
    studentId: '321000011',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcNtuhoqPGUA-1687u75qt6ykulojdl_0KeyjZUY2VdI3EgHv4bWfZISWMkZK_pT8Ufo&usqp=CAU',
    dept: 'Mech',
    quota: 'GQ',
   contactnum: '8974563212',
    address: 'Dharapuram',
    avggrade: 'A',
  },
  {
    id: 12,
    name: 'Praveen kumar',
    studentId: '321000012',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/4537/4537069.png',
    dept: 'Mech',
    quota: 'MQ',
   contactnum: '8754963215',
    address: 'Palani',
    avggrade: 'B+',
  },
];

function Students() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mentor: '',
    url: '',
    desc:'',
  });

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

    console.log('Form submitted:', formData);
    togglePopup(); 
  };
  return (
    <div class="stud">
    <div className="students-container">
    <div class="topstu">
    <h3 id="sphd">STUDENT PROFILE</h3>
    <input id="stuser"type="text" placeholder="Serach.."></input>
    <button onClick={togglePopup} id="addstubtn">Add Student</button>
    {isOpen && (
      <div className="popup">
        <div className="popup-content">
          <span className="close" onClick={togglePopup}>
            &times;
          </span>
          <h2>ADD STUDENT</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="mentor">Student ID</label>
            <input
              type="text"
              name="mentor"
              id="email"
              value={formData.mentor}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="url">ContactNumber</label>
            <input
              type="text"
              name="url"
              id="email"
              value={formData.url}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="desc">AvgGrade</label>
            <textarea
              name="desc"
              id="message"
              value={formData.desc}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit" className="submit-button">
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
            <img src={student.imageUrl} alt={student.name} />
          </div>
          <div className="student-details">
            <div className="student-info">
              <p className="student-name">{student.name}</p>
              <p className="student-id">ID: {student.studentId}</p>
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
                <button className="student-button edit">Edit</button>
                <button className="student-button delete">Delete</button>
              </div>
            </div>
          </div>
        </div>

      ))}
    </div>
    </div>
  );
}

export default Students;

