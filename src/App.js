import HeartBeat from './components/HeartBeat';
import './styles.css';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Map from './components/Map';
import Counter from './components/Counter';
import Display from './components/Displaycount';
import TechList from './components/TechList';
import HList from './components/HList';
import Footer from './components/Footer';
import HealthBar from './components/Healthbar';
import SlidingWindow from './components/People';
import homeImage from './components/assets/heartb.jpeg';
import ImageWithTextField from './components/Inf';
import {useState,useEffect} from 'react'
import Button from "./components/Button.js"
import Aboutus from './components/Aboutus';
import Client from './components/Client';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contact from './components/Contact'
import SoftwareMod from './components/SoftwareMod';
import ScrollToTop from './components/ScrollToTop';
import Aup from './components/Aup';
function App() {



  const people = [
    {
      id: 1,
      profileImageUrl: homeImage,
      name: 'John Doe',
      description: 'Software Engineer',
    },
    {
      id: 2,
      profileImageUrl: homeImage,
      name: 'Jane Smith',
      description: 'Graphic Designer',
    },
    {
      id: 3,
      profileImageUrl: homeImage,
      name: 'Mike Johnson',
      description: 'Marketing Specialist',
    },
    {
      id: 4,
      profileImageUrl: homeImage,
      name: 'Mike Johnson',
      description: 'Marketing Specialist',
    },
    {
      id: 5,
      profileImageUrl: homeImage,
      name: 'Mike Johnson',
      description: 'Marketing Specialist',
    },
    {
      id: 6,
      profileImageUrl: homeImage,
      name: 'Mike Johnson',
      description: 'Marketing Specialist',
    },
    {
      id: 7,
      profileImageUrl: homeImage,
      name: 'Mike Johnson',
      description: 'Marketing Specialist',
    },
    // Add more people as needed
  ];
  return (
   
    <Router>
     
    <div className="App">

    
      <div className="page">
      
      <div className='front' data-aos="fade">
      <Navbar/>
      </div>
      <Switch>
      <Route exact path="/">
      
      <div id='home1'>
      
        <div id="home1text">
        <p id="tanger">Tanger Infosystems</p>
        <p id="lorem" style={
          {
            fontSize:'20px',
            color:'orange'
          }
        }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    </div>
      <div className='p1'>
      <Aboutus/>
      </div>
      <div className='page3'>
      <h1 data-aos="fade"  style={{
      zIndex:'4',
      fontSize: '6vw',
      color: 'blue',  // Adjust the color to your preference
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '2px',
        marginTop:'30px'
      }}>GLOBAL-</h1>
      <p style={{
        margin:'20px',
      fontStyle:'italic',
      fontSize: '18px',
      lineHeight: '1.5',
      textAlign: 'center',
      color: '#2f3790',  // Adjust the color to your preference
      marginBottom:'30px'
    }}>Breaking Barriers, Shaping the Future:  Technological Leadership on a Global Scale.</p>
       <Map/>
      </div>

      <div className='page2'>
      <h1 className='w3-monospace' style={{
      fontSize: '6vw',
      color: 'black',  // Adjust the color to your preference
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      margin:'30px 20px 30px 20px'
      }}>-Pioneer</h1>
      <p style={{
      fontStyle:'italic',
      fontSize: '18px',
      lineHeight: '1.5',
      textAlign: 'center',
      color: '#2f3790',  // Adjust the color to your preference
      marginBottom:'30px'
    }}>Unleashing the Transformative Potential of Technological Innovations to Empower Businesses, Optimize Operations, and Shape the Future of the Industry.</p>



      


      </div>
      <div className='gridd'>
      <ImageWithTextField className='grid-item' heading={'Artifical Intelligence'} text={'following'}/>
      <ImageWithTextField className='grid-item' heading={'Remote Patient Monitoring'} text={'following'}/>
      <ImageWithTextField className='grid-item' heading={'Big Data'} text={'following'}/>          
      <ImageWithTextField className='grid-item' heading={'Virtual Reality'} text={'following'}/>
      <ImageWithTextField className='grid-item' heading={'Telemedicine'} text={'following'}/>
      <ImageWithTextField className='grid-item' heading={'Remote Patient Monitoring'} text={'following'}/>
      <ImageWithTextField className='grid-item' heading={'Cloud'} text={'following'}/>          
      <ImageWithTextField className='grid-item' heading={'Maximum Authentication'} text={'following'}/>
      </div>
      <div className="page4">
          <HeartBeat/>
      </div>
      


      <div className="page5">
        <div className='p5image' style={{overflow:'hidden'}}>
        <p style={{
      width:'600px',
      position:'relative',
      top:'20%',
      fontStyle:'bold',
      fontSize:'30px',
      lineHeight: '1.5',
      textAlign: 'left',
      marginLeft:'40px',
      color: 'orange',  
      
    }}>Our Features</p>
        <p style={{
      width:'600px',
      position:'relative',
      top:'20%',
      fontStyle:'bold',
      fontSize: '40px',
      lineHeight: '1.5',
      textAlign: 'left',
      marginLeft:'40px',
      color: '#2f3790',  
      marginBottom:'30px'
    }}>The Healthcare Industry is facing many changes. This imposes new challenges to medical organizations big and small.</p>
        </div>
        <div className="bars" style={{backgroundColor:'white'}}>
        <p style={{
      width:'60vw',
      position:'relative',
      top:'20%',
      fontStyle:'bold',
      fontSize: '18px',
      lineHeight: '1.5',
      textAlign: 'left',
      color: 'orange',  
      marginBottom:'30px'
    }}>The Healthcare Industry is facing many changes. This imposes new challenges to medical organizations big and small. The Healthcare Industry is facing many changes. This imposes new challenges to medical organizations big and small. The Healthcare Industry is facing many changes. This imposes new challenges to medical organizations big and small. The Healthcare Industry is facing many changes. This imposes new challenges to medical organizations big and small.</p>
          <HealthBar name={'Better Patient Expierience'} health={97}/>
          <HealthBar name={'Clinical Care for Clinicians'} health={96}/>
          <HealthBar name={'Managing Care, Cost & Quality'} health={95}/>
          <HealthBar name={'Hospital ERP Application'} health={95}/>
        </div>
        <div className="wi">
          <SlidingWindow people={people}/>
         </div>
        </div>
      <div className="page6 shake">
        <Client/>
      </div>
      <div className="footi">
        <Footer/>
      </div>
      <ScrollToTop />
      </Route>
     
      <Route path="/contact">
        <div style={{overflow:'hidden'}}>
        <Contact/>
        </div>
        <ScrollToTop />
      </Route>
      <Route path="/sm">
        <div style={{overflow:'hidden'}}>
        <SoftwareMod/>
        </div>
        <ScrollToTop />
      </Route>
      <Route path="/aboutus">
        <div style={{overflow:'hidden'}}>
        <Aup/>
        </div>
        <ScrollToTop />
      </Route>
      </Switch>

  </div>

 
    </div>
    </Router>
  );
}

export default App;

