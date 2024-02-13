import React from 'react'
import { Link } from 'react-router-dom'
// import image from "./shareThought.jpg"
export default function Home() {
  return (
    <div>
      {/* <img src={image} alt='background-image'/> */}
      <div id='d'>
        <div className='homediv' >
         <h1>College Project</h1><br></br>
         <h2>Let's get a step closer to Placement</h2>
         <center><button className='btn btn-primary submitText'><Link to='/registration' className="linkStyle">Create Account</Link></button></center>
         <br></br>
         <center><h3>Already have a Account</h3></center>
         <center><button  className='btn btn-primary submitText'><Link to='/login' className="linkStyle">Login</Link></button></center>
        </div>
      </div>
    </div> 
  ) 
} 
  