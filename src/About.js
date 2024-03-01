import React , { useState} from "react";
import { Link ,useLocation, useNavigate} from 'react-router-dom'
import Anshika from './Anshika.jpg'
import Samriddhi from './Samriddhi.jpg'
import logo from './logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPhone,faLocation} from '@fortawesome/free-solid-svg-icons'
export const About = () => {
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
      <p className="about container">
        CarrerBoost revolutionize the job search experience by optimizing resumes for ATS,
        offering placement insights, and fostering a supportive community,
        ultimately empowering individuals in their pursuit of professional
        success.
        <br />
        The purpose of  CareerBoost is designed to be a valuable asset for students entering the job market, offering a holistic approach to the job search process. By amalgamating features from various resume builders and collaborating with sites specializing in ATS checks, the project equips users with the tools and resources needed to confidently present their skills and secure opportunities in their chosen industries.
        <br />
      </p>
      <p className="about container">
      {/* Welcome to CareerBoost – Your Gateway to Professional Success!
At CareerBoost, we understand the challenges that job seekers face in today's competitive market. That's why we've created a comprehensive platform designed to elevate your career prospects and guide you towards success. Founded by Samriddhi Maurya and Anshika Gupta, both pursuing their MCA in the 3rd semester at JSS Academy of Technical Education, Noida, CareerBoost is the result of our passion for empowering individuals in their professional journeys. */}
  <div className="about container">
    <div id="outer" style={{display:'flex'}}> 
      <img src={Anshika} style={{height:'125px', width:'125px'}}/>
      <p>This is Anshika Gupta,an innovative contributions in both frontend and backend development were instrumental in creating a robust and user-friendly application. Anshika's commitment to excellence has significantly enriched this project, making her an invaluable asset to the development team</p>
    </div>
  </div>
  <div className="about container"> 
     <div id="outer" style={{display:'flex'}}> 
      <img src={Samriddhi} style={{height:'115px', width:'125px'}}/>
      <p> Meet Samriddhi Maurya, our skilled Frontend Developer, who made impactful contributions to this project. Samriddhi's expertise in frontend technologies enhanced the project's visual appeal and user interface. Her dedication to creating an engaging and seamless user experience reflects in the success of our collaborative effort</p>
    </div>
  </div>  
  </p> 
      <div className="about">
      <h1 class="subtitle">Contact Us</h1>
          <p><FontAwesomeIcon icon={faEnvelope} /> CareerBoost@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> XXXXXXXXXX</p>
          <p><FontAwesomeIcon icon={faLocation} /> Noida,Uttar Pradesh</p>
          <div class="socialicon">
            <a href="https://www.linkedin.com/in/anshika-gupta-7b9349216/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/AnshikaOel"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.hackerrank.com/profile/anshika_oel"><i class="fa-brands fa-hackerrank"></i></a>
          </div>
          </div>
    </div>
  );
};
export default About