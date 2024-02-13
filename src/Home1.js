import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Home1 = () => {
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
    if (e.target.tagName === 'li') {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "span") {
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
          <Link to="">
            <img src="logo1.png" alt="CareerBoost Logo" />
          </Link>
          <div className={`nav-links ${showMenu ? 'show' : ''}`}>
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
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
          <Link to="/" className="hero-btn">
            Visit Us To Know More
          </Link>
        </div>
      </header>

      <h1>CLICK HERE FOR -</h1>

      <section className="function">
        <div className="row">
          <div className="fun-col">
            <Link to="" className="notes">
              NOTES
            </Link>
          </div>
          <div className="fun-col">
            <Link to="" className="Resume">
              RESUME MAKER
            </Link>
          </div>
          <div className="fun-col">
            <Link to="" className="ATS">
              ATS CHECKER
            </Link>
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

export default Home1;
