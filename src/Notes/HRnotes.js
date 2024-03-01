import React, { useEffect, useState } from "react";
import { Link ,useLocation, useNavigate} from 'react-router-dom'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Notes.css'
import axios from "axios";
function HRnotes() {
  let location =useLocation()
  const {state:{id}}=location
  const {state:{fname}}=location
  const {state:{lname}}=location
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNode) => {
      return {
        ...prevNode,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    id.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  console.log("this is id ahaha ",id)
    // for client side effects
    const [showMenu, setShowMenu] = useState(false);
    const navigate=useNavigate()
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    const hideMenu = () => {
      setShowMenu(false);
    };
  
    // true-->hiding
    // false-->showing

    let pdf1=true
    let pdf2=true
  
   const pdfCall=(a)=>{
    if(a==1)
    {
      pdf1=!pdf1
      // console.log(pdf1)
    }
    if(a===2){
      pdf2=!pdf2
    }
   }

    const handleAbout=()=>{
      navigate('/about',{state:{id,fname,lname}})
    }
    const handleContact=()=>{
      navigate('/contactUs',{state:{id,fname,lname}})
    }
    const handleHome=()=>{
      navigate('/Home',{state:{id,fname,lname}})
    }
    const handleLogOut=()=>{
      navigate('/')
    }
  return (
    <div>

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
      <h1>Hello...<b>{fname} {lname}</b></h1>
      <div className="row">
      <div className="sub_option" onClick={()=>pdfCall(1)} >
        HR Interview Questions 
      </div>
    </div>

    <div id="resume" className={pdf1 ? "":""}>
      <embed src="./PDF/HR/HRRound.pdf" type="application/pdf" width="90%" height="700px" id="pdf1"/>
    </div>

      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button >Add</button>
        {/* onClick={submitNote} */}
      </form>
    </div>
  );
}

export default HRnotes;
