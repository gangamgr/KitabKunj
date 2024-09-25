import React from 'react';
import {BiCurrentLocation} from 'react-icons/bi'
import {BsTelephoneInbound} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoMessenger} from 'react-icons/bi'


function Footer() {
    return (
        <div className='h-fit w-full mx-auto items-center bg-orange-600  flex flex-col'>
        <div className=' grid grid-cols-3  gap-4'>
            <div className=' py-10 flex justify-center items-center flex-col '>
                <div className='text-2xl py-4 font-semibold text-white cursor-pointer'> CONTACT US</div>
                <div className='text-white'>
                <div className='flex flex-row gap-2 py-2 cursor-pointer'>
                    
                    <BiCurrentLocation className=' text-xl mt-1'/>                   
                    Shankarnagar-2, Rupandehi
                </div>
                <div className='flex flex-row gap-2 py-2 cursor-pointer'>
                    <BsTelephoneInbound className=' text-xl mt-1'/> 9864453222</div>
                <div className='flex flex-row gap-2 py-2 cursor-pointer'>
                    <AiOutlineMail className=' text-xl mt-1'/> sadhanaagaut@gmail.com</div>
            </div>
            </div>
            {/* contactus */}
            {/* <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center items-center">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="flex flex-col">
                            <li className="h-44 w-full">
                                <BsTelephoneInbound /> <span>+123 4567 890</span>
                            </li>
                            <li className="h-44 w-full">
                                <AiOutlineMail /> <span>shop@shema.com</span>
                            </li>
                            <li className="h-44 w-full">
                                <BiCurrentLocation /> <span>Addis Ababa, Ethiopia</span>
                            </li>
                        </ul>
                    </div> */}
            {/*  */}
            <div className=' gap-12 mt-10  flex flex-col justify-center text-white items-center'>
                <div className='text-center cursor-pointer text-xl'>Our Misssion Is To Be

"Planet's Lowest Priced ,Pre-Eminient E-Retail company"</div>
            
            <div className='flex gap-4 flex-row '>
                <span className=' h-8 w-8 border-white items-center flex justify-center border  rounded-full hover:scale-110 transiton-all 
      cursor-pointer ease-in-out duration-700 delay-100'><BsTwitter className='text-xl'/></span>
                <span className=' h-8 w-8  border-white items-center flex justify-center border  rounded-full hover:scale-110 transiton-all 
      cursor-pointer ease-in-out duration-700 delay-100'><BiLogoFacebook className='text-xl'/></span>
                <span className=' h-8 w-8  border-white items-center flex justify-center border  rounded-full hover:scale-110 transiton-all 
      cursor-pointer ease-in-out duration-700 delay-100'><AiOutlineInstagram className='text-xl'/> </span>
                <span className=' h-8 w-8  border-white items-center flex justify-center border  rounded-full hover:scale-110 transiton-all 
      cursor-pointer ease-in-out duration-700 delay-100'><BiLogoMessenger className='text-xl'/></span>
            </div>
            </div>
            <div className=' flex flex-col items-center  justify-center text-white'>
                <div className='text-2xl py-4 font-semibold cursor-pointer '> HELP</div>
                <div className='text-white'>
                   
                <div className='  cursor-pointer py-2'> Shipping</div>
                <div className='cursor-pointer py-2'>Refund</div>
                <div className=' cursor-pointer py-2'>FAQ  </div>
               
                
            </div>
            </div>
        </div>
        <div className=' bg-gradient-to-r from-gray-900 to-transparent border mt-6  w-3/4 '></div>
        <div className=' font-mono py-4 r'> Copyright @ 2020 lEMANI BY WebGEniusLab. All Rights Reserved.</div>
        </div>
    )
}

export default Footer