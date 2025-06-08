import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Abouthero from '../component/Abouthero'
import Aboutdetail from '../component/Aboutdetail'
import ScrollToTop from '../component/ScrollToTop'

function About() {
  return (
    <div className='overflow-x-hidden'>
          <ScrollToTop/>
    
        <Navbar/>
        <Abouthero/>
        <Aboutdetail/>
        <Footer/>
    </div>
  )
}

export default About