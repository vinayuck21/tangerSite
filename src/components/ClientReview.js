import React from 'react'
import "../styles.css"
const ClientReview = ({review,name}) => {
  return (
    <div className='tc' style={{backgroundColor:'white',borderRadius:'20px',padding:'20px'}}>
        <p style={{
            textAlign:'left',
            color:'orange'
        }}>{review}</p>
        <p style={{
            textAlign:'right',
            right:'20px',
            color:'black'
        }}>{name}</p>
    </div>
  )
}

export default ClientReview