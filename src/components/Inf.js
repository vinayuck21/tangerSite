import React, { useState } from 'react';
import 'animate.css';
const ImageWithTextField = ({size,heading,text,width,margin,lift}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
     className='grid-item'
      style={{
        position:'relative',
        width: `${{width}*300}px`,
        height: `${{size}*200}px`,
        position: 'relative',
        display: 'inline-block',
        gap:'0px',
        overflow: 'hidden'
      }}
    >
        <div style={{
            zIndex:'100',
            color:'white',
            position:'absolute',
            top:`87%`,
            width:'100%',
            transform: isHovered ? `translateY(${-lift*17}vw)` : 'none',
            transition: `transform ${'0.5'}s`,
            pointerEvents:'none',
            padding:'5px'

        }}>
            <p style={{
                marginLeft:'10px',
                textAlign:'left',
                fontWeight:'bold',
                fontSize:'20px',
                marginBottom:'30px'
            }}>{heading}</p>
            <p>{text}</p>
        </div>

 
 

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
        alt="Image"

        style={{
          width:'100%',
          height:'100%',
          transition: 'filter 0.1s, transform 0.5s',
          filter: isHovered ? 'blur(2px)' : 'none',
          transform: isHovered ? 'scale(1.2)' : 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
        {isHovered && (
        <div
        className="animate__animated animate__fadeInUp"
          style={{
 
            animationDuration:'0.5s',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            mixBlendMode: 'normal'
          }}
        />
      )}
        <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '40px',
          padding: '10px',
          backgroundColor: '#2f3790',
          color: '#fff',
          opacity: isHovered?'0.9':'1',
          transition: 'opacity 1s ease',
          transform: isHovered ? `scale(15)` : 'none',
          transformOrigin: 'center',
          pointerEvents: 'none',
          transition: 'transform 0.5s',
          mixBlendMode: 'normal'
        }}
      >
      </div>

  
     

      </div>
  
  );
};
ImageWithTextField.defaultProps = {
    lift:1,
    width:1,
    height:1
}

export default ImageWithTextField;
