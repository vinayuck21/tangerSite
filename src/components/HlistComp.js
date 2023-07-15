import React from 'react'
import Himage from './Himage'
import { useState } from 'react'
const HlistComp = ({text,image}) => {
    const [hoveredTech, setHoveredTech] = useState(null);

    const handleMouseEnter = (tech) => {
      setHoveredTech(tech);
    };
  
    const handleMouseLeave = () => {
      setHoveredTech(null);
    };
  return (
    
    <div>
      <div
        className="heading-container"
        onMouseEnter={() => handleMouseEnter('Hospital ERP')}
        onMouseLeave={handleMouseLeave}
      >
        <h2>{text}</h2>
        <button className="toggle-button"></button>
      </div>
      {hoveredTech === 'Hospital ERP' && (
        <div className='mh'>
        <Himage techImage={image} heading={text} />
        </div>
      )}
    </div>


  )
}

export default HlistComp