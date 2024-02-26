import React, { useState ,useEffect} from 'react';
import { Link, useNavigate,useLocation, json } from 'react-router-dom'
import logo from './logo1.png'
import { toast } from 'react-toastify';
import TodoItem from './ToDoItem'
const Home1 = () => {

  const location =useLocation()
  const {state:{id}}=location
  console.log("this is id for todo",id)
  const [info,setinfo]=useState("")
  const navigate=useNavigate()

  // getting user name
  const [username,setusename]=useState("")
  const get_username=async()=>{
    try{
      let infof
      const response=await fetch("http://localhost:5000/userName",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id})
    })
    if(response.ok){ 
      infof= await response.json()  
      infof=infof.data.nameUser
      setusename(infof.fname+infof.lname)
    }else{
      console.log("Some error in response")
    }
    console.log("this is info",infof) 
    setinfo(infof)  
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
    if(todo===null){
      console.log("ndcjksdnckjdncklzdncklzdnc")
      sno=1
    }else{
      console.log("THis is length")
      console.log(todo)
      // sno=todo[todo.length-1].sno+1;
      sno=5
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
  navigate('/about',{state:{id}})
}
const handleContact=()=>{
  navigate('/contactUs',{state:{id}})
}
const handleHome=()=>{
  navigate('/Home',{state:{id}})
}
const handleJobs=()=>{
  navigate('/jobs',{state:{id}})
}
const handleATS=()=>{
  navigate('/ats',{state:{id}})
}
// CHANGE THIS
const handleReume=()=>{
  navigate('/ats',{state:{id}})
}
const handleLogOut=()=>{
navigate('/')
}
const handleNotes=()=>{
  navigate('/notes',{state:{id}})
}
return (
<div onLoad={get_username}>

<header>
        <nav>
          <a
            href="index.html"
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
                  href=""
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
                  href=""
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
                  href=""
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
                  href=""
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

  <section className="function">
    <div className="row">
      <div className="fun-col notes" onClick={handleNotes}>
        NOTES
      </div>
      <div className="fun-col Resume" onClick={handleReume}>
        RESUME MAKER
      </div>
      <div className="fun-col ATS" onClick={handleATS}>
        ATS CHECKER
       </div>
       <div className="fun-col ATS" onClick={handleJobs}>
        JOBS
       </div>
    </div>
  </section>

 {/* to do list  */}
  <div className="container"> 
       {/* showing added to do list */}
    <div className="mb-3">
      <h3 lassName="my-3">To Do list</h3>
      {
        getTodo.length===0?"Hurry.! All work is Done":
        getTodo.map((todo)=>{
        return( 
              <> 
                 {/* these blank Brackets are used return more than one thing  */}
              <TodoItem desc={todo.desc} title={todo.title} id={id}/> 
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