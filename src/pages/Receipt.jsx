import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../component/ScrollToTop';

function Receipt() {
    const location = useLocation();
    const {firstname, lastname, email, address, phone}= location.state || {};
    console.log(firstname)

  return (
    <div>
          <ScrollToTop/>
      
        <Navbar/>

        <div className='flex justify-center items-center pt-24'>
            <div>
                <p>name:{firstname}</p>
                <p>lastname:{lastname}</p>
                <p>mail: {email}</p>
                <p>add: {address}</p>
                <p>Phone: {phone}</p>

            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Receipt