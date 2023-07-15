import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ClientReview from './ClientReview';
function CarouselDisplay() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      interval={5000}
      emulateTouch={true}
    >
      <div className='mf' style={{display:'flex',gap:'10vw',justifyContent:'center',margin:'40px'}}>
        <ClientReview review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'} name={'Laura Ipsa'}/>
      </div>
      <div className='mf' style={{display:'flex',gap:'10vw',justifyContent:'center',margin:'40px'}}>
        <ClientReview review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'} name={'Doler Sita'}/>
      </div>
      <div className='mf' style={{display:'flex',gap:'10vw',justifyContent:'center',margin:'40px'}}>
        <ClientReview review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'} name={'Doler Sita'}/>
      </div>
      <div className='mf' style={{display:'flex',gap:'10vw',justifyContent:'center',margin:'40px'}}>
        <ClientReview review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'} name={'Doler Sita'}/>
      </div>
      <div className='mf' style={{display:'flex',gap:'10vw',justifyContent:'center',margin:'40px'}}>
        <ClientReview review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'} name={'Doler Sita'}/>
      </div>
    </Carousel>
  );
}

export default CarouselDisplay;
