import React, { useState } from 'react'
import image from "./shareThought.jpg"
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Registration() {
    
    const [fname,fnamechange]=useState("")
    const [lname,lnamechange]=useState("")
    const [id,idchange]=useState("")
    const [phone_no,setphone_no]=useState("")
    const [password,passwordchange]=useState("")
    const [confirm_password,setconfirm_password]=useState("")
    const [TodoList,setTodoList]=useState([])
    const navigate=useNavigate();
    let info = { id, fname, lname, password ,phone_no,TodoList};
    
    // to check if the email is valid
    const validateEmail = (id) => {
      return String(id)
        .toLowerCase() 
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ); 
    };

    // to check if the password validate
    const validatePassword=(password)=>{
      var uppercase=/[A-Z]/g
      var lowerCase=/[a-z]/g
      var number=/[0-9]/g
      var specialChar=/[!@#$%^&*()_+{}\]:;<>,.?~\\/-]/
      if(password.length>=8 && password.match(lowerCase) && password.match(uppercase) && password.match(number) && password.match(specialChar))
        return true
      return false
    }

    // to check if both password are matching
    const validateconfirm_Password=(confirm_password)=>{
        if(confirm_password===password){
            return true
        }
        return false;
    }

    // to hide INVALID and VALID thing
    const hide=()=>{
      const a= document.getElementsByTagName('p')
      for( let i=0;i<a.length;i++)
      {a[i].style.display='none'}
    }

    // if the above is valid then we will proceed
    const validateAll=async(e)=>{
      e.preventDefault();
      if(validatePassword(password) && validateEmail(id) && validateconfirm_Password(confirm_password))
      {
        try{
            const response= await fetch("http://localhost:5000/userInfo",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(info),
            })
            console.log(response)
            if(response.ok){
                console.log("Data saved successfully");
                navigate('/Home',{state:{id}})
            }else{
                console.log("some error occuredknkn") 
            }
        }catch(err){
            console.error("Some error occured ",err)
        }
      }else{
        alert("Enter valid email Id and Password")
      } 
    } 

    return (
    <div onLoad={hide}>
    <img src={image} alt='background-image'/>
    <div id='d'>
      <h3>Create Your Account</h3>
      <br></br>
      <form className="row g-3" action="/submit" method="post" onSubmit={validateAll}>
        <div className="col-md-6">
          <label for="fname" className="form-label">First Name</label>
          <input type="text" className="form-control" value={fname} onChange={(e)=>fnamechange(e.target.value)}></input><p className={fname.length<2?'invalid':'invalid-hide'}>*Invalid First Name</p>
        </div>
        <div className="col-md-6">
          <label for="lname" className="form-label">Last Name</label>
          <input type="text" className="form-control" value={lname} onChange={(e)=>lnamechange(e.target.value)}></input><p className={lname.length<2?'invalid':'invalid-hide'}>*Invalid Last Name</p>
        </div>
        <div className="col-md-6">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" value={id} onChange={(e)=>idchange(e.target.value)}></input><p className={validateEmail(id)?'invalid-hide':'invalid'}>*Invalid Email</p>
        </div>
        <div className="col-md-6">
          <label for="phonenumber" className="form-label">Phone Number</label>
          <input type="text" inputMode='numeric' pattern="[0-9]*" className="form-control" minLength={10} maxLength={10} value={phone_no} onChange={(e)=>setphone_no(e.target.value)}></input><p className={validateEmail(id)?'invalid-hide':'invalid'}>*Invalid Email</p>
        </div>
        <div className="col-md-6">
          <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e)=>passwordchange(e.target.value)}></input><p className={validatePassword(password)?'invalid-hide':'invalid'}>*Invalid Email</p>
        </div>
        <div className="col-md-6">
          <label for="confirm_password4" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" value={confirm_password} onChange={(e)=>setconfirm_password(e.target.value)}></input><p className={validateconfirm_Password(confirm_password)?'invalid-hide':'invalid'}>*Invalid Password</p>
        </div>
        <div className="col-12">
          <button type='submit' className='btn btn-primary'>Continue</button>
        </div>
      </form>
    </div>
    </div>
  )
}
 