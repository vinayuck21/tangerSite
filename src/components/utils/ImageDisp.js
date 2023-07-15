import React, { useState } from 'react';
import "./imageDisp.css"
const ImageDisplay = () => {
  const [imgBig, setImgBig] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const handleClick = () => {
    setImgBig(!imgBig);
    setOverlayActive(!overlayActive);
  };

  return (
    <div>
      <div className={`body-overlay ${overlayActive ? 'active' : ''}`} />
      <ul className="flex-container">
        <li>
          <img
            className={`imgSmall ${imgBig ? 'imgBig' : ''}`}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
            alt="Image 1"
            onClick={handleClick}
          />
        </li>
        <li>
          <img
            className={`imgSmall ${imgBig ? 'imgBig' : ''}`}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
            alt="Image 2"
            onClick={handleClick}
          />
        </li>
        <li>
          <img
            className={`imgSmall ${imgBig ? 'imgBig' : ''}`}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
            alt="Image 3"
            onClick={handleClick}
          />
        </li>
        <li>
          <img
            className={`imgSmall ${imgBig ? 'imgBig' : ''}`}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
            alt="Image 4"
            onClick={handleClick}
          />
        </li>
        <li>
          <img
            className={`imgSmall ${imgBig ? 'imgBig' : ''}`}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
            alt="Image 5"
            onClick={handleClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default ImageDisplay;