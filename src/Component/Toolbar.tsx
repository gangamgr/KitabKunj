import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {PiHandbag} from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Toolbar() {
  return (
    <div className='h-fit w-fit'>
    <div className=' h-fit w-screen flex flex-row  justify-between px-20 py-6 items-center  bg-white fixed z-0'>
        <div className=' w-32  bg-orange-500 '>LOGO</div>

        <div className=' w-fit flex flex-row gap-10 font-semibold text-md  items-center  '>
        <div className=' text-orange-600'>HOME</div>
        <Link to={'/about'} className='hover:text-orange-600'>ABOUT US</Link>
        <Link to={'/new'} className='hover:text-orange-600'>NEW</Link>
        <div className='hover:text-orange-600'>SHOP</div>
        <div className='hover:text-orange-600'>CONTACTS</div>
        </div>

        <div className='bg-white flex flex-row items-center gap-10 '>
            <div className='text-xl'><BsSearch/></div>
            <div className='text-2xl'><PiHandbag/></div>
            <div className=' border-2 border-orange-600 flex items-center px-8 py-4 hover:bg-orange-600 hover:text-white justify-center text-md font-medium'>LOGIN</div>
        </div>
      
    </div>
    </div>
  )
}

export default Toolbar
