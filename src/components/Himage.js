import React from 'react'


const Himage = ({techImage,heading}) => {

  return (
    
    <div style={{
      boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.1)'
    }}>
    <div className="animate__animated animate__zoomIn" id="h-image" style={{zIndex:'15',backgroundImage:`url(${techImage})`,backgroundColor:'black',height:'50vh',width:'30vw',position:'absolute',left:'45%',marginTop:'-72vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPositionX:'-100px'}}>
    <p style={{position:'absolute',left:'300px',width:'30vw',height:'50vh',backgroundColor:'white',color:'orange',fontSize:'30px'}}>{heading}</p>
    <p style={{textAlign:'left',position:'absolute',left:'330px',color:'black',fontSize:'15px',top:'5vh',width:'25vw'}}>Hello World Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World </p>
    </div>
 </div>
  )
}

export default Himage