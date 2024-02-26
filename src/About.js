import React , { useState} from "react";
import { Link ,useLocation, useNavigate} from 'react-router-dom'
import logo from './logo1.png'
export const About = () => {
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
      <p className="about">
        CarrerBoost revolutionize the job search experience by optimizing resumes for ATS,
        offering placement insights, and fostering a supportive community,
        ultimately empowering individuals in their pursuit of professional
        success.
        <br />
        For any queries email at - <b>abc@gmail.com</b>
      </p>
    </div>
  );
};
export default About