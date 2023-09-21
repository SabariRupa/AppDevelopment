import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
function Navbar() {
  const name=useSelector((state) => state.user.user);
  return (
    <div class="navbar">
    <body>
  <nav>
  <div class="logo-div">
  <img class ="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hg7-zcRhhTCaa9QppL_6b4aYJm0CL-oU4hem187kCA&s"/>
  </div>
  <div class="logo-div">
  <h3 id='myk'>EduTech</h3>
  </div>
    
    <ul>
    <li class='ser'><SearchIcon/></li>
      <li class='search-list'>
      <input class='search' type="text" placeholder='   Search...'></input></li>
      <li class='noti'><NotificationsIcon /></li>
      {name? (<>
      <img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfjvE8D92qUggDYNEihhQ03guf0vMCnW72Zt02E3Ddf3lynIvSKBMudchruyH6K4zoZA&usqp=CAU"/>
      <li class='user'>{name}</li>
      <li class='drop'><ArrowDropDownIcon /></li></>):(<Link to ="/login"><h3 class="mine">LOGIN</h3></Link>)}
      </ul>
    
  </nav>
  <section></section>
</body>
    </div>
  )
}

export default Navbar
