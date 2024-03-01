import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import image from "./shareThought.jpg"
export default function Home() {
  const navigate=useNavigate()

  const handleCreateAcc=()=>{
    navigate('/registration')
  }
  const handleRegistration=()=>{
    navigate('/login')
  }
  return (

    
    <div> 
      <img src={image} alt='background-image'/>
      <div id='d'>
        <div className='homediv' >
         <h1 style={{
              color: "blue",
              textDecoration: "none",
              paddingTop: "8px",
              fontSize: "3.8em",
            }}>CareerBoost</h1><br></br>
         <h2>Let's get a step closer to Placement</h2>
         <center><button className='btn btn-primary submitText linkStyle' onClick={handleCreateAcc} >Create Account</button></center>
         <br></br>
         <center><h3>Already have a Account</h3></center>
         <center><button  className='btn btn-primary submitText linkStyle' onClick={handleRegistration}>Login</button></center>
        </div>
      </div>
    </div> 
  ) 
} 
    