
import React , { useState} from "react"
import { Link ,useLocation, useNavigate} from 'react-router-dom'
import "./css/ATS.css";

const ATS = () => {
  const location =useLocation()
  const {state:{id}}=location
  const {state:{fname}}=location
  const {state:{lname}}=location
  console.log("this is id ahaha ",id)
    // for client side effects
    const [showMenu, setShowMenu] = useState(false);
    const navigate=useNavigate()
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
    <>
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
              <li>
                <a onClick={handleHome}
                  style={{
                    color: "black",
                    fontWeight: "1250",
                    fontSize: "large",
                  }}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  onClick={handleAbout}
                  style={{
                    color: "black",
                    fontWeight: "1250",
                    fontSize: "large",
                  }}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  onClick={handleContact}
                  style={{
                    color: "black",
                    fontWeight: "1250",
                    fontSize: "large",
                  }}
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  onClick={handleLogOut}
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

      <main>
      <h1>Hello...<b>{fname} {lname}</b></h1>
        <p className="ats_div about container">
          What is an ATS Resume Checker? | What is an ATS Resume Scanner?
        </p>
        <div className="ats_div about" id="about_ats">
        <p className="para ">
          When you submit your resume to a job application, it usually goes
          through an ATS (Applicant Tracking System) that scans your resume for
          relevant keywords and information. An ATS resume checker is a software
          that evaluates your resume's compatibility with the employer's ATS
          system. The ATS resume checker plays a critical role in the hiring
          process, understanding it can have a huge impact on your chances of
          getting hired.
        </p>

        <br />
        <br />

        <p className="question">
          Benefits of Checking Your Resume with Resume Scanner
        </p>
        <br />
        <ul>
          <li>
            Automates tasks like resume parsing, saving time and effort in the
            hiring process.
          </li>
          <li>
            Reduces manual screening, allowing recruiters to focus on strategic
            aspects of hiring.
          </li>
          <li>
            Creates a single repository for candidate information, improving
            accessibility and management.
          </li>
          <li>
            Provides a user-friendly interface for applicants, enhancing their
            overall experience.
          </li>
          <li>
            Adaptable to align with specific hiring workflows and criteria.
          </li>
          <li>
            Helps in maintaining legal compliance by tracking and documenting
            candidate information.
          </li>
          <li>
            Lowers recruitment costs by automating repetitive tasks and
            minimizing errors.
          </li>
          <li>
            Scales with organizational growth, accommodating more applicants and
            job openings.
          </li>
        </ul>

        <br />
        <br />

        <p
          style={{ fontWeight: "bold", fontSize: "21px", paddingLeft: "12px" }}
        >
          Links Are:{" "}
        </p>

        <section className="links">
          <details>
            <summary>Jobscan ATS Resume Checker</summary>
            <p>
              Reference:{" "}
              <a href="https://www.jobscan.co/?irclickid=WsrxePyE9xyPTnrQgiz1dwFJUkH1G-TDmVhlRA0&irgwc=1">
                Jobscan ATS Resume Checker
              </a>
            </p>
          </details>

          <details>
            <summary>Interview Cracker</summary>
            <p>
              Reference:{" "}
              <a href="https://interviewcracker.com/resume-scanner/">
                Interview Cracker
              </a>
            </p>
          </details>
          
          {/* Add more details and links as needed */}
        </section>
        </div>

      </main>

      <footer>
        <p>Copyright ⓒ 2024</p>
      </footer>
    </>
  );
};

export default ATS;
