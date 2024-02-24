import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function TodoItem({desc,title,id}) {
 
// writing functionality of onDelete dunction
 const navigate=useNavigate()
const onDelete=async(title,id)=>{
  const response=await fetch("http://localhost:5000/delete_todo",{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({id,title})
  })
  if(response.ok){
    console.log("jhdfvjjkv")
    navigate('/Home',{state:{id}})
  }else{
    console.log("something happen")
  }
}
  return (
    <>
    <div>
       <h3>{desc}</h3>
       <p>{title}</p>
       <button className="btn bt-sn btn-danger" onClick={()=>{onDelete(title,id)}}>Delete</button>
    </div>
    </>
  )
}  
 