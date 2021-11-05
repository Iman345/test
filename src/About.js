import React from "react";
import "./About.css";
import aboutImg from "./img/me.png";
function About() {

    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about comp-space" id="About">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={aboutImg} alt="A picture of me" className="me-img" />
          </div>
          <div className="col-2">
            <h1 className="about-heading">About Me</h1>
            <div className="about__meta">
              <p className="about-text">
              
           I'm 22 in my fourth year at wits and this is my interactive media website. This website hosts my theory work and practical work. I am interested in decoloniality and social activism so most of the work on this website revolves around those themes.
        
              </p>
              
              <div className="btns">
                <a href="">
                  <button className="btns-theory">Theory</button>
                </a>
                <a href="#">
                  <button className="btns-creative" >Creative</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
