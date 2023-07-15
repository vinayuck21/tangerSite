
import React, { Component } from 'react'
import "./NavbarStyles.css"
class TechList extends Component {
  

  render() {
    return (
    <div className='techa'>
    <div id='tech-areas'>
    <div id="techtext">
        <p id="tech1">Our Technology Areas</p>
    </div>
    </div>


    <div id="tech-list">
            <div className="tech-grid">
            <div>
                <h2>Big Data</h2>
                <ul>
                <li>Cloud Technology</li>
                <li>Network</li>
                <li>Storage</li>
                <li>Volume</li>
                </ul>
            </div>
            <div>
                <h2>Remote Patient Monitoring</h2>
                <ul>
                <li>Laboratory Information</li>
                <li>Pharmacy Management</li>
                <li>E-prescription</li>
                <li>Remote Care for Patients</li>
                <li>Heart Monitors</li>
                </ul>
            </div>
            <div>
                <h2>Artificial Intelligence</h2>
                <ul>
                <li>Deep Learning</li>
                <li>Clinical Decision Support</li>
                <li>Diagnosing Patients</li>
                <li>Drug Interaction</li>
                </ul>
            </div>
            <div>
                <h2>Virtual Reality</h2>
                <ul>
                <li>Pain Control in Adults</li>
                <li>Treating and Diminishing Pain</li>
                <li>Medical Training</li>
                <li>Real-Life Surgical Procedures</li>
                </ul>
            </div>
            <div>
                <h2>Telemedicine</h2>
                <ul>
                <li>Easily Accessible</li>
                <li>Private</li>
                <li>Safe and Secure</li>
                <li>Cost-Effective</li>
                </ul>
            </div>
            <div>
                <h2>Health Insurance</h2>
                <ul>
                <li>Customer Relationship Management</li>
                <li>Eligibility &amp; Member Checking</li>
                <li>Prior Authorization</li>
                <li>E-Claim Management</li>
                </ul>
            </div>
            </div>
            <div className="colt">
            <p className='ctext'>
            
            <span className="highlight">Tanger Infosys</span> is helping 
            <span className="highlight"> healthcare clients</span> create reliable, trusted and sustainable 
            <span className="highlight"> ecosystems</span> for their businessess
           
            </p>
            </div>
    </div>
     </div>
    )
  }
}

export default TechList