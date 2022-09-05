// import React from 'react'
import  React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import expChar from "./assets/expchar.png"
import Zoom from 'react-reveal/Zoom';

 
import "./experience.css"





export default function Experience() {


 


  return (

    <div className='imgmaindiv'>
      <div className='img-main-div'>
      <Zoom>
                <img className="expchar" src={expChar} />
                </Zoom>
                </div>
                
    <div className='container'>






      <div className='row justify-content-md-center'>

      

      <div className='col'>
                <div className='containerhead'>
                    <div className = ""> 
                        <h2 className="main-title" style={{color : "gray"}}>Experience<span className = "blue">&#9632;</span> </h2>
                        <div className="blue_line"></div>
                    </div>
                </div>
                
                

                <VerticalTimeline
                // lineColor={''}
                layout={ '1-column-left' }
                className="timeline"
                >

<VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022, APR - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  
                  >
                    <h3 className="vertical-timeline-element-title">Infosys ltd. (India)</h3>
                    <h6 className="vertical-timeline-element-subtitle" style={{color : "gray"}}>Bangalore, KA</h6>
                    <h5 className="vertical-timeline-element-subtitle">Sr. Systems Engineer</h5>
                    <p>
                     Front End Development
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                  
                  className="vertical-timeline-element--work"
                  date="2021, MAR - 2022, Mar"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
                >
                  <h3 className="vertical-timeline-element-title">Aiplex Software Pvt. Ltd</h3>
                  <h6 className="vertical-timeline-element-subtitle" style={{color : "gray"}}>Bangalore, KA</h6>
                  <h5 className="vertical-timeline-element-subtitle">Jr. Software Engineer</h5>
                  <p>
                    Native mobile and web apps, Requirement gathering, Module lead, Feature development
                  </p>
                </VerticalTimelineElement>



                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2020, JAN - 2021, MAR"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  

                  >
                    <h3 className="vertical-timeline-element-title">Vivian Business solutions Pvt. Ltd.</h3>
                    <h6 className="vertical-timeline-element-subtitle" style={{color : "gray"}}>Guntur, AP</h6>
                    <h5 className="vertical-timeline-element-subtitle">Jr. Software Engineer</h5>
                    <p>
                      Responsible for client interactions,Feature development, bug fixing.
                    </p>
                  </VerticalTimelineElement>

                {/* ------------------------------------------------------- */}
                 



                </VerticalTimeline>
      </div>




      <div className='col'>
      <div className='containerhead'>
                    <div className = ""> 
                        <h2 className="main-title" style={{color : "gray"}}>Education<span className = "blue">&#9632;</span> </h2>
                        <div className="blue_line"></div>
                    </div>
                </div>

<VerticalTimeline
lineColor={ "#5dabf7" }
layout={ '1-column-left' }
>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#ffffff", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2014 - 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  

  >
    <h3 className="vertical-timeline-element-title">Vasireddy Venkatadri Institute of Technology</h3>
    <h6 className="vertical-timeline-element-subtitle" style={{color : "gray"}}>Nambur,Guntur, AP</h6>
    <p>
      Graduated in Computer Science and engineering.
    </p>
  </VerticalTimelineElement>

{/* ------------------------------------------------------- */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2012 - 2014"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
     <h3 className="vertical-timeline-element-title">Sri chaitanya Jr college</h3>
    <h6 className="vertical-timeline-element-subtitle" style={{color : "gray"}}>Guntur, AP</h6>
    <p>
      +2 education with Physics, Chemistry, and math (PCM)
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
</div>
     
     </div>

</div>
</div>
  )
}

