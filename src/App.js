import logo from './logo.svg';
import './App.css';
import Lottie from "react-lottie"
import developer from "./assets/PCShlHbXQT.json"
import Projects from "./Projects"
import Experience from './Experience';
import Contact from './Contact';
import { FaAngleUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Skills from './Skills';



const ScrollToTop = () => {
  return (
      <div className="top-to-btm">
          <FaAngleUp className="icon-position icon-style" />
      </div>
  );
};



function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);


const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};
  

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };




  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 


  return (
    <>
    
    <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    <div>
      <div className="one"></div>
      <h1 className='Heads'>Mr.H</h1>
  <div className=''>
       <div class="row">
       <div className="col">
        <div className='lottie'> 
          <Lottie 
	          options={defaultOptions}
            height={400}
            width={400} 
          />
          </div>

          <div className='col'>
          
      <div className='lottie2'>
      
        <h2 className='overlay1'>My name is</h2>
        <h1 className='overlay2'>Hithesh Yadala</h1>
          <div className="progress">
            <div className="progress-value"></div>
          </div>  

          <p id = "p_main" >I am a front end developer also a React mobile developer</p>
          <p id = "p_main" >My main area of expertise include React, JavaScript, Css,</p>
          <p id = "p_main" >HTML and a bit knowledge in Python </p>
          <div>
      <button class='button' id='accept-button' onClick={scrollToBottom}>Contact me</button>
  </div>
      </div>
    </div>


    </div>
    </div>
    </div>
  </div>

  <Skills/>
  <Projects />
  <Experience /> 
  <Contact />
  </>
  );
}

export default App;
