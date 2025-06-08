import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Facilities from '../component/Facilities'
import Luxury from '../component/Luxury'
import Testimonial from '../component/Testimonial'
import ScrollToTop from '../component/ScrollToTop'


function Home() {
  return (
    <div className=''>
          <ScrollToTop/>
      
        <Navbar/>
        <Hero />
        <Facilities/>
        <Luxury/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home