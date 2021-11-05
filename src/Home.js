import React, {useState} from "react";
import "./Home.css";
import logo from "./img/iclogo.png";
import cover from './img/laptopheart.png';

function Home() {
  
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  
   const [show, setShow] = useState(true);
  return (
    <div className="Home" id="Home">
      <div className="home__bg">
        <div className="header display-flex align-center paddingxy-30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation paddingxy-30">
            <ul className="navbar display-flex">
              <a href="#Home">
                <li className="nav__items margin-15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items margin-15">About</li>
              </a>
            
              <a href="#Blogs">
                <li className="nav__items margin-15">Theory</li>
              </a>
              <a href="#Creative">
                <li className="nav__items margin-15">Creative</li>
              </a>
            </ul>
          </div>
          
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar display-flex">
              <li className="sideNavbar">
              <a href="#Home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#About">About</a>
            </li>
         
            
            <li className="sideNavbar">
              <a href="#Blogs">Blogs</a>
            </li>
            <li className="sideNavbar">
              <a href="#Creative">Creative</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
      
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
             
              <div className='section'>
              <div class="about">
    <div class="about-text">
        <h1>Welcome to my interactive Media website</h1>
        <p>
           This website is centered around decolonizing technology through my theory blogs and showcasing webart in my creative blogs. Get started now!
        </p>
<div class="cover">
        <img className='cover' width='200' height='200' src={cover} /> 
        </div>
        </div>
</div>           
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
