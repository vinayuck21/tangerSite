import React, { useState, useEffect, useRef } from 'react';
import "../styles.css"
const HealthBar = ({ name,health }) => {
  const [currentHealth, setCurrentHealth] = useState(0);
  const healthBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentHealth(health);
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (healthBarRef.current) {
      observer.observe(healthBarRef.current);
    }

    return () => {
      if (healthBarRef.current) {
        observer.unobserve(healthBarRef.current);
      }
    };
  }, [health]);

  return (
    <div health style={{
        width:'100%'
    }}>
    <div className="params" style={{
        display: 'flex',
        justifyContent:'space-between',
        marginBottom:'10px',
        marginTop:'10px'
    }}>
        <p style={{fontSize:'20px',color:'black'
                    }}>{name}</p>
        <p className='mr' style={{fontSize:'20px',color:'black'

}}>{currentHealth}%</p>

    </div>
  
    <div ref={healthBarRef} className="bar">
      <div
        style={{
          position:'relative',
          zIndex:'2',
          width: `${currentHealth}%`,
          height: '12px', // Adjust the height as needed
          backgroundColor: 'orange', // Adjust the color as needed
          transition: 'width 1s ease-in-out', // Adjust the transition duration and easing as needed
          borderRadius:'10px'
        }}
         />
        <div
        style={{
          marginTop:'-12px',
          zIndex:'1',
          width: `100%`,
          height: '12px', // Adjust the height as needed
          backgroundColor: 'grey', // Adjust the color as needed
          transition: 'width 1s ease-in-out', // Adjust the transition duration and easing as needed
          borderRadius:'10px'
        }}
      />
    </div>
    </div>
  );
};

export default HealthBar;
