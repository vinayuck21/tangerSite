import React from 'react'
import Counter from './Counter.js'
import "./MapStyles.css"
const Displaycount = ({count,heading,description,color}) => {
  
  return (
    <div className='counter'>
    <p id="heading" style={{color:`${color}`}}>{heading}</p>
    <Counter maxcount={count}/>
    <p id="desc">{description}</p>
    </div>
  )
}

export default Displaycount