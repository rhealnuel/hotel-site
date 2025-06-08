import React from 'react'
import room1 from '../image/room1.jpg'
import room2 from '../image/room2.jpg'
import room3 from '../image/room3.jpg'
import { Link } from 'react-router-dom'


function Luxury() {

    const rooms = [
        {
            id: 1,
            image: room1,
            text:'Guest Rooms',
            number: 6,
            link: "/rooms?type=guest"
            
        },
        {
            id: 2,
            image: room2,
            text:'Suites',
            number: 4,
            link: "/rooms?type=suite"

        },
        {
            id: 3,
            image: room3,
            text:'Executive',
            number: 5,
            link: "/rooms?type=executive"

        },
    ]
    
  return (
    <div className='flex flex-col items-center gap-10'>
        <div className="background-image-container">
     <div className='w-[100%] bg-[#7C6A46] bg-opacity-80'>
        <div className='lg:pr-20 lg:pl-20 pt-10 pb-10 flex flex-col items-center gap-12'>
            <div className='flex flex-col items-center text-white gap-2'>
                <p id='luxury1' className='font-medium text-[35px] lg:text-[50px] text-white'>Luxurious Rooms</p>
                <div className='w-[138px] h-[3px] lg:h-[6px] bg-white'></div>
                <p className=' text-sm lg:text-inherit'>All rooms are designed for your comfort</p>
            </div>
            
           <div className='flex flex-col lg:flex-row justify-between w-full items-center lg:items-start gap-5 lg:gap-0'>
           {
                    rooms.map(room => (
                        <Link to={room.link}> 
                            <div key={room.id} className='bg-white w-fit p-4 relative rounded-lg hover:text-[#7C6A46] hover:underline '>
                                <p className='bg-[#7C6A46] text-white w-fit text-[11px] font-bold p-2 rounded-md absolute right-5 top-6 '>{room.number} Rooms Available</p>
                                <img src={room.image} alt="room" />
                            <p className='text-[17px] w-[320px] font-bold '>{room.text}</p>
                            </div>
                        </Link>
                    ))
                }
           </div>
               
            
        </div>
     </div>
    </div>
    <div><Link to={'/rooms?type=all'}><button className='bg-[#907d59] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#7C6A46]'>View All Rooms</button></Link></div>
    </div>

     )
}

export default Luxury