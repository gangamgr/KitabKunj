import React from 'react'
import Categories from '../PageComponent/HomeSection/Categories'
import Layout from '../Layout/Layout'
import New from "../PageComponent/HomeSection/Landing"
import BestSeller from '../PageComponent/HomeSection/BestSeller'
import Testimonials from '../PageComponent/HomeSection/Testimonials'
// import WhyUs from '../PageComponent/HomeSection/WhyUs'
// import LoginForm from '../auth/login'
import Landing from '../PageComponent/HomeSection/Landing'


export default function index() {
  return (
   <div>

        <div className='mt-16 mb-10'>
            <Categories/>
        </div>

<div className='mt-16 mb-10'>
<BestSeller/>
</div>

<div className='mt-20 '>
            <Landing/>
        </div>

{/* <div className='mt-16 mb-10'>
<WhyUs/>
</div> */}

<div className='mt-10'>
<Testimonials/>
</div>



        
</div>
  )
}

