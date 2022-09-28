import React from 'react'

import FooterHeader from "../components/FooterHeader";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionMain from "../components/SectionMain";
import TechComponent from "../components/TechComponent";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className='container mx-auto'>
          <a className='text-4xl' href='/about'>About</a>
      </div>
      <Header />
      <TechComponent />
      <SectionMain />
      <FooterHeader/>
    </div>
  )
}

