import React, { Component } from 'react'
import HTML from "./assets/html-1.svg"
import CSS from "./assets/css-3.svg"
import JS from "./assets/js.svg"
import REACT from "./assets/react-2.svg"
import PYTHON from './assets/python-4.svg'
import "./Skills.css"

export default class Skills extends Component {
  render() {
    return (
      <div className='container'>
          <div className="row align">
              <div className='col'>
                <img className="skill-size" src={HTML}></img>
                <h6 className='text-color'>HTMl</h6>
              </div>

              <div className='col'>
                <img className="skill-size" src={CSS}></img>
                <h6 className='text-color'>CSS</h6>
              </div>

              <div className='col'>
                <img className="skill-size" src={JS}></img>
                <h6 className='text-color'>JS</h6>
              </div>

              <div className='col'>
                <img className="skill-size" src={REACT}></img>
                <h6 className='text-color'>React/Native</h6>
              </div>

              <div className='col'>
                <img className="skill-size" src={PYTHON}></img>
                <h6 className='text-color'>Python</h6>
              </div>

          </div>

      </div>
    )
  }
}
