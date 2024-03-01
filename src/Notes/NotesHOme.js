import React , { useState} from "react";
import { Link ,useLocation, useNavigate} from 'react-router-dom'
export const NotesHOme = () => {
  const location =useLocation()
  const {state:{id}}=location
  const {state:{fname}}=location
  const {state:{lname}}=location
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
    const handleOS=()=>{
      navigate('/osnotes',{state:{id,fname,lname}})
    }
    const handleOOPS=()=>{
      navigate('/oopsnotes',{state:{id,fname,lname}})
    }
    const handleDBMS=()=>{
      navigate('/dbmsnotes',{state:{id,fname,lname}})
    }
    const handleJS=()=>{
      navigate('/jsnotes',{state:{id,fname,lname}})
    }
    const handleCoding=()=>{
      navigate('/coding_notes',{state:{id,fname,lname}})
    }
    const handleHR=()=>{
      navigate('/hrRound_notes',{state:{id,fname,lname}})
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
    <section className="function">
    <div className="row">
      <div className="sub_option" onClick={handleCoding}>
      Coding
      </div>
      <div className="sub_option" onClick={handleOOPS}>
        OOPS
      </div>
      <div className="sub_option" onClick={handleDBMS}>
        DBMS
       </div>
       {/* <div className="fun-col ATS" onClick={handleHome}>
        React
       </div> */}
       {/* <div className="fun-col ATS" onClick={handleHome}>
        Express
       </div> */}
       <div className="sub_option" onClick={handleJS}>
       Javascript
       </div>
       <div className="sub_option" onClick={handleOS}>
         Operating System
       </div>
       <div className="sub_option" onClick={handleHR}>
        HR Round
       </div>
    </div>
  </section> 
    </div>
  );
};
export default NotesHOme