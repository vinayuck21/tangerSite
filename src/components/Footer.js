import React, { Component } from 'react';
import "./FooterStyles.css";
import {IN, AE, YE, OM, SA } from 'country-flag-icons/react/3x2'

export default class Footer extends Component {
  
  handleClick = (country) => {

    console.log(`Clicked on ${country}`);

  };

  render() {
    return (
      <div className='footer'>
        <a href="index.html">
          <div id='logo-container-footer'></div>
        </a>
        <div className="f-grid">
          <div>
            <h2>About</h2>
            <ul>
              <li>Heartbeat</li>
              <li>Software Modules</li>
              <li>Innovation</li>
              <li>Interoperability</li>
            </ul>
          </div>
          <div>
            <h2>Our Service</h2>
            <ul>
              <li>Ut enim ad minim veniam</li>
              <li>Quis nostrud exercitation ullamco</li>
              <li>Laboris nisi ut aliquip</li>
            </ul>
          </div>
          <div>
            <h2>Connect with us</h2>
            <ul>
              <li>
                <a href="mailto:info@tangerinfosys.com">info@tangerinfosys.com</a>
              </li>
              <ul style={{
                position:'inherit',
                width:'100px',
                display:'flex',
                gap:'5px',
                marginLeft:'40px',
                marginBottom:'10px'
                
              }}>
                <li>
              <IN onClick={() => this.handleClick('India')} style={{
                opacity:'1',
                height:'30px',
                width:'30px'
              }}/>
              </li>
              <li>
              <AE onClick={() => this.handleClick('United Arab Emirates')} style={{
                opacity:'1',
                height:'30px',
                width:'30px'
              }}/>
              </li>
              <li>
              <SA
                  onClick={() => this.handleClick('Saudi Arabia')} style={{
                    opacity:'1',
                    height:'30px',
                    width:'30px'
                  }}
       
                />
              </li>
              <li>
              <YE
                  onClick={() => this.handleClick('Yemen')} style={{
                    opacity:'1',
                    height:'30px',
                    width:'30px'
                  }}
       
                />
              </li>
              <li>
              <OM
                  onClick={() => this.handleClick('Oman')} style={{
                    opacity:'1',
                    height:'30px',
                    width:'30px'
                  }}
       
                />
              </li>
              </ul>
              <li>3rd Floor, Oud Metha Offices Tower</li>
              <li>Oud Metha, Dubai</li>
              <li>{}</li>
            </ul>
          </div>
        </div>
    
      </div>
    );
  }
}
