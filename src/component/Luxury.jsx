import React from 'react'
import room1 from '../image/room1.jpg'
import room2 from '../image/room2.jpg'
import room3 from '../image/room3.jpg'
import { Link } from 'react-router-dom'
import { roomlay1 } from './Array'
import { IoLocationOutline } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx'


function Luxury() {

    const rooms = [
        {
            id: 1,
            image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Ftpfamgajn9w7me6ah99a7xt511i215&option=N&h=472&permitphotoenlargement=false",
            text:'Seongsu-dong Seoul Si, South Korea',
            number: "Available",
            price: "$17,696,564",
            info : ""
            
        },
        {
            id: 2,
            image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Fhdj2h8t2qvw145aymn4g9c9911i215&option=N&h=472&permitphotoenlargement=false",
            text:'Cheongdam-dong, Gangnam-gu Seoul Si, South Korea',
            number: "Available",
            price: "$15,090,094",
            info: ""
        },
        {
            id: 5,
            image: "https://img.jamesedition.com/listing_images/2025/08/11/11/49/03/2a60e1f6-a7ea-4842-9ca4-b399fb352202/je/1100xxsxm.jpg",
            text:'684-90 Hannam-dong, Yongsan District, Seoul, South Korea',
            number: "On Hold",
            price: "$13,776,570",
            info: "Purchased by Mr&Mrs Park Jimin Lisa Philips, having an Outstanding balance cost of $50,000, contact support to clear off payment."
        },
    ]
    
  return (
    <div className='flex flex-col items-center gap-10 w-screen pt-10 '>
        <div className="background-image-container">
     <div className='w-[100%] bg-[#7C6A46] bg-opacity-80 px-4'>
        <div className='lg:pr-20 lg:pl-20 pt-10 pb-10 flex flex-col items-center gap-12 w-full justify-center'>
            <div className='flex flex-col items-center text-white gap-2'>
                <p id='luxury1' className='font-medium text-[35px] lg:text-[50px] text-white'>Featured Properties </p>
                <div className='w-[138px] h-[3px] lg:h-[6px] bg-white'></div>
                <p className=' text-sm lg:text-inherit'>Handpicked properties by our team.</p>
            </div>
            
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5  lg:px-20 gap-16 w-[100vw]'>

                       {roomlay1.map(room =>(
                           <Link to={`rooms/rooms/${room.id}`}>
                           <div key={room.id} className='w-fit h-fit bg-white shadow-xl text-[#7C6A46]  '>
                           <div>
                               <img src={room.image[0]} alt="roompic"  className='w-[410px]'/>
                           </div>
                           <div className='flex justify-between p-2'>
                               <p className='text-[20px] font-semibold'>Luxury {room.type}</p>
                               <p className={` text-white px-2 flex items-center italic rounded-lg bg-[#7C6A46]`}>{room.for}</p>
                           </div>
                           <span className='flex items-center gap-1 px-2'>
                               <IoLocationOutline />
                               <p className='text-[14px]'>{room.locate}</p>
                           </span>
                           <span className='flex items-center gap-1 px-2 text-[14px]'>
                               <p> {room.rooms} Bedrooms</p>
                               <RxDotFilled />
                               <p>{room.interior}</p>
                           </span>
                           <div className='p-2'>
                               <p className='text-[15px] font-semibold'>{room.price} </p>
                           </div>
                           <hr />
                           <div className='flex justify-between p-2 items-center'>
                               <div className=' w-[70%]'>
                               <p className='pt-2 italic font-bold text-[12px] text-red-500'>{room.note}</p>
                                   {/* <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                                       <PiTelevisionSimple size={25}/>
                                   </div>
                                   <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                                       <PiShower size={25} />
                                   </div>
                                   <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                                       <PiWifiHighLight size={25}/>
                                   </div> */}
                               </div>
                               <div>
                                 <Link to={`rooms/${room.id}`}><button className={` px-6 py-2 text-white text-[14px] ${room.status === "Pending" && "bg-yellow-500"  } ${room.status === "Available" && "bg-green-500"  } ${room.status === "On Hold" && "bg-red-500"  } `}>{room.status}</button></Link>  
                               </div>
                           </div>
                       </div>
                           </Link>
                       ))}
           </div>
               
            
        </div>
     </div>
    </div>
    <div><Link to={'/rooms'}><button className='bg-[#907d59] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#7C6A46]'>View All</button></Link></div>
    </div>

     )
}

export default Luxury
