import React, { useEffect, useState } from 'react'
import pic from '../image/room2.jpg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ScrollToTop from '../component/ScrollToTop'
import { fetchRooms } from '../functions/fetchRooms'
import { HashLoader } from 'react-spinners'

function RoomDetail() {

    let {userId} = useParams();
    const [data, setData] = useState(null);       // To store fetched data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetchRooms(`rooms/${userId}`, setData, setLoading, setError)
    }, [])
    console.log("rooooo", data)

  return (
    <div className='relative overflow-x-hidden'>
            <ScrollToTop/>
        
        <Navbar/>
        {
            loading ? 
                    <div className='h-[400px] w-full bg-white flex items-center justify-center'>
                            <HashLoader
                                color={"#7C6A46"}
                                size={70}
                                aria-label="Loading Spinner"
            
                            />
                    </div> :
        <div className=''>
        
            <div id='roomhero'>
        <div className='py-14 overflow-x-hidden  top-4 bottom-4    h-fit   '>
        <div className='w-screen h-fit  flex items-center flex-col py-10'>
            <div className='flex flex-col bg-white w-[90%] lg:w-[60%]  p-4 shadow-xl'>
                <div><p className='text-center text-[18px] font-semibold'>{data?.name?.toUpperCase()} ROOM</p></div>
                <hr />
                <div><img src={data?.image} alt="" className='w-[100%] lg:h-[450px] h-[350px] py-2'/></div>
                <hr />
                <div className='py-4'>
                    <p className='font-semibold text-gray-400 text-[16px]'>Description</p>
                    <p className='p-4'>{data?.description}
                    </p>
                    <div className='flex items-center justify-center'>
                       <Link to={'/payment'}>  <button className=' text-[16px] font-semibold text-white w-[250px] rounded-md py-2 bg-[#7C6A46]'>Book Now</button> </Link>
                    </div>

                </div>
                <hr />
                <div className='py-4'>
                    <p className='font-semibold text-gray-400 text-[16px]'>Room Highlights</p>
                    <ul className='list-disc px-4 py-4'>
                        {
                            data?.highlight?.map((item, index) => (
                                <li key={index}>{item}</li> 

                            ))
                        }
                       
                    </ul>
                </div>
                <hr />
                <div className='flex justify-between gap-2 lg:pr-14 py-4'>
                    <div>
                    <p className='font-semibold text-gray-400 text-[16px] pb-4'>Comfort Amenities</p>
                    <ul className=' list-disc px-4'>
                       {
                            data?.comfort?.map((item, index) => (
                                <li key={index}>{item}</li> 

                            ))
                        }
                    </ul>
                    </div>
                    <div>
                    <p className='font-semibold text-gray-400 text-[16px] pb-4'>Convenience Amenities</p>
                    <ul className='list-disc px-4'>
                        {
                            data?.convenience?.map((item, index) => (
                                <li key={index}>{item}</li> 

                            ))
                        }
                    </ul>
                    </div>
                </div>
                <hr />
                <div className='py-4'>
                <p className='font-semibold text-gray-400 text-[16px] pb-4'>Confidence Amenities</p>
                    <ul className='list-disc px-4'>
                        {
                            data?.confidence?.map((item, index) => (
                                <li key={index}>{item}</li> 

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        </div>

            </div>
        </div>
    }
        <Footer/>
    </div>
    
  )
}

export default RoomDetail