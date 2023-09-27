import React, { useState } from 'react'
import './Cources.css'
import { useSelector } from 'react-redux';
function Courses() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mentor: '',
    url: '',
    desc:'',
  });
  const type=useSelector((state) => state.user.type);
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
    <div class="cour-top">
    <h3 id="cdhd">COURCE OVERVIEW</h3>
    <input id="courser"type="text" placeholder="Serach.."></input>
    {type==="admin"? ( <button onClick={togglePopup} id="addcourbtn">Add Courses</button>):<></>}

    {isOpen && (
      <div className="popup">
        <div className="popup-content">
          <span className="close" onClick={togglePopup}>
            &times;
          </span>
          <h2>ADD COURSE</h2>
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
              Submit
            </button>
          </form>
          </div>
          </div>
          )}
    <div class="cour">
    <a href="#" class="course_block">
  <div class="course_image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv981YmUu_Kr0XcHrWRW6i8ypWtquUXawMYg&usqp=CAU" alt="" /><div class="course_date">25 Jan 15</div><div class="view_course">VIEW DETAILS</div></div>
  <div class="course_details"><h3>React with Js </h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new" title="Newly added Course">NEW</div><div class="course_unique" title="Course not easily available elsewhere">UNIQUE</div></div>
   {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
   
<a href="#" class="course_block">
  <div class="course_image"><img src="https://www.dremendo.com/java-programming-tutorial/images/java-programming-tutorial.jpg" alt="" /><div class="course_date">25 Jan 15</div></div>
  <div class="course_details"><h3>Java Programming</h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new">NEW</div><div class="course_unique">UNIQUE</div></div>
   {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
<a href="#" class="course_block">
  <div class="course_image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JwnLM0P5OqFvOLqZSPCJcWN4OaAYUyVVDm6FkvzPHFTmMpg8HZFwUN_Aa_aHXTGT6XM&usqp=CAU" alt="" /><div class="course_date">25 Jan 15</div></div>
  <div class="course_details"><h3>Enginnering Mathematics</h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new">NEW</div><div class="course_unique">UNIQUE</div></div>
   {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
<a href="#" class="course_block">
  <div class="course_image"><img src="https://365datascience.com/resources/blog/2019-10-python-everything-you-should-know-1024x576.jpg" alt="" /><div class="course_date">25 Jan 15</div></div>
  <div class="course_details"><h3>Python</h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new">NEW</div><div class="course_unique">UNIQUE</div></div>
   {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
<a href="#" class="course_block">
  <div class="course_image"><img src="https://content.app-sources.com/s/83876451628773905/uploads/Management_Pictures/technology-physics-and-chemistry-chemistry-hd-wallpaper-preview-8083971.jpg" alt="" /><div class="course_date">25 Jan 15</div></div>
  <div class="course_details"><h3>Chemistry</h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new">NEW</div><div class="course_unique">UNIQUE</div></div>
   {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
<a href="#" class="course_block">
  <div class="course_image"><img src="https://ischoolconnect.com/blog/wp-content/uploads/2022/03/Engineering-Physics-1.jpg" alt="" /><div class="course_date">25 Jan 15</div></div>
  <div class="course_details"><h3>Physics</h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new">NEW</div><div class="course_unique">UNIQUE</div></div>
   {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
<a href="#" class="course_block">
  <div class="course_image"><img src="https://i.ytimg.com/vi/dcNk0urQsQM/maxresdefault.jpg" alt="" /><div class="course_date">25 Jan 15</div></div>
  <div class="course_details"><h3>Microprocessor and  Microcontroller</h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new">NEW</div><div class="course_unique">UNIQUE</div></div>
   {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
<a href="#" class="course_block">
  <div class="course_image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqlq5UftrYK7F_lJjBrTEgJy0rNzY_GRwepvBYyyG47rZYUzLcQ5jL1UGXoBosixRWn8&usqp=CAU" alt="" /><div class="course_date">25 Jan 15</div></div>
  <div class="course_details"><h3>Spring Boot</h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new">NEW</div><div class="course_unique">UNIQUE</div></div>
   {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
<a href="#" class="course_block">
  <div class="course_image"><img src="https://videocdn.geeksforgeeks.org/geeksforgeeks/KernelinOperatingSystem/KernelinOS20220523125727.jpg" alt="" /><div class="course_date">25 Jan 15</div></div>
  <div class="course_details"><h3>Operating System</h3><p>Learn to design and code a website using photohop and also practise latest photoshop and its features</p></div>
  <div class="course_top_notices"><div class="course_new">NEW</div><div class="course_unique">UNIQUE</div></div>
 {type==="admin"? (<div><button class="coureditbtn">Edit</button><button class="courdelbtn">Delete</button></div>):<></>}
</a>
    </div>
    </div>
  )
}

export default Courses