import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
export default function TodoItem({id,title,lname,fname,desc,sno}) {
 
// writing functionality of onDelete dunction
 const navigate=useNavigate()
//  const location =useLocation()
//  const {state:{id}}=location
//  const {state:{fname}}=location
//  const {state:{lname}}=location
//  const {state:{desc}}=location
//  const {state:{title}}=location
console.log(id+"="+sno)
const onDelete=async(sno,id,fname,lname)=>{
  const response=await fetch("http://localhost:5000/delete_todo",{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    }, 
    body:JSON.stringify({id,sno})
  })
  if(response.ok){
    console.log("jhdfvjjkv")
    navigate('/Home',{state:{id,fname,lname}})
  }else{
    console.log("something happen")
  }
}
  return (
    <>
    <div>
       <h3>{desc}</h3>
       <p>{title}</p>
       <button className="btn bt-sn btn-primary" onClick={()=>{onDelete(sno,id,fname,lname)}}>Delete</button>
    </div>
    </>
  )
}  
 