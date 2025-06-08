import React from 'react'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import heropics from '../image/heropics.jpg'
import { useNavigate } from 'react-router-dom'


function Hero() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0 pl:4 pr-4 lg:pl-20 lg:pr-20 items-center w-screen  '>
        <div className='flex flex-col gap-6 lg:gap-7 items-center lg:items-start w-[100%] mt-32'>
            <div>
                
                <p className='text-[45px] lg:text-[50px] text-[#7C6A46]' id='herotitle1'>Paradise View</p> 
                
             </div>   
            <div className=' w-[100%] flex items-center lg:text-start text-center'><p className='text-[40px] lg:text-[55px] font-bold lg:w-[401px] w-[100%] leading-tight lg:leading-snug' id='herotitle2'>Hotel for every moment rich in emotion</p> </div>
            <div><p className='text-[15px] font-medium w-[226px] text-center lg:text-start' id='herotitle3' >Every moment feels like the first time in paradise view</p> </div>
            <div className='flex gap-10 lg:gap-10 '>
                <div><button onClick={()=> navigate("/rooms?type=all")} className='bg-[#7C6A46] text-white  w-[100px] h-[35px] lg:w-[150px] lg:h-[50px] rounded-[50px]  lg:font-medium '>Book Now</button> </div>
                <div className='flex items-center gap-2 lg:gap-4'>
                    <BsFillPlayCircleFill  className='text-[#00A699] text-[30px] lg:text-[45px]  ' />
                    <p className=' text-[12px] lg:text-[20px] font-medium'>Take a tour</p>
                </div>
            </div>
        </div>
        <div >
            <img src={heropics} alt="hero" className='lg:h-[600px] lg:w-[800px] h-[300px] rounded-xl mt-32 ' />
        </div>
    </div>
  )
}

export default Hero