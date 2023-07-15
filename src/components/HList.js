import React, { useState } from 'react';
import "./HListStyles.css"
import techImage from './assets/tech.jpeg';
import lt from './assets/young-doctor-using-stethoscope-listen-old-woman-heart-beat-nursing-home.jpg'
import cerp from './assets/medium-shot-doctor-patient-chatting-clinic.jpg'
import pharma from './assets/young-woman-pharmacist-pharmacy.jpg'
import lims from './assets/woman-working-laborator.jpg'
import ltc from './assets/old-woman-nursing-home-walking-with-crutches-with-help-from-female-nurse.jpg'
import vl from './assets/veterinarian-conducting-inspection-dog-s-ear-with-otoscope.jpg'
import herp from './assets/istockphoto-1141330766-612x612.jpg'
import radio from './assets/doctor-getting-patient-ready-ct-scan.jpg'
import re from './assets/istockphoto-1157247060-1024x1024.jpg'
import vis from './assets/dog-annual-vet-visit-160567692-2000-84b1fb0cf2fb4aa8bab749737299ff47.jpeg'
import 'animate.css';
import Himage from './Himage';
import HlistComp from './HlistComp';

function HList() {


  return (
    <div style={{width:'100%',height:'100vh'}}>
      <div id="h-list">
        <div className="h-grid">
        <HlistComp text={'Hospital ERP'} image={herp}/>
        <HlistComp text={'Clinical ERP'} image={cerp}/>
        <HlistComp text={'LIMS'} image={lims}/>
        <HlistComp text={'RIS | PACS'} image={radio}/>
        <HlistComp text={'Pharmacy System'} image={pharma}/>
        <HlistComp text={'Home Care System'} image={lt}/>
        <HlistComp text={'Rehabilitation'} image={re}/>
        <HlistComp text={'Vetenary Lab System'} image={vl}/>
        <HlistComp text={'Vetenary HIS'} image={vis}/>
        <HlistComp text={'Long Term Care System'} image={ltc}/>
        </div>
      </div>
    </div>
  );
}

export default HList;
