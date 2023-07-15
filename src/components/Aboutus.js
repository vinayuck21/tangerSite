import React from 'react'
import Button from "./Button"
import {Link as Rlink} from 'react-router-dom'
const Aboutus = () => {
  return (
    <div>
      <p data-aos="fade"  style={{
      zIndex:'4',
      fontSize: '50px',
      color: 'orange',  // Adjust the color to your preference
      textAlign: 'left',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      margin:'40px 40px 40px 40px'
      }}>About Us</p>
   

    <div style={{height:'50vh',overflow:'hidden'}}>
    
 
    <div style={{ fontSize: '40px', lineHeight: '1.5', textAlign: 'left', margin: '30px 20px 30px 40px' }}>
        <span style={{ color: 'white' }}>Tanger Infosystems is a HealthCare Technology</span>
        <span style={{ color: 'orange' }}> Lorem Ipsum spsjisdj djsjd ds ai sda oad da od ooooo dadaad</span>  
    </div>
    <p style={{
    fontSize: '18px',
    lineHeight: '1.5',
    textAlign: 'left',
    color: 'orange',  // Adjust the color to your preference
    margin:'30px 20px 30px 40px',
    display: 'block',
    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <p style={{
    fontSize: '18px',
    lineHeight: '1.5',
    textAlign: 'left',
    color: 'orange',  // Adjust the color to your preference
    margin:'30px 20px 30px 40px',
    display: 'block',
    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
</div>
  
   <div style={{paddingLeft:'20px'}}>
   <Rlink to='/aboutus'><Button text={'Read More'} /></Rlink>
   
   </div>
    
    
    </div>

  )
}

export default Aboutus