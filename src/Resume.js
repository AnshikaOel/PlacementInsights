import React, { useState ,useEffect} from 'react';
import { Link, useNavigate,useLocation, json } from 'react-router-dom'
import './resume.css'


const Resume = () => {
    const location =useLocation()
    const navigate=useNavigate()
  const {state:{id}}=location
  const {state:{fname}}=location
  const {state:{lname}}=location

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
const handleResume=()=>{
    navigate('/resume_generator',{state:{id,fname,lname}})
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

        <div className="grid">
          <h2 className="text--center mb-40--phone">
            What are the benefits of CareerBoost Resume Builder?
          </h2>
          <div className="grid__row">
            {" "}
            <div class="benefits__item grid__column--tablet--4 grid__column--phone--4 mt-35--phone mt-45--tablet">
              <i>
                <svg
                  viewBox="0 0 55 52"
                  style={{ height: "3.4rem; width: 3.4rem" }}
                >
                  <path
                    d="M27.5.66l8.47 16.82L55 20.18l-13.75 13.2 3.24 18.59-16.99-8.8-17 8.8 3.25-18.59L0 20.18l19.03-2.7L27.5.66zm-6.21 19.96L7.31 22.66l10.06 9.9-2.36 13.96 12.48-6.6 12.48 6.6-2.36-13.97 10.07-9.9-13.97-2.03-6.22-12.7-6.21 12.7z"
                    style={{ fill: "rgb(0, 153, 255)" }}
                  ></path>
                </svg>
              </i>
              <div class="benefits__text">
                <h3 class="h5">Professional Resume Builder</h3>
                <p class="mt-10--phone text--left">
                  Our <a href="INDEX.HTML">resume builder</a> is packed with
                  expert tips to show you how to make each part of your resume.
                </p>
              </div>
            </div>
            <div class="benefits__item grid__column--tablet--4 grid__column--phone--4 mt-35--phone mt-45--tablet">
              <i>
                <svg viewBox="0 0 55 56" style={{height: "3.4rem; width: 3.4rem"}}>
                  <path
                    d="M23.98 28.84L14.85 17a.87.87 0 0 1-.16-.69.93.93 0 0 1 .96-.85c.24 0 .43.05.58.16l11.93 9.13.22.22c.62.56.94 1.3.94 2.26 0 .8-.28 1.5-.83 2.06-.55.57-1.23.86-2.04.86-.95 0-1.7-.37-2.25-1.1l-.22-.22zM27.5.79c4.95 0 9.57 1.26 13.86 3.79a26.97 26.97 0 0 1 9.84 9.85A26.87 26.87 0 0 1 55 28.3c0 4.97-1.26 9.6-3.8 13.89a26.97 26.97 0 0 1-9.84 9.84 26.82 26.82 0 0 1-13.86 3.8c-4.95 0-9.57-1.26-13.86-3.8a26.97 26.97 0 0 1-9.85-9.84A26.92 26.92 0 0 1 0 28.28 27.4 27.4 0 0 1 8.09 8.88l2.36 2.37a22.78 22.78 0 0 0-5.14 7.64 25.06 25.06 0 0 0-1.68 9.4c0 4.59 1.03 8.71 3.08 12.38 2.02 3.6 4.82 6.4 8.41 8.42a24.89 24.89 0 0 0 12.38 3.08c4.58 0 8.7-1.03 12.38-3.08 3.59-2.02 6.4-4.83 8.41-8.42a24.89 24.89 0 0 0 3.08-12.37c0-4.4-1.06-8.5-3.19-12.27a23.44 23.44 0 0 0-8.06-8.55c-3.39-2.15-7-3.22-10.8-3.22v9.46h-3.64V.78h1.82z"
                    style={{fill: "rgb(0, 153, 255)"}}
                  ></path>
                </svg>
              </i>
              <div class="benefits__text">
                <h3 class="h5">Resume Check</h3>
                <p class="mt-10--phone text--left">
                  CareerBoost Resume Builder reviews and scores your resume in
                  real-time.
                </p>
              </div>
            </div>
            <div class="benefits__item grid__column--tablet--4 grid__column--phone--4 mt-35--phone mt-45--tablet">
              <i>
                <svg viewBox="0 0 37 56" style={{ height: "3.4rem; width: 3.4rem" }}>
                  <path
                    d="M28.51 40.44c-.55 1.54-1.2 3.6-1.93 6.16a40.89 40.89 0 0 1-1.64 5 6.94 6.94 0 0 1-2.32 3.14 6.96 6.96 0 0 1-4.12 1.1c-1.72 0-3.1-.38-4.13-1.16a7.7 7.7 0 0 1-2.36-3.24c-.4-.95-.96-2.67-1.68-5.14a102 102 0 0 0-1.84-5.86c-.37-1.06-.88-2.3-1.54-3.68L4.91 32.9a68.5 68.5 0 0 1-3.24-6.55A17.8 17.8 0 0 1 .13 19.7c0-3.4.84-6.58 2.53-9.51a18.4 18.4 0 0 1 6.6-6.82A17.6 17.6 0 0 1 18.5.79c3.3 0 6.38.86 9.24 2.58a18.4 18.4 0 0 1 6.6 6.82 18.77 18.77 0 0 1 2.53 9.51c0 1.91-.5 4.1-1.48 6.55a81.61 81.61 0 0 1-3.3 6.66l-2.04 3.85a36.88 36.88 0 0 0-1.54 3.68zm-13.64 9.9c.04.11.1.2.17.27.1.23.27.43.49.61.33.3.7.51 1.1.66a5.9 5.9 0 0 0 1.87.27c.8 0 1.48-.09 2.04-.27.47-.15.86-.37 1.15-.66.18-.18.33-.38.44-.6l.11-.28 2.59-9.24H12.17l2.69 9.24zM18.5 4.47c-2.71 0-5.2.68-7.45 2.04a14.71 14.71 0 0 0-5.34 5.52 15.46 15.46 0 0 0-1.95 7.67c0 1.62.42 3.5 1.27 5.67a49.38 49.38 0 0 0 2.96 6.05 66.19 66.19 0 0 1 2.97 6h15.07c.6-1.33 1.58-3.32 2.97-6a46.6 46.6 0 0 0 2.92-6.1c.8-2.13 1.21-4 1.21-5.62 0-2.78-.64-5.34-1.93-7.67a14.3 14.3 0 0 0-5.22-5.47 14.04 14.04 0 0 0-7.48-2.09z"
                    style={{ fill: "rgb(0, 153, 255)" }}
                  ></path>
                </svg>
              </i>
              <div class="benefits__text">
                <h3 class="h5">Fast and Easy to Use Generator</h3>
                <p class="mt-10--phone text--left">
                  Drag and drop ready-made content tailored to your resume in a
                  click and enjoy a flexible text editor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="grid text--center">
          <h2>Write your professional resume online.</h2>
          <p className="section__subtitle">
            Download with a single click. Land that dream job.
          </p>
          <div className="carousel__wrapper">
            <img
              className="carousel__image mt-10--phone mb-30--phone mb-80--tablet"
              decoding="auto"
              data-loaded="true"
              data-src="https://cdn-images.zety.com/images/zety/landings/home/carousel-resume-templates-1093@3x.jpg"
              data-srcset="@1 https://cdn-images.zety.com/images/zety/landings/home/carousel-resume-templates-1093@1_25x.jpg, 
                    @2 https://cdn-images.zety.com/images/zety/landings/home/carousel-resume-templates-1093@2x.jpg, 
                    @3 https://cdn-images.zety.com/images/zety/landings/home/carousel-resume-templates-1093@3x.jpg"
              src="https://cdn-images.zety.com/images/zety/landings/home/carousel-resume-templates-1093@3x.jpg"
              alt="Zety's resume builder"
              width="1140"
              height="579"
            />
            <noscript>
              <img
                className="carousel__image mt-10--phone mb-30--phone mb-80--tablet"
                src="https://cdn-images.zety.com/images/zety/landings/home/carousel-resume-templates-1093@3x.jpg"
                alt="Zety's resume builder"
                width="1140"
                height="579"
              />
            </noscript>
          </div>
        </div>

        <br />
        <br />

        <div className="our-template">
          <h3>CareerBoost Template</h3>
          <section className="links">
            <details>
              <summary>Template 1</summary>
              <p>
              Reference:{" "}
              <a href="" onClick={handleResume}>CareerBoost Template</a>
            </p>
            </details>
          </section>
        </div>

        {/* Other links content */}
        <section className="links">
          <details>
            <summary>Novoresume</summary>
            <p>
              Reference:{" "}
              <a href="https://novoresume.com/?noRedirect=true">Novoresume</a>
            </p>
          </details>

          <details>
            <summary>Enhancv</summary>
            <p>
              Reference: <a href="https://enhancv.com/">Enhancv</a>
            </p>
          </details>

          <details>
            <summary>Resume Builder</summary>
            <p>
              Reference:{" "}
              <a href="https://www.resumebuilder.com/">Interview Cracker</a>
            </p>
          </details>

          <details>
            <summary>Zety</summary>
            <p>
              Reference: <a href="https://zety.com/in/resume-builder">Zety</a>
            </p>
          </details>

          <details>
            <summary>My Perfect Resume</summary>
            <p>
              Reference:{" "}
              <a href="https://www.myperfectresume.com/resume/builder">
                My Perfect Resume
              </a>
            </p>
          </details>

          <details>
            <summary>Adobe</summary>
            <p>
              Reference:{" "}
              <a href="https://www.adobe.com/express/create/resume">Adobe</a>
            </p>
          </details>
        </section>

        <footer>
          <p>Copyright ⓒ 2024</p>
        </footer>
      </div>
    );
};

export default Resume;