import React, { useState } from 'react';
// import './CareerBoost.css'; // Create a CSS file for your styles and import it here

const CareerBoost = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");

  const addTask = () => {
    if (inputBox.value == '')
        alert("You must write something");
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  };

  listContainer.addEventListener("click", function (e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
  return (
    <div>
      <header className="header">
        <nav>
          <a href="index.html">
            <img src="logo1.png" alt="CareerBoost Logo" />
          </a>
          <div className={`nav-links ${showMenu ? 'show' : ''}`}>
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={toggleMenu}></i>
        </nav>

        <div className="text-box">
          <h1 className="heading">Placement Insights</h1>
          <p>
            Revolutionize the job search experience by optimizing resumes for
            ATS, offering placement insights, and fostering a supportive
            community, ultimately empowering individuals in their pursuit of
            professional success.
          </p>
          <a href="" className="hero-btn">
            Visit Us To Know More
          </a>
        </div>
      </header>

      <h1>CLICK HERE FOR -</h1>

      <section className="function">
        <div className="row">
          <div className="fun-col">
            <a href="" className="notes">
              NOTES
            </a>
          </div>
          <div className="fun-col">
            <a href="" className="Resume">
              RESUME MAKER
            </a>
          </div>
          <div className="fun-col">
            <a href="" className="ATS">
              ATS CHECKER
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="todo-app">
          <h2>
            To-Do List <img src="icon2.png" alt="To-Do List Icon" />
          </h2>
          <div className="searchrRow">
            <input type="text" id="input-box" placeholder="Add your text" />
            <button onClick={addTask}>Add</button>
          </div>
          <ul id="list-container">{/* Render your tasks here */}</ul>
        </div>
      </div>
    </div>
  );
};

export default CareerBoost;
