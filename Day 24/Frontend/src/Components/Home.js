import React, { useState, useEffect } from 'react';
import './Home.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
function Home() {
  const [backgroundImage, setBackgroundImage] = useState('initial-image.jpg');
  const nav=useNavigate();
  const [Subsc,setSubsc]=useState('')

  const validate=(e)=>{
    e.preventDefault();
    if(Subsc.length!==0)
    {
      alert("Subscribed! Welcome to EduTech!!")
    }
  }
  const navProfile=()=>{
    nav("/")
  }
  const navHome=()=>
  {
    nav("/")
  }
  const navfaq=()=>
  {
    nav("/faq")
  }
  useEffect(() => {
    const imageUrls = ['https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'];

    const changeBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const newImage = imageUrls[randomIndex];
      setBackgroundImage(newImage);
    };

    const intervalId = setInterval(changeBackgroundImage,1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
  <div class="home1">  
  <div className="home-page" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
  <div class="txt">
  "Learning happens everywhere, all the time and we are there to ensure that your connected with learning community when it happens!!" Your Journey here deys..Lets go.
    </div>
    <div class="buttons">
    <button class="latest-btn">LATEST LAUNCHES</button>
   <Link to="/courses"> <button class="register-btn">COURSES     &nbsp;&nbsp; <ExitToAppIcon id="btn-icon"/></button></Link>
    </div>
    <div>
    <footer class="ground">
  <div class="content">
    <div class="top">
      <div class="logo-details">
        <i class="fab fa-slack"></i>
        <span class="logo_name"> @ EDU_TECH</span>
      </div>
      <div class="media-icons">
        <a href="https://www.facebook.com" target="_blank"><FacebookRoundedIcon id="icon"/></a>
        <a href="https://twitter.com/" target="_blank"><TwitterIcon id="icon"/></a>
        <a href="https://www.instagram.com/" target="_blank"><InstagramIcon id="icon"/></a>
        <a href="https://github.com/SabariRupa" target="_blank"><GitHubIcon id="icon"/></a>
        <a href="https://www.youtube.com" target="_blank"><SubscriptionsRoundedIcon id="icon"/></a>
      </div>
    </div>
    <div class="link-boxes">
      <ul class="box">
        <li class="link_name">COMPANY</li>
        <li style={{cursor:'pointer'}} onClick={navHome} ><a >Home</a></li>
        <li><Link to="/contactus"><a>Contact us</a></Link></li>
        <li><Link to="/aboutus"><a>About us</a></Link></li>
        <li><a href="#">Get started</a></li>
      </ul>
      <ul class="box">
        <li class="link_name">SERVICES</li>
        <li><a >Student_Enrollment</a></li>
        <li><a >Course_Registration</a></li>
        <li><a >Financial_Aid</a></li>
        <li><a >Academic_Records</a></li>
        <li><a >Attendance_Tracking</a></li>
      </ul>
      <ul class="box">
        <li class="link_name">ACCOUNT</li>
        <li onClick={navProfile}><a >Profile</a></li>
        <li><a >My account</a></li>
        <li><a >Prefrences</a></li>
        <li><a >Feedback</a></li>
        <li onClick={navfaq}><a >FAQ</a></li>
       
      </ul>
      <ul class="box">
        <li class="link_name">COURSES</li>
        <li><a >HTML & CSS</a></li>
        <li><a >JavaScript</a></li>
        <li><a >Java</a></li>
        <li><a >RDBMS</a></li>
      </ul>
      <ul class="box input-box">
        <li class="link_name"  >SUBSCRIBE</li>
      <li ><input  onChange={(e)=>setSubsc(e.target.value)} type="text" placeholder="Enter your Email"/></li>
        <li><input onClick= {validate} type="button" value="Subscribe"/></li>
      </ul>
    </div>
  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">Copyright © 2021 <a >Logo.</a>All rights reserved</span>
      <span class="policy_terms">
     
        <Link to="/privacy"><a >Privacy policy</a></Link>
        <Link to="/terms"><a>Terms & condition</a></Link>
      </span>
    </div>
  </div>
</footer>
</div>
    </div>
    


  );
}

export default Home;
