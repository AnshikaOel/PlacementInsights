import React,{useState} from 'react';
import { Styles } from './css/Contact.css';
import { Link ,useLocation, useNavigate} from 'react-router-dom'

const Contact = () =>{

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

    const GoogleSheetForm = () => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycby0qF7s-b2KsyvtjRDPDwnnaFIJgezAnFe_VXwlw72rzCbxA42QZCsHajUgvELRiiU1sw/exec';
        const [message, setMessage] = useState('');
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
            const response = await fetch(scriptURL, {
              method: 'POST',
              body: new FormData(e.target),
            });
      
            if (response.ok) {
              setMessage('Message Sent successfully');
              setTimeout(() => {
                setMessage('');
              }, 5000);
              e.target.reset();
            } else {
              throw new Error('Failed to send message');
            }
          } catch (error) {
            console.error('Error!', error.message);
          }
        };
    }

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
      <h1>Hello...<b>[Username]</b></h1>
    <div className="ffbox">
      <div className="ffbox1">
        <h1 className="cb">CareerBoost</h1>
        <h2>Contact Us:</h2>
        <form name="submit-to-google-sheet" onSubmit={GoogleSheetForm}>
          <label htmlFor="fullName">
            <i className="fa fa-solid fa-user" style={{ margin: '2px' }}></i> Full Name:
          </label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">
            <i className="fa fa-solid fa-envelope" style={{ margin: '2px' }}></i>
            Email Address:
          </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mobile">
            <i className="fa fa-solid fa-phone" style={{ margin: '2px' }}></i>
            Contact No:
          </label>
          <input type="tel" id="mobile" name="mobile" required />

          <label htmlFor="msg">
            <i className="fa fa-solid fa-comment" style={{ margin: '2px' }}></i>
            Write Message:
          </label>
          <textarea id="msg" name="msg" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="map-div">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5220964681585!2d77.35620137528835!3d28.614110475674796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5992452d761%3A0xaaa44725147c1507!2sJSS%20Academy%20of%20Technical%20Education!5e0!3m2!1sen!2sin!4v1708095816024!5m2!1sen!2sin"
          width="370"
          height="95%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Contact;