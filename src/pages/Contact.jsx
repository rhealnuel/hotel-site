import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Maps from '../component/Maps'
import Contacthero from '../component/Contacthero'
import ContactForm from '../component/ContactForm'
import ScrollToTop from '../component/ScrollToTop'

function Contact() {
  return (
    <div className=' overflow-x-hidden'>
          <ScrollToTop/>
      
        <Navbar/>
        <Contacthero/>
        <ContactForm/>
        <div className='h-[500px]'>
         <Maps/>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact