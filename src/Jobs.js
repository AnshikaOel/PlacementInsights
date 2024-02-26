import React , { useState,useEffect} from "react";
import { Link ,useLocation, useNavigate} from 'react-router-dom'
import logo from './logo1.png'
export default function Jobs() {

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
  const [data, setData] = useState([]);
    const jobs = async () => {
        console.log("kjbvjxkbv bjxbvbjkbnvj");
        try {
          const response = await fetch('http://localhost:5000/internship/fetch/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
          if (response.ok) {
              let dataSet = await response.json();
              setData(dataSet)
          } else {
            console.log('Failed to fetch data');
          }
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      }; 
      useEffect(() => {
        jobs(); 
      }, []);

  return (
    <div onLoad={jobs}>
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
      <div className='navBar'> 
         <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Role</th>
              <th>Stipend</th>
              <th>Company Name</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody id="apidata">
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.role}</td>
                <td>{item.stipend}</td>
                <td>{item.company.name}</td>
                <td>{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
         <br></br>
         
      </div>
    </div> 
  ) 
} 
  