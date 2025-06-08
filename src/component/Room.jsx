import React, {useEffect, useRef, useState} from 'react';
import roompic from '../image/room3.jpg'
import {PiTelevisionSimple, PiShower, PiWifiHighLight} from 'react-icons/pi'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { fetchRooms } from '../functions/fetchRooms';
import { HashLoader } from 'react-spinners';

function Room() {

    const roomlay1 = [
        {
            id: 1,
            image: roompic,
            type: 'The All Room',
            price: '$190,000',
            link: 'rooms/1',
        },
        {
            id: 2,
            image: roompic,
            type: 'The All Room',
            price: '$190,000',
            link: 'rooms/2',
        },
        {
            id: 3,
            image: roompic,
            type: 'The All Room',
            price: '$190,000',
            link: 'rooms/3',
        },
        {
            id: 4,
            image: roompic,
            type: 'The All Room',
            price: '$190,000',
            link: 'rooms/4',
        },
        {
            id: 5,
            image: roompic,
            type: 'The All Room',
            price: '$190,000',
            link: 'rooms/5',
        },
        {
            id: 6,
            image: roompic,
            type: 'The All Room',
            price: '$190,000',
            link: 'rooms/6',
        },
        
    ];

    const roomlay2 = [
        {
            id: 7,
            image: roompic,
            type: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/7',
        },
        {
            id: 8,
            image: roompic,
            type: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/8',
        },
        {
            id: 9,
            image: roompic,
            type: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/9',
        },
        {
            id: 10,
            image: roompic,
            type: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/10',
        },
        {
            id: 11,
            image: roompic,
            type: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/11',
        },
        {
            id: 12,
            image: roompic,
            type: 'The Quest Room',
            price: '$190,000',
            link: 'rooms/12',
        },
        
    ];

    const roomlay3 = [
        {
            id: 13,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/13',
        },
        {
            id: 14,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/14',
        },
        {
            id: 15,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/15',
        },
        {
            id: 16,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/16',
        },
        {
            id: 17,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/17',
        },
        {
            id: 18,
            image: roompic,
            type: 'The Suite Room',
            price: '$190,000',
            link: 'rooms/18',
        },
        
    ];

    const roomlay4 = [
        {
            id: 19,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/19',
        },
        {
            id: 20,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/20',
        },
        {
            id: 21,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/21',
        },
        {
            id: 22,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/22',
        },
        {
            id: 23,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/23',
        },
        {
            id: 24,
            image: roompic,
            type: 'The Executive Room',
            price: '$190,000',
            link: 'rooms/24',
        },
        
    ];


    const all = useRef(null);
    const quest = useRef(null);
    const suite = useRef(null);
    const exec = useRef(null);
    const all1 = useRef(null);
    const quest1 = useRef(null);
    const suite1 = useRef(null);
    const exec1 = useRef(null);
    const blur = useRef(null);


   const allclick = () => {
        if(all.current){
            all.current.style.borderBottom = '4px solid #7C6A46'
            all.current.style.color = '#7C6A46'
            quest.current.style.borderBottom = 'none'
            quest.current.style.color = '#A5A5A5'
            suite.current.style.borderBottom = 'none'
            suite.current.style.color = '#A5A5A5'
            exec.current.style.borderBottom = 'none'
            exec.current.style.color = '#A5A5A5'
            all1.current.style.display = 'grid'
            quest1.current.style.display = 'none'
            suite1.current.style.display = 'none'
            exec1.current.style.display = 'none'


        }
    }

    const questclick = () => {
        if(quest.current){
            quest.current.style.borderBottom = '4px solid #7C6A46'
            quest.current.style.color = '#7C6A46'
            all.current.style.borderBottom = 'none'
            all.current.style.color = '#A5A5A5'
            suite.current.style.borderBottom = 'none'
            suite.current.style.color = '#A5A5A5'
            exec.current.style.borderBottom = 'none'
            exec.current.style.color = '#A5A5A5'
            all1.current.style.display = 'none'
            quest1.current.style.display = 'grid'
            suite1.current.style.display = 'none'
            exec1.current.style.display = 'none'

        }
    }

    const suiteclick = () => {
        if(suite.current){
            suite.current.style.borderBottom = '4px solid #7C6A46'
            suite.current.style.color = '#7C6A46'
            quest.current.style.borderBottom = 'none'
            quest.current.style.color = '#A5A5A5'
            all.current.style.borderBottom = 'none'
            all.current.style.color = '#A5A5A5'
            exec.current.style.borderBottom = 'none'
            exec.current.style.color = '#A5A5A5'
            all1.current.style.display = 'none'
            quest1.current.style.display = 'none'
            suite1.current.style.display = 'grid'
            exec1.current.style.display = 'none'

        }
    }

    const execclick = () => {
        if(exec.current){
            exec.current.style.borderBottom = '4px solid #7C6A46'
            exec.current.style.color = '#7C6A46'
            quest.current.style.borderBottom = 'none'
            quest.current.style.color = '#A5A5A5'
            suite.current.style.borderBottom = 'none'
            suite.current.style.color = '#A5A5A5'
            all.current.style.borderBottom = 'none'
            all.current.style.color = '#A5A5A5'
            all1.current.style.display = 'none'
            quest1.current.style.display = 'none'
            suite1.current.style.display = 'none'
            exec1.current.style.display = 'grid'

        }
    }
    const navigate = useNavigate()
     const [searchParams] = useSearchParams();

    const queryParams = searchParams.get('type');
    const [type, setType] = useState('')
    const [limit, setLimit] = useState(10)
    const [data, setData] = useState(null);       // To store fetched data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); 

    const query = `rooms`
    const query2 =`rooms?type=${type}&limit=${limit}`
    const query3 =`rooms?type=${queryParams}&limit=${limit}`

    useEffect(() => {
        if(type?.trim() && type !== "all"){
            fetchRooms(query2,setData, setLoading, setError)
        }else if(queryParams?.trim() && queryParams !== "all"){
            fetchRooms(query3,setData, setLoading, setError)
        }else{
            fetchRooms(query,setData, setLoading, setError)
        }
    }, [type, queryParams])

    console.log("data", data);
    

  return (
    <div className=' overflow-x-hidden'>
        <div ref={blur} className=''>

        <hr />
        <div className='flex items-center justify-evenly text-[20px] font-bold text-gray-400'>
            <div><button onClick={()=>{
                setType("all")
                navigate("?type=all")
            }} className={`text-[#7C6A46] py-4 lg:w-[250px] border-b-[4px]   ${type === "all" || queryParams==="all" ? "border-[#7C6A46] text-[#7C6A46]" : "border-none text-[#A5A5A5]"}`}>All</button></div>
            <div><button ref={quest} onClick={() => {
                setType("guest")
                navigate("?type=guest")

            }} className={`hover:text-[#7C6A46] py-4 lg:w-[250px] border-b-[4px] ${type === "guest" || queryParams === "guest" ? "border-[#7C6A46] text-[#7C6A46]" : "border-none text-[#A5A5A5]"} border-[#7C6A46]`}>Guest Rooms</button></div>
            <div><button ref={suite} onClick={() => {
                setType("suite")
                navigate("?type=suite")
             }} className={`hover:text-[#7C6A46] py-4 lg:w-[250px] border-b-[4px] ${type === "suite" || queryParams === "suite" ? "border-[#7C6A46] text-[#7C6A46]" : "border-none text-[#A5A5A5]"}  border-[#7C6A46]`}>Suites</button></div>
            <div><button ref={exec} onClick={() => {
                setType("executive")
                navigate("?type=executive")
             }} className={`hover:text-[#7C6A46] py-4 lg:w-[250px] border-b-[4px] ${type === "executive" || queryParams === "executive" ? "border-[#7C6A46] text-[#7C6A46]" : "border-none text-[#A5A5A5]"} border-[#7C6A46]`}>Executive</button></div>
        </div>
        <hr />

{
    loading ? 
        <div className='h-[400px] w-full bg-white flex items-center justify-center'>
                <HashLoader
                    color={"#7C6A46"}
                    size={70}
                    aria-label="Loading Spinner"

                />
        </div>
    : 
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5  lg:px-20 gap-16'>
            {data?.rooms?.map(room =>(
                <div key={room?._id} className='w-fit h-fit bg-white shadow-xl text-[#7C6A46]  '>
                <div>
                    <img src={room?.image} alt="roompic"  className='w-[410px]'/>
                </div>
                <div className='flex justify-between p-2'>
                    <p className='text-[20px] font-semibold'>{room?.name}</p>
                    <p>Available: {room?.available ? "Yes" : "No"}</p>
                </div>
                <div className='p-2'>
                    <p className='text-[15px] font-semibold'>${room?.price?.toLocaleString()} </p>
                </div>
                <hr />
                <div className='flex justify-between p-2 items-center'>
                    <div className='flex gap-2'>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiTelevisionSimple size={25}/>
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiShower size={25} />
                        </div>
                        <div className='w-fit h-fit bg-[whitesmoke] p-2 rounded-full'>
                            <PiWifiHighLight size={25}/>
                        </div>
                    </div>
                    <div>
                    <Link to={`/rooms/rooms/${room?._id}`}><button className='bg-[#7C6A46] px-6 py-2 text-white'>Book Now</button></Link>  
                    </div>
                </div>
            </div>
            ))}
        </div>

    
}



       
        </div>
    </div>
  )
}

export default Room