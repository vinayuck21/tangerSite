import React from 'react'
import ClientReview from './ClientReview'
import CarouselDisplay from './Carousel'
import "../styles.css"
const Client = () => {
  return (
    <div>
        <p style={{
                  position:'relative',
                  marginTop:'30px',
                  fontStyle:'bold',
                  fontSize: '3vw',
                  lineHeight: '1.5',
                  textAlign: 'left',
                  marginLeft:'40px',
                  color: 'orange',  
                  marginBottom:'30px'
        }}>
            Client Testimonials
        </p>
        <p style={{           width:'40vw',
                              position:'relative',
                              marginTop:'30px',
                              fontStyle:'bold',
                              fontSize: '4vw',
                              lineHeight: '1.5',
                              textAlign: 'left',
                              marginLeft:'40px',
                              color: 'white',  
                              marginBottom:'30px'
        }}>
            Clients Review for our work satisfaction
        </p>
        <div className='mf' style={{display:'flex',gap:'10vw',justifyContent:'center',margin:'40px'}}>
          <CarouselDisplay/>
        </div>

    </div>
  )
}

export default Client