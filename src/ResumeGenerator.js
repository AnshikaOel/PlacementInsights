// ResumeGenerator.js
import React , { useState} from "react";
import { Link ,useLocation, useNavigate} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";

const ResumeGenerator = () => {
    const navigate=useNavigate()
    const id=5
    const [cvFormVisible, setCvFormVisible] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        address: "",
        fb: "",
        insta: "",
        linked: "",
        git: "",
        objective: "",
        skills: [],
        interests: [],
        workExperience: [],
        academicQualifications: [],
        projects: [],
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const addNewField = (field) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: [...prevData[field], ""],
        }));
    };

    const updateField = (field, index, value) => {
        setFormData((prevData) => {
            const newData = { ...prevData };
            newData[field][index] = value;
            return newData;
        });
    };

    const removeField = (field, index) => {
        setFormData((prevData) => {
            const newData = { ...prevData };
            newData[field].splice(index, 1);
            return newData;
        });
    };

    const generateCV = () => {
        setCvFormVisible(false);
    };

    const printCV = () => {
        window.print();
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
            {cvFormVisible ? (
                <div className="container" id="cv-form">
                    <h1 className="text-center my-2">Resume Generator</h1>
                    <div className="row ">
                        <div className="col-md-6 ">
                            {/* ... Personal Information Form ... */}

                            <h3>Personal Information</h3>
                            <div id="form_Center">
                            <div className="form-group">
                                <label for="nameField"> Name</label>
                                <input type="text" id="nameField" placeholder="Enter your Name" className="form-control" />
                            </div>


                            <div className="form-group mt-2">
                                <label for="contactField">Phone Number</label>
                                <input type="number" id="contactField" placeholder="Enter here" className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label for="email">Email</label>
                                <input type="text" id="emailField" placeholder="Enter here" className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label for="addressField">Enter your Address</label>
                                <textarea id="addressField" placeholder="Enter here" className="form-control" rows="3"></textarea>
                            </div>

                            <p className="text-secondary my-3">Important Links</p>
                            <div className="form-group mt-2">
                                <label for="fbField"> Facebook</label>
                                <input type="text" id="fbField" placeholder="Enter here" className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <label for="instaField">Instagram</label>
                                <input type="text" id="instaField" placeholder="Enter here" className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <label for="linkedField"> LinkedIn</label>
                                <input type="text" id="linkedField" placeholder="Enter here" className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <label for="gitField">Github</label>
                                <input type="text" id="gitField" placeholder="Enter here" className="form-control" />
                            </div>

                            {/* <!-- Skills --> */}
                            <div className="form-group mt-2" id="S">
                                <label for="">Skills</label>
                                <textarea placeholder="Enter here" className="form-control SField"></textarea>
                                <div className="container text-center mt-2" id="SAddButton">
                                    <button onclick="addNewSField()" className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>
                       
                        
                            {/* ... Professional Information Form ... */}
                            <div className="form-group mt-2">
                                <label for="">Objective</label>
                                <textarea id="objectiveField" placeholder="Enter here" className="form-control"></textarea>
                            </div>


                            <div className="form-group mt-2" id="aq">
                                <label for="">Academic Qualification</label>
                                <textarea placeholder="Enter here" className="form-control eqField"></textarea>
                                <div className="container text-center mt-2" id="aqAddButton">
                                    <button onclick="addNewAQField()" className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>



                            {/* <!-- Work Experience --> */}
                            <div className="form-group mt-2" id="we">
                                <label for="">Work Experience</label>
                                <textarea placeholder="Enter here" className="form-control weField" rows="2"></textarea>
                                <div className="container text-center mt-2" id="weAddButton">
                                    <button onclick="addNewWEField()" className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Projects --> */}
                            <div className="form-group mt-3" id="project">
                                <label for="">Projects</label>
                                <textarea placeholder="Enter here" className="form-control projectField"></textarea>
                                <div className="container text-center mt-2" id="projectAddButton">
                                    <button onclick="addNewProjectField()" className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>


                            {/* <!-- Interests --> */}
                            <div className="form-group mt-3" id="I">
                                <label for="">Interests</label>
                                <textarea placeholder="Enter here" className="form-control IField" rows="2"></textarea>
                                <div className="container text-center mt-2" id="IAddButton">
                                    <button onclick="addNewIField()" className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>
                            
                        
                    
                    <div className="container text-center mt-3">
                        <button onClick={generateCV} className="btn btn-primary btn-lg">
                            Generate CV
                        </button>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            ) : (
                <div className="container" id="cv-template">
                    <div className="row">
                        <div className="col-md-4 text-center background">
                            {/* ... First column of template ... */}

                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                                alt="" className="img-fluid myimg" />

                            <div className="container">
                                <p id="nameT1">Samriddhi</p>
                                <p id="contactT">+91658235452</p>
                                <p id="emailT">abc@gmail.com</p>
                                <p id="addressT">Noida sector 56</p>

                                <hr />
                                <p><a id="fbT" href="#1">Fb link</a></p>
                                <p><a id="instaT" href="#1">insta link</a></p>
                                <p><a id="linkedT" href="#1">linkedIn link</a></p>
                                <p><a id="gitT" href="#1">Github link</a></p>

                                <hr />

                                {/* <!-- skills --> */}
                                <div className="card mt-4">
                                    <div className="card-header background">
                                        <h3>Skills</h3>
                                    </div>
                                    <div className="card-body">
                                        <ul id="ST">
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
                                        </ul>
                                    </div>
                                </div>





                            </div>
                        </div>
                        <div className="col-md-8 mt-50">
                                {/* ... Second column of template ... */}
                                 <h1 id="nameT2" className="text-center" style="font-weight: 980">Samriddhi</h1>

        {/* <!-- objective card --> */}

        <div className="card mt-4">
          <div className="card-header background">
            <h3>Objective</h3>
          </div>
          <div className="card-body">
            <p id="objectiveT">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              suscipit est expedita quos delectus, nisi perferendis sunt porro
              reiciendis iste consequuntur incidunt laborum recusandae ad
              voluptates facilis architecto maxime ipsum.
            </p>
          </div>
        </div>

        {/* <!-- Academic --> */}

        <div className="card mt-4">
          <div className="card-header background">
            <h3>Academic Qualification</h3>
          </div>
          <div className="card-body">
            <ul id="aqT">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
            </ul>
          </div>
        </div>


        {/* <!-- Work Experience --> */}
        <div className="card mt-4">
          <div className="card-header background">
            <h3>Work Experience</h3>
          </div>
          <div className="card-body">
            <ul id="weT">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
            </ul>
          </div>
        </div>


        {/* <!-- Projects --> */}

        <div className="card mt-4">
          <div className="card-header background">
            <h3>Projects</h3>
          </div>
          <div className="card-body">
            <ul id="projectT">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
            </ul>
          </div>
        </div>

        {/* <!-- interest --> */}
           <div className="card mt-4">
          <div className="card-header background">
            <h3>Interests</h3>
          </div>
          <div className="card-body">
            <ul id="IT">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
            </ul>
          </div>
        </div>



        <div class="container mt-3 text-center">
          <button onclick="printCV()" class="buttonED ">Print</button>
        </div>
                        </div>
                    </div>
                    <div className="container mt-3 text-center">
                        <button onClick={printCV} className="buttonED">
                            Print
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeGenerator;
