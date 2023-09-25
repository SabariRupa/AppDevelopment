import React,{ useState } from 'react'
import "./login.css"
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/userSlice'
function Login() {
  const [Email,setEmail]=useState('')
  const [Pass,setPass]=useState('')
  const nav=useNavigate();
  const type="admin"
  const dispatch=useDispatch();

  const validate=(e)=>{
    e.preventDefault();
    if(Email==="Admin"||Pass===123)
    {
      dispatch(login({Email,type}))
      nav("/AdminDash")
    }
    else{
      alert("Wrong Admin Username or Password!!")
    }
  }
  return (
    <div>
    <section>
    <div class="imgBx">
        <img alt="img" src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.webp?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI="/>

    </div>
    <div class="contentBx">
        <div class="formBx">
        <img alt="img" class="logologin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCX5_wYEa6hyWoqSBOaPbaHw5Ff8Ljp0WcA&usqp=CAU"/>
            <br></br><h2 id="font">Admin Login</h2>
            <br/>
            <br></br>
            <form>
                <div class="inputBx">
                    <span>Username</span>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" name=""/>
                </div>
                <div class="inputBx">
                    <span>Password</span>
                    <input onChange={(e)=>setPass(e.target.value)} type="password" name=""/>
                    
                </div>
               <br></br>
                <div class="inputBx">
                    <input onClick= {validate} type="submit" value="Submit" name=""/><br/><br/>
                </div>
              
            </form>
            
        </div>
    </div>
</section>
    </div>
  )
}

export default Login