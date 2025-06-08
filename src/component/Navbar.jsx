import React from 'react'
import logo from '../image/logo.svg'
import {AiOutlineMenuFold} from 'react-icons/ai'
import { useRef } from 'react'
import {IoMdClose} from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
    const navigate =useNavigate()

const menu = useRef(null) ;
const close = useRef(null);
const link = useRef(null);
const fixed = useRef(null);

const openMenu = () => {
    menu.current.style.display = 'none';
    close.current.style.display = 'block';
    link.current.style.display = 'flex';
    
};

const closeMenu = () => {
    close.current.style.display = 'none';
    menu.current.style.display = 'block';
    link.current.style.display = 'none';
}

  return (
    <div >
        <div ref={fixed} className='flex justify-between w-screen fixed z-30 pt-6 pb-6 pl-4 pr-4 lg:pr-20 lg:pl-20 items-center bg-white shadow-md'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className='hidden lg:flex gap-14 cursor-pointer  font-semibold'>
                    <li className='hover:text-[#7C6A46] active:text-[#7C6A46]'> <Link to='/'>Home</Link> </li>
                    <li className='hover:text-[#7C6A46] active:text-[#7C6A46]'><Link to='/explore'>Explore</Link></li>
                    <li className='hover:text-[#7C6A46] active:text-[#7C6A46]'> <Link to='/rooms'>Rooms</Link> </li>
                    <li className='hover:text-[#7C6A46] active:text-[#7C6A46]'> <Link to='/about'>About Us</Link></li>
                    <li className='hover:text-[#7C6A46] active:text-[#7C6A46]'><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>

            <div>
                <button onClick={()=> navigate("/rooms?type=all")} className='bg-[#7C6A46] text-white w-[150px] h-[45px] rounded-md hidden lg:block'>Book Now</button>
            </div>
            <div ref={menu} className='lg:hidden flex'>
            <AiOutlineMenuFold  onClick={openMenu} size={30} className='flex  text-[#7C6A46]'/>
            </div>
            <div  ref={close} className='hidden fixed z-50 top-6 right-6'>
                <IoMdClose size={30} onClick={closeMenu} className='text-[#7C6A46] ' />
            </div>
        </div>
        <div ref={link} className='w-screen justify-center bg-white h-screen fixed z-50 hidden mt-20'>
            <ul className='flex flex-col items-center fixed gap-14 cursor-pointer bg-white w-screen h-screen z-50 font-semibold'>
                <li className='hover:text-[#7C6A46]'><Link to='/'>Home</Link></li>
                <li className='hover:text-[#7C6A46]'><Link to='/explore'>Explore</Link></li>
                <li className='hover:text-[#7C6A46]'><Link to='/rooms'>Rooms</Link></li>
                <li className='hover:text-[#7C6A46]'><Link to='/about'>About Us</Link></li>
                <li className='hover:text-[#7C6A46]'><Link to='/contact'>Contact</Link></li>
                <li className='bg-[#7C6A46] text-white w-[150px] h-[45px] text-center rounded-md flex items-center justify-center'>Book Now</li>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar