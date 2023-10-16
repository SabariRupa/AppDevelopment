/* Home component styles */

import React, { useState, useEffect } from 'react';
import './Home.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
function Home() {
  const [backgroundImage, setBackgroundImage] = useState('initial-image.jpg');

  useEffect(() => {
    // An array of background image URLs to cycle through
    const imageUrls = ['https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'];
    
    // Function to change the background image at regular intervals
    const changeBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const newImage = imageUrls[randomIndex];
      setBackgroundImage(newImage);
    };

    // Change the background image every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(changeBackgroundImage,1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
  <div class="home">  
  <div className="home-page" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
  <div class="txt">
      "Every great business requires a bit of creativity in order to stand out. When it comes to launching a new venture or trying to revamp an existing one, your to-do list can seem a bit overwhelming."
    </div>
    <div class="buttons">
    <button class="latest-btn">LATEST LAUNCHES</button>
   <Link to="/courses"> <button class="register-btn">COURSES     &nbsp;&nbsp; <ExitToAppIcon id="btn-icon"/></button></Link>
    </div>
    </div>
  );
}
export default Home;


.home home-page {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 88.5vh;
  width: 100%; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white; 
  font-size: 24px; 
  filter:  brightness(70%)blur(2px);
  position: relative;
}
#btn-icon{
  position: absolute;
}
.buttons{
  position: absolute;
  top:500px ;
  left:600px; 
}
.register-btn, .latest-btn{
  height:50px;
  width:200px;
  border-radius: 10px;
  background-color: rgb(219, 215, 215);
  border: 0;
  color:rgb(0, 0, 0);
  font-weight: bold;
  cursor: pointer;
  box-shadow: 5px 10px;
}
.register-btn:hover,.latest-btn:hover{
  background-color: white;
  box-shadow: none;
}
.register-btn{
  margin-left: 50px;
}
.txt{
  position: absolute;
  top:350px ;
  left:400px;
  font-weight: bold;
  transform: translate(0%,-50%);
  color:rgb(255, 255, 255);
  max-width:800px;
  border-radius: 10px;
  font-size: 30px;
  opacity: 0.7;
}
.home-page p {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px; 
}
<ul class="box">
<div class="media-icons">
<a href="#"><i class="fab fa-facebook-f"></i></a>
<a href="#"><i class="fab fa-twitter"></i></a>
<a href="#"><i class="fab fa-instagram"></i></a>
<a href="#"><i class="fab fa-linkedin-in"></i></a>
<a href="#"><i class="fab fa-youtube"></i></a>
</div>
<div class="media-icons">
        <a href="#"><FacebookRoundedIcon id="icon"/></a>
        <a href="#"><TwitterIcon id="icon"/></a>
        <a href="#"><InstagramIcon id="icon"/></a>
        <a href="#"><GitHubIcon id="icon"/></a>
        <a href="#"><SubscriptionsRoundedIcon id="icon"/></a>
      </div>

      