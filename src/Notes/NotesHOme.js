import React , { useState} from "react";
import { Link ,useLocation, useNavigate} from 'react-router-dom'
export const NotesHOme = () => {
  const location =useLocation()
  const {state:{id}}=location
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
      navigate('/about',{state:{id}})
    }
    const handleContact=()=>{
      navigate('/contactUs',{state:{id}})
    }
    const handleHome=()=>{
      navigate('/Home',{state:{id}})
    }
    const handleLogOut=()=>{
      navigate('/')
    }
    const handleOS=()=>{
      navigate('/osnotes',{state:{id}})
    }
  return (
    <div>
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
      <div className="fun-col notes" onClick={handleOS}>
        Operating System
      </div>
      <div className="fun-col Resume" onClick={handleHome}>
        OOPS
      </div>
      <div className="fun-col ATS" onClick={handleHome}>
        DBMS
       </div>
       <div className="fun-col ATS" onClick={handleHome}>
        React
       </div>
       <div className="fun-col ATS" onClick={handleHome}>
        Express
       </div>
       <div className="fun-col ATS" onClick={handleHome}>
        Coding
       </div>
       <div className="fun-col ATS" onClick={handleHome}>
        Javascript
       </div>
    </div>
  </section>


    </div>
  );
};
export default NotesHOme