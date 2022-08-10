import React, { useEffect } from 'react';

//component
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
//css
import recruit from '../public/css/recruit.module.css';

function Recruit() {
  return (
    <main className={recruit.main}>
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </main>
  );
}

// RecruitGuest1.js
// page > recruit.js => components > RecruitGuest1.js

export default Recruit;
