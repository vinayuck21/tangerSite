import React from 'react'
import { Component } from "react"
import { Link } from 'react-scroll'
import {Link as Rlink} from 'react-router-dom'
import "./NavbarStyles.css"
import Display from "./Displaycount.js"
import Button from "./Button.js"

class Navbar extends Component {
 
    submitTexts = () =>{
        console.log("clicked")
    }
    knowMore = () =>{
        console.log("clicked")
    }
  state = {clicked: false}

  handleClick = () =>{
      this.setState({clicked: !this.state.clicked})
  }
  scrollToTop = () => {
    const scrollToTopAnimated = () => {
   
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
      if (currentPosition > 0) {
       
        const newPosition = currentPosition - Math.max(20, currentPosition / 10);
  
        window.scrollTo(0, newPosition);

        window.requestAnimationFrame(scrollToTopAnimated);
      }
    };
  
    window.requestAnimationFrame(scrollToTopAnimated);
  };
  render(){
  return (
    <>
<div className="container">
    <nav>       
        <a href="index.html">
            <div id='logo-container'></div>
        </a>
        <div>
            <ul id="navbar" 
                className={this.state.clicked?"#navbar active":"#navbar"
            }>
                <li onClick={this.scrollToTop}><Rlink to='/' >Home</Rlink></li>
                <li>
                <Link to='p1' spy={true} smooth={true} offset={-90} duration={500} onClick={this.handleClick}>About Us</Link>
                </li>
                <li>
                <Link to='heartbeat' spy={true} smooth={true} offset={0} duration={500} onClick={this.handleClick}>HeartBeat</Link>
                </li>
                <li>
                <Rlink to='/sm'>Software Module</Rlink>
                </li>
                <li>
                    <Rlink to='/contact'>Contact Us</Rlink>
                </li>
            
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked?"fas fa-times":"fas fa-bars"}
            ></i>
        </div>
    </nav>



    






    </div>
    </>
  )
}
}

export default Navbar