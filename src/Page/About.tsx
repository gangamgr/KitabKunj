import React from 'react'
import { Link } from 'react-router-dom'
import pp from '../Resources/candle1.jpg'

function About() {
    return (
        <div>

            <div className='h-96 mt-10 w-screen bg-green-200'>
                <img src={pp} alt="image" className='h-96 w-full' />
            </div>


            <div className='h-fit w-screen bg-gray-300 flex items-center flex-col'>
                <div className='h-56 w-1/3 gap-5 justify-center bg-gray-800 flex flex-col items-center'>

                    <div className='text-orange-600'>OUR MISSION</div>
                    <div className=' text-center'> We aim to provide the best service for you with the best products of the best quality. We prioritize every customer.</div>
                </div>

                <div className='h-56 w-1/3 gap-5 justify-center bg-gray-600 flex flex-col items-center'>

                    <div className='text-orange-600'>OUR VISION</div>
                    <div className=' text-center'> We aim to provide the best service for you with the best products of the best quality. We prioritize every customer.</div>

                </div>
            </div>


            <div className='h-screen w-full bg-yellow-200 relative'>
                Teams
                <div className='h-2/3 w-2/3 bg-red-500 right-10 absolute'>
                    <div className='h-full w-full bg-green-700 relative '>
                        <img src={pp} alt=""  className='h-full w-full' />
                        <div className='bg-pink-800 h-64 w-96 absolute -left-40 top-32'>name </div>
                        <div className='bg-pink-100 h-96 w-1/2 absolute -bottom-80 -left-60 '>
                        <img src={pp} alt=""  className='h-full w-full' />
                        </div>
                    </div>
                    <div className='bg-pink-400 h-96 w-screen flex items-right'> description</div>
                </div>
            </div>
            <div className='h-screen w-screen bg-blue-500 grid grid-cols-2'>
                <div className='bg-red-900 flex items-center justify-end'>
                    <div className='h-2/3 w-2/3 bg-white '>description </div>
                </div>
                <div className='bg-red-500 flex items-center justify-start '>
                    <div className='h-2/3 w-2/3 bg-white  '> 
                    <img src={pp} alt=""  className='h-full w-full' /></div>
                </div></div>
                <div className='h-screen w-screen bg-green-400'>
                    <div className='h-32 w-96 bg-pink-900 relative'> 
                    {/* <div className='h-96 w-96  bg-pink-100 relative '> laaaa</div> */}
</div>
                    <div className='h-32 w-96  bg-pink-100 absolute '> laaaa</div>
                </div>
        </div>
    )

}

export default About
