import React, { useState ,useEffect} from 'react';
import { Link, useNavigate,useLocation, json } from 'react-router-dom'
import logo from './logo1.png'
import { toast } from 'react-toastify';
import TodoItem from './ToDoItem'
const Home1 = (props) => {

  const location =useLocation()
  
  const {state:{id}}=location
  const {state:{fname}}=location
  const {state:{lname}}=location

  const [info,setinfo]=useState("")
  const navigate=useNavigate() 

  // getting user namev
  const [username,setusename]=useState("")
  const get_username=async()=>{
    console.log("Hinjfvjdbzfvjzxbcvjdbzjkv")
    try{
      let infof
      const response=await fetch("http://localhost:5000/userName",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id}),
    })
    
    console.log(response)
    if(response.ok){ 
      infof= await response.json()  
      infof=infof.data.nameUser
      setusename(infof.fname+infof.lname)
      console.log("this is present ",username)
      setinfo(infof) 
    }else{
      console.log("Some error in response")
    }
    // console.log("this is info",infof) 
    // setinfo(infof)  
    }catch(err){
       console.error("Some Error occured ",err)
    }
  }
  
  // for client side effects
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }; 

  const hideMenu = () => {
    setShowMenu(false);
  };

// for to do list
  console.log(info)
  const [sno,setsno]=useState("")
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  let initTodo;
  if(info.TodoList===null)
  {
    initTodo=[]
    console.log("first")
  }else{
    initTodo=info.TodoList
    console.log(typeof(initTodo))
    console.log("second")
  }
  const [todo,settodo]=useState(initTodo || [])
  const submit=async(e)=>{
  e.preventDefault();
  if(!title || !desc){
    alert("title or description cannot be blank")
  }else{
    //  storing data in 
    let sno
    if(todo.length===0){
      console.log("ndcjksdnckjdncklzdncklzdnc")
      sno=1
    }else{
      console.log("THis is length")
      console.log(todo)
      sno=todo[todo.length-1].sno+1;
      // sno=5
    }
    settodo(initTodo)
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    console.log(myTodo)
    console.log("before",todo)
    settodo([...todo, myTodo]);
    console.log("after",todo)
    // data saved in todo 
    setTitle("")
    setDesc("")
    // now store data in backend
    try{
      const response=await fetch("http://localhost:5000/todoList",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id,todo})
        })
        if(response.ok){
          console.log("heyy got the data")
        }else{
          console.log("Some error faiefmnsjv")
        }
        }catch(err){
          console.error("Some error occured while sending data ",err)
        }
      }
    }

// getting todo list
const [getTodo,setgetTodo]=useState([])
useEffect(()=>{
    const getToDo=async()=>{
    console.log("this is gettodo ")
  try{
  let response=await fetch("http://localhost:5000/get_todo",{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({id})
  })
  if(response.ok){
    response= await response.json()
    // response
    console.log("this is get todo")
    console.log(response)
    setgetTodo(response.data)
  }else{
    console.log("some error occured in getting response")
  }
}catch(err){
  console.error("dfbvxkjvn",err)
}
}
getToDo()},[todo])

console.log(getTodo)

// const onDelete=async(title,id)=>{
//   const response=await fetch("http://localhost:5000/delete_todo",{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json',
//     },
//     body:JSON.stringify({id,title})
//   })
//   if(response.ok){
//     console.log("jhdfvjjkv")
//     navigate('/Home',{state:{id}})
//   }else{
//     console.log("something happen")
//   }
// }

const handleAbout=()=>{
  navigate('/about',{state:{id,fname,lname}})
}
const handleContact=()=>{
  navigate('/contactUs',{state:{id,fname,lname}})
}
const handleHome=()=>{
  navigate('/Home',{state:{id,fname,lname}})
}
const handleJobs=()=>{
  navigate('/jobs',{state:{id,fname,lname}})
}
const handleATS=()=>{
  navigate('/ats',{state:{id,fname,lname}})
}
// CHANGE THIS
const handleResume=()=>{
  navigate('/resume_generator',{state:{id,fname,lname}})
}
const handleLogOut=()=>{
navigate('/')
}
const handleNotes=()=>{
  navigate('/notes',{state:{id,fname,lname}})
}
return (
<div onLoad={get_username}>

<header>
        <nav>
          <a
          onClick={handleHome}
            style={{
              color: "blue",
              textDecoration: "none",
              paddingTop: "8px",
              fontSize: "2em",
            }}
          >
            CareerBoost
          </a>
          <div className="nav-links" id="navLinks">
            <ul>
            <li onClick={handleHome}>
                <a
                  style={{
                    color: "black",
                    fontWeight: "1250",
                    fontSize: "large",
                  }}
                >
                  HOME
                </a>
              </li>
              <li onClick={handleAbout}>
                <a
                  style={{
                    color: "black",
                    fontWeight: "1250",
                    fontSize: "large",
                  }}
                >
                  ABOUT
                </a>
              </li>
              <li onClick={handleContact}>
                <a
                  style={{
                    color: "black",
                    fontWeight: "1250",
                    fontSize: "large",
                  }}
                >
                  CONTACT
                </a>
              </li>
              <li onClick={handleLogOut}>
                <a
                  style={{
                    color: "black",
                    fontWeight: "1250",
                    fontSize: "large",
                  }}
                >
                  LOG OUT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* row  */}
      {/* :id,fname:lname
        */}
      <h1>Hello...<b>{fname} {lname}</b></h1>
  <section>
    <div className="row">
      <div className="tab_option" onClick={handleNotes}>
        NOTES
      </div>
      <div className="tab_option" onClick={handleResume}>
        RESUME MAKER
      </div>
      <div className="tab_option" onClick={handleATS}>
        ATS CHECKER
       </div>
       <div className="tab_option" onClick={handleJobs}>
        JOBS
       </div>
    </div> 
  </section>

 {/* to do list  */}
  <div className="container"> 
       {/* showing added to do list */}
    <div className="mb-3">
      <h3 className="my-3">To Do list</h3>
      {
        getTodo.length===0?"Hurry.! All work is Done":
        getTodo.map((todo)=>{
        return( 
              <> 
                 {/* these blank Brackets are used return more than one thing */}
              <TodoItem desc={todo.desc} title={todo.title} id={id} sno={todo.sno}fname={fname} lname={lname}/> 
              <hr/>
              <br/> 
              </> 
        )})
      } 
    </div>  
       
    <h3>Add a todo </h3>
    <form onSubmit={submit}>
           {/* adding todo list */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Todo Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Todo description</label>
        <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
      </div>
      <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
    </form>
  </div>
</div>
  );
};

export default Home1;