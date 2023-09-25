import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [Email,setEmail]=useState('')
  const [Pass,setPass]=useState('')
  const [conPass,setConpass]=useState('')
  const[Name,setName]=useState('')
  const nav=useNavigate();
  const validate=(e)=>{
    e.preventDefault();
    if(Email.length===0||Pass.length===0||conPass.length===0||Name.length===0)
    {
      alert("Enter All fields")
    }
    else if(Pass!==conPass)
    {
      alert("Mismatching Password")
    }
    else if(Pass.length<8)
    {
      alert("Password must be greater than 8")
    }
    else{
      nav("/login")
    }
  }
  return (
    <div>
    <section>
    <div class="imgBx">
        <img alt="img" src="https://www.gettingsmart.com/wp-content/uploads/2018/01/Smiling-students-collaborate-high-school-college-feature-image.jpg"/>
    </div>
    <div class="contentBx">
        <div class="formBx">
            <h2 id="font">SignUp as a Student</h2>
            <br></br><br/>
            <form>
                <div class="inputBx">
                    <span>Email</span>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" name=""/>
                </div>
                <div class="inputBx">
                    <span>Name</span>
                    <input onChange={(e)=>setName(e.target.value)} type="text" name=""/>
                </div>
                <div class="inputBx">
                    <span>Password</span>
                    <input onChange={(e)=>setPass(e.target.value)} type="password" name=""/>
                </div>
                <div class="inputBx">
                    <span>Confirm Password</span>
                    <input onChange={(e)=>setConpass(e.target.value)} type="text" name=""/>
                </div>
               
                <div class="inputBx">
                    <input onClick= {validate} type="submit" value="Submit" name=""/>
                </div>
                <div class="inputBx">
                    <p>Already have an Account? <Link to="/stulogin">Login</Link>
                    
                    </p>
                </div>
            </form>
            
        </div>
    </div>
</section>
    </div>
  )
}

export default Signup