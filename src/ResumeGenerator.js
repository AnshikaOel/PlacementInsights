// ResumeGenerator.js
import React , { useState} from "react";
import { Link ,useLocation, useNavigate} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";

const ResumeGenerator = () => {

    const location =useLocation()
    const navigate=useNavigate()

    const {state:{id}}=location
    const {state:{fname}}=location
    const {state:{lname}}=location
    const [cvFormVisible, setCvFormVisible] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        address: "",
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


    function addNewWEField() {
      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("weField");
      newNode.classList.add("mt-2");
      newNode.setAttribute("rows", 2);
      newNode.setAttribute("placeholder", "Enter here");
    
      let weOb = document.getElementById("we");
      let weAddButtonOb = document.getElementById("weAddButton");
    
      // weOb.insertBefore(newNode, weAddButtonOb);
    }
    function addNewSField() {
      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("SField");
      newNode.classList.add("mt-2");
      newNode.setAttribute("rows", 2);
      newNode.setAttribute("placeholder", "Enter here");
    
      let SOb = document.getElementById("S");
      let SAddButtonOb = document.getElementById("SAddButton");
    
      // SOb.insertBefore(newNode, SAddButtonOb);
    }
    function addNewIField() {
      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("IField");
      newNode.classList.add("mt-2");
      newNode.setAttribute("rows", 2);
      newNode.setAttribute("placeholder", "Enter here");
    
      let IOb = document.getElementById("I");
      let IAddButtonOb = document.getElementById("IAddButton");
    
      // IOb.insertBefore(newNode, IAddButtonOb);
    }
    const addNewField = (field) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: [...prevData[field], ""],
        }));
    };
    function addNewAQField() {
      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("eqField");
      newNode.classList.add("mt-2");
      newNode.setAttribute("rows", 2);
      newNode.setAttribute("placeholder", "Enter here");
    
      let aqOb = document.getElementById("aq");
      let aqAddButtonOb = document.getElementById("aqAddButton");
    
      // aqOb.insertBefore(newNode, aqAddButtonOb);
    }
    
    function addNewProjectField() {
      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("projectField");
      newNode.classList.add("mt-2");
      newNode.setAttribute("rows", 2);
      newNode.setAttribute("placeholder", "Enter here");
    
      let projectOb = document.getElementById("project");
      let projectAddButtonOb = document.getElementById("projectAddButton");
    
      // projectOb.insertBefore(newNode, projectAddButtonOb);
    }
    
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
                                <input type="text" id="nameField" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}  className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label for="contactField">Phone Number</label>
                                <input type="number" id="contactField"  value={formData.contact} onChange={(e)=>setFormData({...formData,contact:e.target.value})}className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label for="email">Email</label>
                                <input type="text" id="emailField" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="form-control" />
                            </div>

                            <div className="form-group mt-2">
                                <label for="addressField">Enter your Address</label>
                                <textarea id="addressField" value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})} className="form-control" rows="3"></textarea>
                            </div>

                            <p className="text-secondary my-3">Important Links</p>
                            <div className="form-group mt-2">
                                <label for="linkedField"> LinkedIn</label>
                                <input type="text" id="linkedField" value={formData.linked} onChange={(e)=>setFormData({...formData,linked:e.target.value})} className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <label for="gitField">Github</label>
                                <input type="text" id="gitField" value={formData.git} onChange={(e)=>setFormData({...formData,git:e.target.value})} className="form-control" />
                            </div>

                            {/* <!-- Skills --> */}
                            <div className="form-group mt-2" id="S">
                                <label for="">Skills</label>
                                <textarea value={formData.skills} onChange={(e)=>setFormData({...formData,skills:e.target.value})} className="form-control SField"></textarea>
                                <div className="container text-center mt-2" id="SAddButton">
                                    <button onclick={addNewSField()} className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>
                       
                        
                            {/* ... Professional Information Form ... */}
                            <div className="form-group mt-2">
                                <label for="">Objective</label>
                                <textarea id="objectiveField" value={formData.objective} onChange={(e)=>setFormData({...formData,objective:e.target.value})} className="form-control"></textarea>
                            </div>


                            <div className="form-group mt-2"  id="aq">
                                <label for="">Academic Qualification</label>
                                <textarea value={formData.academicQualifications} onChange={(e)=>setFormData({...formData,academicQualifications:e.target.value})} className="form-control eqField"></textarea>
                                <div className="container text-center mt-2" id="aqAddButton">
                                    <button onclick={addNewAQField()} className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>



                            {/* <!-- Work Experience --> */}
                            <div className="form-group mt-2" id="we">
                                <label for="">Work Experience</label>
                                <textarea placeholder="Enter here" value={formData.workExperience} onChange={(e)=>setFormData({...formData,workExperience:e.target.value})} className="form-control weField"  rows="2"></textarea>
                                <div className="container text-center mt-2" id="weAddButton">
                                    <button onclick={addNewWEField()} className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Projects --> */}
                            <div className="form-group mt-3" id="project">
                                <label for="">Projects</label>
                                <textarea placeholder="Enter here" value={formData.projects} onChange={(e)=>setFormData({...formData,projects:e.target.value})} className="form-control projectField"></textarea>
                                <div className="container text-center mt-2"  id="projectAddButton">
                                    <button onclick={addNewProjectField()} className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                </div>
                            </div>


                            {/* <!-- Interests --> */}
                            <div className="form-group mt-3" id="I">
                                <label for="">Interests</label>
                                <textarea placeholder="Enter here" value={formData.interests} onChange={(e)=>setFormData({...formData,interests:e.target.value})} className="form-control IField" rows="2"></textarea>
                                <div className="container text-center mt-2"  id="IAddButton">
                                    <button onclick={addNewIField()} className="btn btn-primary btn-sm">
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
                            <div className="container">
                                {/* <p id="nameT1">{formData.name}</p> */}
                                <p id="contactT">{formData.contact}</p>
                                <p id="emailT">{formData.email}</p>
                                <p id="addressT">{formData.address}</p>

                                <hr/>
                                <p><a id="linkedT" href="#1">{formData.linked}</a></p>
                                <p><a id="git" href="#1">{formData.git}</a></p>

                                <hr />

                                {/* <!-- skills --> */}
                                <div className="card mt-4">
                                    <div className="card-header background">
                                        <h3>Skills</h3>
                                    </div>
                                    <div className="card-body">
                                        <ul id="ST">
                                            <li>{formData.skills} </li>
                                            {/* <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li> */}
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
              <li>{formData.interests} </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
            </ul>
          </div>
        </div>
                            </div>
                        </div>
                        <div className="col-md-8 mt-50">
                                {/* ... Second column of template ... */}
                                 <h1 id="nameT2" className="text-center" style={{ fontWeight: 980 }}>{fname} {lname}</h1>

        {/* <!-- objective card --> */}

        <div className="card mt-4">
          <div className="card-header background">
            <h3>Objective</h3>
          </div>
          <div className="card-body">
            <p id="objectiveT">
             {formData.objective}
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
              <li>{formData.academicQualifications} </li>
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
              <li>{formData.workExperience} </li>
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
              <li>{formData.projects} </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
            </ul>
          </div>
        </div>

        {/* <div class="container mt-3 text-center">
          <button onclick="printCV()" class="buttonED ">Print</button>
        </div> */}
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
