// import logo from './logo.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React, { useState ,useEffect} from 'react';
import Login from './Login'
import Registration from './Registration'
import Home from './Home'
import Home1 from './Home1'
import Jobs from './Jobs'
import AddToDo from "./AddToDo" 
import Todos from "./ToDos"; 
import TodoItem from './ToDoItem';
import ATS from './ATS'
import About from './About' 
import Contact  from './Contact';
import Notes from "./Notes/NotesHOme";
import Header from "./Header";
import  Footer  from "./Footer";
import NotesOS from './Notes/NotesOS'
import NotesOOP from './Notes/NotesOOP'
import NotesDBMS from './Notes/DBMS'
import NotesJS from './Notes/Javascript'
import NotesCoding from './Notes/NotesCoding.js'
import ResumeGenerator from './ResumeGenerator.js';
import HRnotes from './Notes/HRnotes.js';
import Resume from './Resume.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {

  
let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[]
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete=(todo)=>{
    console.log("I am delete function",todo)
    //  deleting this way will not work
    // let index=todos.indexOf(todo)
    // todos.splice(index,1)

    setTodos(todos.filter((e)=>{
      return e!== todo;})) 
      console.log("deleted",todos)
      localStorage.setItem("todos",JSON.stringify(todos))
  }
  

  // this is basicly stiring data inconsole
  const addTodo=(title,desc)=>{
    console.log("This is add todo function ",title,desc)
    let sno;
    if(todos.length===0)
    {
        sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1
    } 
    const myTodo={
      sno:sno,
      title : title ,
      desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
  }

  const [todos,setTodos]=useState(initTodo)
  // console.log("hahaha this is lenght",todos.length)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/home' element={<>
                                       <Home1/>
                                       <TodoItem/>
                                       </>}>
          </Route>
          {/* <Route   path='/home' element={<>
            <AddToDo addTodo={addTodo}/> 
            <Todos todos={todos} onDelete={onDelete}/>
            </>}/> */}
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/ats' element={<ATS/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contactUs' element={<Contact/>}></Route>
          <Route path='' element={<Header/>}></Route>
          <Route path='' element={<Footer/>}></Route>
          <Route path='/notes' element={<Notes/>}></Route>
          <Route path='/osnotes' element={<NotesOS/>}></Route>
          <Route path='/oopsnotes' element={<NotesOOP/>}></Route>
          <Route path='/dbmsnotes' element={<NotesDBMS/>}></Route>
          <Route path='/jsnotes' element={<NotesJS/>}></Route>
          <Route path='/coding_notes' element={<NotesCoding/>}></Route>
          <Route path='/resume_generator' element={<ResumeGenerator/>}></Route>
          <Route path='/hrRound_notes' element={<HRnotes/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
