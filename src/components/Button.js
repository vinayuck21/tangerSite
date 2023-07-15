import React from 'react'
import "./Bstyles.css"
const Button = ({text,onClick}) => {
  return (
    <div className="btn fifth" onClick={onClick}>
    <p id="btext">{text}</p>
    </div>
  )
}

export default Button