import React, { Children, ReactNode } from 'react'
import Home from '../Page/Home'
import {useLocation} from 'react-router-dom'
import Toolbar from '../Component/Toolbar'
import Footer from '../Component/Footer'
// import Toolbar from '../Component/toolbar'

type props={
  children:ReactNode
}
function Layout({children }:props) {
    const location=useLocation()
  return (
    <div className='grid grid-cols-12 h-screen w-screen relative'>
        <div className={`col-span-12 ${location.pathname==='/login' ? "hidden" : ""} sticky top-0 z-50`}>
            <Toolbar/>
        </div>
        <div className='w-full col-span-12 px-4 py-6 '>
            {children}
        </div>
        <div className='w-full col-span-12 px-4 py-6'>
          <Footer/>
        </div>
      
    </div>
  )
}

export default Layout
