import React, { useState, useEffect } from 'react';
import "./People.css"
const SlidingWindow = ({ people }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visiblePeopleCount, setVisiblePeopleCount] = useState(3);
  const handleClickNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const handleClickPrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };
  function sliceArray(array, start, end) {
    const length = array.length;
    
    if (start < 0 || start >= length) {
      return [];
    }
    
    if (end < 0 || end >= length) {
      return array.slice(start % length).concat(array.slice(0, end % length));
    }
    
    return array.slice(start, end);
  }
  useEffect(() => {
    const handleMediaQuerySmall = (mq) => {
      if (mq.matches) {
        setVisiblePeopleCount(1);
      }
    };
  
    const handleMediaQueryMedium = (mq) => {
      if (mq.matches) {
        setVisiblePeopleCount(2);
      }
    };
    const handleMediaQueryLarge = (mq) => {
        if (mq.matches) {
          setVisiblePeopleCount(3);
        }
      };
  
    const mediaQuerySmall = window.matchMedia('(max-width: 1200px)');
    const mediaQueryMedium = window.matchMedia('(min-width: 1200px) and (max-width: 1400px)');
    const mediaQueryLarge = window.matchMedia('(min-width: 1401px)' );
    handleMediaQuerySmall(mediaQuerySmall); // Initial check for small screens
    handleMediaQueryMedium(mediaQueryMedium); // Initial check for medium screens
    handleMediaQueryLarge(mediaQueryLarge); // Initial check for large screens
  
    // Listen for changes in the media queries
    mediaQuerySmall.addEventListener('change', handleMediaQuerySmall);
    mediaQueryMedium.addEventListener('change', handleMediaQueryMedium);
    mediaQueryLarge.addEventListener('change',handleMediaQueryLarge);
  
    // Clean up the event listeners
    return () => {
      mediaQuerySmall.removeEventListener('change', handleMediaQuerySmall);
      mediaQueryMedium.removeEventListener('change', handleMediaQueryMedium);
      mediaQueryLarge.removeEventListener('change', handleMediaQueryLarge);
    };
  }, []);
  

  const visiblePeople = sliceArray(people,startIndex,startIndex+visiblePeopleCount)

  return (
    <div className='bg' style={{backgroundColor:'#2f3790'}}>
      <h2 style={{color:'orange'}}>Meet Our Team</h2>
      <div className="window">
      <button className="button1" onClick={handleClickPrevious}></button>
        {visiblePeople.map((person) => (
          <div key={person.id} className="person">
            <img src={person.profileImageUrl} alt={person.name} className="profile-image" />
            <div className="text-fields">
              <p style={{color:'white'}}>{person.id}</p>
              <p style={{color:'white'}}>{person.description}</p>
            </div>
          </div>
        ))}
        
        <button className="button1 next-button1" onClick={handleClickNext}></button>

      </div>
      
      
    </div>
  );
};

export default SlidingWindow;
