import React, {useState, useEffect} from 'react'
import Footer from '../component/Footer'
import logo from '../image/logo.svg'
import {CiCreditCard1, CiCirclePlus, CiCircleMinus} from 'react-icons/ci'
import {RiAccountBoxLine} from 'react-icons/ri'
import masterlogo from '../image/mastercard.png'
import visalogo from '../image/visacard.png'
import vervelogo from '../image/vervecard.png'
import { useNavigate } from 'react-router-dom'
import ScrollToTop from '../component/ScrollToTop'

function Payment() {
    const mon = ["...", "01 Jan", "02 Feb", "03 Mar", "04 Apr", "05 May", "06 Jun", "07 Jul", "08 Aug", "09 Sep", "10 Oct", "11 Nov", "12 Dec"];
    const year = ["...","2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033"];
    const Country = ["USA", "Nigeria", "Uganda", "Canada", "Argentina", "Ghana", "South Africa", "Jamaica", "China", "Australia"]


    const [inputValue, setInputValue] = useState('');
    const [cardImage, setCardImage] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [guest, setGuest] = useState(false)
    const [guestForm, setGuestForm] = useState(false)
    const [formData, setFormData] = useState({});


    const navigate = useNavigate()


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/receipt', {state: formData})

    }


   const changeGuest = () => {
    setGuest(!guest)
    setGuestForm(!guestForm)
   }


    const changecheck = () => {
        setCheckbox(!checkbox)
    }
     
    // if(checkbox) {
    //     alert('you subscribed')
    // }

    const setValue = (e) => {
        const value = e.target.value;
        setInputValue(value);


    }



    //master card
    const master = (cardnumber) => {

        const masterCardpartern = /^5[1 -5]\d{14}$/
        return masterCardpartern.test(cardnumber)
    }
    const ismaster = master(inputValue)



  // console.log(ismaster);


    //verve card
    const verve = (cardnumber) =>{
        const verveCardPattern = /^(506(1|2|3|7)|5047)\d{12}$/
        return verveCardPattern.test(cardnumber)
    }

    const isverve = verve(inputValue)

    //console.log(isverve)

    //visa card
    const visa = (cardnumber) => {
        const visaCardPattern = /^4\d{12}(?:\d{3})?$/
        return visaCardPattern.test(cardnumber)
    }

    const isvisa = visa(inputValue)

    //console.log(isvisa)

    useEffect(() => {
        if (isverve) {
            setCardImage(vervelogo);
        } else if (ismaster) {
            setCardImage(masterlogo);
        } else if (isvisa) {
            setCardImage(visalogo);
        } else {
            setCardImage('');
        }
    }, [ismaster, isvisa, isverve]);


    

  return (
    <div className='overflow-x-hidden'>
            <ScrollToTop/>
        
    <div className='flex justify-between w-screen   pt-6 pb-6 pl-4 pr-4 lg:pr-20 lg:pl-20 items-center bg-white shadow-md'>
            <div>
                <img src={logo} alt="logo" />
            </div>
    </div>
       <div className='flex items-center justify-center p-12   '>
        <div className=' flex flex-col gap-3'>
            <div className='flex items-center gap-4'>
            <CiCreditCard1 size={30}/>
            <p className='text-[20px] font-bold'>Payment</p>
            </div>
            <hr />
            <form method='post' className='flex flex-col gap-4' onSubmit={handleSubmit} >
                <div>
                    <label className='font-bold'>Card number</label>
                    <div className='flex'>
                   <input type="text" value={inputValue} onChange={setValue}  className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2'/>
                   <img src={cardImage} alt="" className='w-[50px]' />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 w-full'>
                    <div>
                        <label className='font-bold' >Month</label>
                        <select name="month" id="month" className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black '>
                        {
                            mon.map((mon) => (
                                <option value={mon} key={mon}>{mon}</option>
                            ))
                        }
                    </select>
                        
                    </div>
                    <div>
                        <label className='font-bold' >Year</label>
                        <select name="year" id="year" className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black '>
                            {
                                year.map((year) => (
                                    <option valuee={year} key={year}>{year}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='flex items-center gap-4 pb-[-4px] pt-4'>
                    <RiAccountBoxLine size={25} className=' font-light'/>
                    <p className='font-bold text-[20px]'>Guest information</p>
                </div>
                <hr />
                <div>
                    <label className='font-bold'  >First name</label>
                    <input type="text" onChange={handleChange} name='firstname' value={formData.name} className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2' />
                </div>
                <div>
                    <label className='font-bold' >Last name</label>
                    <input type="text" onChange={handleChange} name='lastname' value={formData.name} className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2' />
                </div>
                <div>
                    <label className='font-bold'>Email</label>
                    <input type="email" onChange={handleChange} name='email' value={formData.name} className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2' />
                </div>
                <div>
                    <label className='font-bold'>Phone</label>
                    <input type="tel" onChange={handleChange} name="phone" value={formData.name} id="" className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2' />
                </div>
                <div>
                    <label className='font-bold'>Country/Region</label>
                    <select name="country" id="country" className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black '>
                        {
                            Country.map((country) => (
                                <option value={country} key={country}>{country}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label className='font-bold'>Address</label>
                    <input type="text" onChange={handleChange} name='address' value={formData.name} className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2' />
                </div>
                <div>
                    <label className='font-bold'>Address 2</label>
                    <input type="text" placeholder='Optional' className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2' />
                </div>
                <div>
                    <label className='font-bold'>State</label>
                    <input type="text" className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2' />
                </div>
                <div>
                    <label className='font-bold' >City</label>
                    <input type="text" className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2' />
                </div>
                <div >
                    <div className='flex gap-2'>
                        <div onClick={changeGuest}>
                            {
                                guest ? <CiCircleMinus size={25}/> : <CiCirclePlus size={25}/>
                            }
                        </div> 
                        <p>Add guest name</p>
                    </div>
                    <div className={`${guestForm ? 'block' : 'hidden'} w-[100%]`}>
                        <p className='w-[300px] md:w-[400px] lg:w-[400px]'>This reservation is in your name. To allow another guest to in, add their name below.</p>

                        <div className='flex flex-col gap-4'>
                            <div>
                                <label className='font-bold' >First name</label>
                                <input type="text" className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2'/>
                            </div>
                            <div>
                                <label className='font-bold' >Last name</label>
                                <input type="text" className='w-[100%] h-[30px] rounded-sm outline-[#7C6A46] border-[1px] border-black p-2'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <input type="checkbox" name="terms" id="terms" className='bg-red-300' onChange={changecheck} />
                    <p>By clicking this you agree to our <a href="/payment"><strong>terms and conditions</strong></a></p>
                </div >
                <div className='w-[100%] flex justify-center'>

                <button  type='submit' className='text-center bg-[#7C6A46] w-[100%] h-[30px] text-white font-bold'>Book Reservation</button>
                </div>
            </form>
       </div> 
       </div>
    <Footer/>    
    </div>
  )
}

export default Payment