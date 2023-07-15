import React from 'react'
import "./Contstyles.css"
import Footer from "./Footer"
const Contact = () => {
  return (
    <div>
        <div className="pag">

        </div>
        <div className="oat">
        <p style={{
            position:'relative',
            top:'0px',
            color:'orange',
            fontSize:'30px',
        }}>Our Address</p>
        </div>
        
        <div className="br" style={{padding:'40px',textAlign:'left',display:'flex',justifyContent:'center',gap:'10vw'}}>
        <div className='addressbox' style={{width:'20vw',backdropColor:'white'}}>
            <p style={{fontSize:'30px',color:'white'}}>Contact</p>
            <p style={{fontSize:'20px',color:'white',marginTop:'10px'}}>ABC</p>
        </div>
        <div className='addressbox' style={{width:'20vw',backdropColor:'white'}}>
            <p style={{fontSize:'30px',color:'white'}}>Location</p>
            <p style={{fontSize:'20px',color:'white',marginTop:'10px'}}>ABC</p>
        </div>
        <div className='addressbox' style={{width:'20vw',backdropColor:'white'}}>
            <p style={{fontSize:'30px',color:'white'}}>Website</p>
            <p style={{fontSize:'20px',color:'white',marginTop:'10px'}}>ABC</p>
        </div>
        </div>
        <div className="gmap">
     
        <iframe src="https://www.google.com.qa/maps/d/u/0/embed?mid=1PY52hGJ62aLAzcNap5eEqopE3AeJa0Q&ehbc=2E312F" style={{position:'relative',top:'-70px',width:'100vw',height:'60vh'}}></iframe>
      
        </div>
        <div className="ltalk">
        <div style={{display:'flex',flexDirection:'column'}}>
        <p style={{position:'relative',color:'white',fontSize:'30px',textAlign:'left'}}>Want to work for us? Lets Talk</p>
        <p style={{position:'relative',color:'white',fontSize:'15px',textAlign:'left'}}>Send us your resume</p>
        </div>
        <a target="_blank" rel="noopener" href="info@tangerinfosys.com" style={{textDecoration:'none'}}>

      
        <div className="botton">
        <p style={{position:'relative',color:'orange',fontSize:'20px',textAlign:'center',top:'10%'}}>Contact</p> 
        </div>
        </a>
        </div>
        <div className="cfoot">
        <Footer/>
        </div>
        

    </div>
  )
}

export default Contact