import React, { useState, useEffect, useRef } from 'react';

const Counter = ({maxcount}) => {
  const [count, setCount] = useState(0);
  const targetValue = maxcount;
  const duration = 1000;

  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          let startTime = null;
          let startValue = 0;

          const countAnimation = (timestamp) => {
            if (!startTime) {
              startTime = timestamp;
            }

            const progress = timestamp - startTime;
            const increment = (targetValue - startValue) * (progress / duration);
            const currentValue = Math.floor(startValue + increment);

            if(currentValue<=targetValue)setCount(currentValue);

            if (currentValue < targetValue) {
              requestAnimationFrame(countAnimation);
            }
          };

          requestAnimationFrame(countAnimation);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return <span ref={countRef}>{count}</span>;
};

export default Counter;
