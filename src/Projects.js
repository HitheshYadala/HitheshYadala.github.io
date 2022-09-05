import React, { useState , useEffect, useRef} from 'react'
import Zoom from 'react-reveal/Zoom';
import logo from "../src/logo.svg"
import "./projects.css"
import "./glasscard.css"
import fjs from "./assets/FJS.jpeg"
import digital from "./assets/AIPLEX LOGO.svg"
import cra from "./assets/X.jpeg"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Modal from 'react-modal'
import fly from "./assets/fly.png"
import { ZoomIn } from 'react-scroll-motion';
import PDF from "./assets/resume.pdf"




export default function Projects()  {

  // let client_data={
  //   "filmyjunctionstudio" : "Internal Project",
  //   "Aiplex Digital" : "Company website (Internal)",
  //   "Data Ext Tool" : "Internal Project",
  //   "ORM" : "Internal Project",
  //   "HR management" : "Internal Project",
  //   "RBS" : "Royale Bank Of Scotland"
  // }

  let Projects = {
   "names" : [{
      "Aiplex Digital" : { 
          "Project Name" : "Aiplex Digital",
          "Client" : "Internal",
          "Duration": "MAR-2021 to APR-2021",
          "Role" : "Developer",
          "Tools" : "React JS, Html5, Css3, Botstrap",
          "Description": "Maintained and changed the company site from Angular to React as per the company requirements."
        }
   }]
   
  }
  
  
  const ref = useRef(null);


  let subtitle;
  const [isShown, setIsShown] = useState(false);
  const [fjs2 , setFjs2] = useState(false)
  const [adigital , setAdigital] = useState(false)
  const [cra2, setCrs2] = useState(false)
  const [name , setName] = useState("")

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  let  isTrue = (a) => {



    ref.current?.scrollIntoView({behavior: 'smooth'});


    if( a === "Filmy Junction Studio") {
      setName(a)
      
    }
    if(a === "Aiplex Digital"){
      setName(a)
      
      // console.log("CRA")
    }
    if(a === "Content Reputation App") {
      setName(a)
      
    }

    
  }

  useEffect(() => {
    // console.log(Projects.AiplexDigital.Client)
    handleClick()
  }, [name, Projects]);


    return (

   


      
        <div className='lottie3'>
          
            <section className="sec-01">
                <div className='containerhead'>
                  
                    <div className = ""> 

                    
                        <h2 className="main-title">My Work<span className = "blue">&#9632;</span> </h2>
                        <div className="blue_line"></div>
                    </div>
                </div>

                <div className = "container-sub-head"> 
                        <h2 className="sub-title">Web App Projects<span className = "sub-blue">&#9632;</span> </h2>
                        <div className="blue_line"></div>
                    </div>
            </section>

        <div className="container">
  <div className="row">
    <div className="col-sm p-4">
    <div onClick={() => isTrue("Filmy Junction Studio")} className="containercard">     
      
      <div className="cart">
          <div class="cart_imgWrapper">
              <img src={fjs} class="cart_img cart_img-red" alt="" />
          </div>
          <h1 className="cart_title">
          Filmy Junction Studio<span className = "sub-blue">&#9632;</span>
          </h1> 
          <h3 className="cart_price">
          <span className = "gray-text elipsis">FJS is a dynamic website, built for the sandle wood information for the viewr</span>
          <p className='blue-text'>&nbsp; Read More..</p>
          </h3>
          

        </div>
        </div>
    </div>
    <div class="col-sm p-4">
    <div onClick={() => isTrue("Aiplex Digital")} className="containercard">     
      
      <div className="cart">
          <div class="cart_imgWrapper">
              <img src={digital} class="cart_img cart_img-red" alt="" />
          </div>
          <h1 className="cart_title">
              Aiplex Digital<span className = "sub-blue">&#9632;</span>
          </h1> 
          <h3 className="cart_price">
                  <span className = "gray-text">Company website it is pretty much static website with blog</span>
                  <p className='blue-text'>&nbsp; Read More..</p>
          </h3>

        </div>
        </div>
    </div>
    <div class="col-sm p-4">
    <div onClick={() => isTrue("Content Reputation App")}  className="containercard">     
      
      <div className="cart">
          <div class="cart_imgWrapper">
              <img src={cra} class="cart_img cart_img-red" alt="" />
          </div>
          <h1 className="cart_title">
              ORM<span className = "sub-blue">&#9632;</span>
          </h1> 
          <h3 className="cart_price">
          <span className = "gray-text">Online Reputation Management to help the brands to maintain </span>
          <p className='blue-text'> &nbsp; Read More..</p>
          </h3>

        </div>

        {/* <div className='cart'>
          <div className="cart_imgWrapper">
            <img src={cra} className = "cart_img cart_img-red" alt = "has to remove"></img>
            <h1></h1>
             </div>

        </div> */}

       
        </div>
    </div>
  </div>
 
</div>

<div className = "container-sub-head"> 
                        <h2 className="sub-title">Mobile App Projects<span className = "sub-blue">&#9632;</span> </h2>
                        <div className="blue_line"></div>
                    </div>

  <div className="container">
  <div className="row">
    <div className="col-sm p-4">
    <div className="containercard">     
      
      <div className="cart">
          <div class="cart_imgWrapper">
              <img src={fjs} class="cart_img cart_img-red" alt="" />
          </div>
          <h1 className="cart_title">
          CRA<span className = "sub-blue">&#9632;</span>
          </h1> 
          <h3 className="cart_price">
          <span className = "gray-text elipsis">CRA is a dynamic React-Native app for the client interaction with</span>
          <a className='blue-text'>&nbsp; Read More..</a>
          </h3>
          

        </div>
        </div>
    </div>
    <div class="col-sm p-4">
    <div className="containercard">     
      
      <div className="cart">
          <div class="cart_imgWrapper">
              <img src={digital} class="cart_img cart_img-red" alt="" />
          </div>
          <h1 className="cart_title">
              HR management<span className = "sub-blue">&#9632;</span>
          </h1> 
          <h3 className="cart_price">
                  <span className = "gray-text">This app is for the employee perspective app to apply leave </span>
                  <a className='blue-text'>&nbsp; Read More..</a>
          </h3>

        </div>
        </div>
    </div>
    <div class="col-sm p-4">
    <div className="containercard">     
      
      <div className="cart">
          <div class="cart_imgWrapper">
              <img src={cra} class="cart_img cart_img-red" alt="" />
          </div>
          <h1 className="cart_title">
              Influencer<span className = "sub-blue">&#9632;</span>
          </h1> 
          <h3 className="cart_price">
          <span className = "gray-text">This app is used by the social media influencers who hired by</span>
          <a className='blue-text'> &nbsp; Read More..</a>
          </h3>

        </div>

       
        </div>
    </div>
  </div>
 
</div>


{/* =============================================================================== */}

{name !== "" ? 
<div className='relative'>

          <div ref={ref} className = "container-sub-head">
            <h2 className="sub-title">{name}<span className = "sub-blue">&#9632;</span> </h2> 
            
          <div className="blue_line"></div>
          </div>

          <div className="container">
          <div className="row">
           
          <div className="col-10 p-4">
          <div className="containercard">     

          <div className="cart">

          <h3 className="cart_price">
              <span className = "gray-text elipsis">
                <span>
                  <a className='blue-heading-text'>INFO&nbsp;: </a>
                </span>
                <h2>Still under Development</h2> If you need more info on my PROJECTS please <a href={PDF}>DOWNLOAD MY RESUME</a>
              </span>
          </h3>

            

          {/* <h1 className="cart_title">
          {name}<span className = "sub-blue">&#9632;</span>
          </h1> 

          
          <h3 className="cart_price">
              <span className = "gray-text elipsis">
                <span>
                  <a className='blue-heading-text'>Client&nbsp;: </a>
                </span>
      
               
              </span>
          </h3>

          <h3 className="cart_price">
              <span className = "gray-text elipsis">
                <span>
                  <a className='blue-heading-text'>Duration&nbsp;: </a>
                </span>
                FJS is a dynamic website, built for the sandle wood information for the viewr
              </span>
          </h3>

          <h3 className="cart_price">
              <span className = "gray-text elipsis">
                <span>
                  <a className='blue-heading-text'>Role&nbsp;: </a>
                </span>
                FJS is a dynamic website, built for the sandle wood information for the viewr
              </span>
          </h3>

          <h3 className="cart_price">
              <span className = "gray-text elipsis">
                <span>
                  <a className='blue-heading-text'>Tools &amp; Tech&nbsp;: </a>
                </span>
                FJS is a dynamic website, built for the sandle wood information for the viewr
              </span>
          </h3>

          <h3 className="cart_price">
              <span className = "gray-text elipsis">
                <span>
                  <a className='blue-heading-text'>Description&nbsp;: </a>
                </span>
                FJS is a dynamic website, built for the sandle wood information for the viewr
              </span>
          </h3>

          <h3 className="cart_price">
              <span className = "gray-text elipsis">
                <span>
                  <a className='blue-heading-text'>Responsibilities&nbsp;: </a>
                </span>
                FJS is a dynamic website, built for the sandle wood information for the viewr
              </span>
          </h3> */}


          </div>
          </div>
          </div>
       
          
          <div class="col-2 p-4">
          
          <div className="containercard">     

          <Zoom>
          <img className = "expchar2" src={fly} />
          </Zoom>
         


          </div>
          
          </div>
          </div>

          </div>
</div>

: null}


        </div>
 



       
    )
  }

