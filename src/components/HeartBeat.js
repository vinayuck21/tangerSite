import React, { Component, useState } from 'react'
import "./NavbarStyles.css"
import Button from "./Button.js"
import HList from './HList'
class HeartBeat extends Component {
    submitTexts = () =>{
        console.log("clickeds")
    }
    render(){
  return (
    <div className='heartbeat' >
    <div className="hlist">
    <HList />
    </div>
      
    <div id="heartbtext">
      
    <p id="product">Our Product</p>
    
    <p id="heart">HEARTBEAT</p>
    
    <p id="lorem" style={{color:'orange'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> 
 
    </div>
 
    </div>
  )
    }
}

export default HeartBeat