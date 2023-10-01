import React, { useState } from 'react'
import candle2 from "../Resources/R.jpg"
import candle1 from "../Resources/candle1.jpg"
import { BsArrowRightShort } from 'react-icons/bs'
import mmm from '../Resources/q.jpg'

function Home() {
  const [activeCard, setActiveCard] = useState(false)
  const [activeCardTwo, setActiveCardtwo] = useState(false)

  const handleFlip = () => {
    setActiveCard(!activeCard)
    setActiveCardtwo(!activeCardTwo)
  }

  // const [activeCard, setActiveCard]= useState(-1)


  return (
    <div className=''>

      <div className='h-screen w-screen flex  justify-end '>
        <img src={mmm} className='relative' />
        <div className='h-12 w-32 mt-64 mr-20 rounded-xl flex items-center justify-center bg-green-300 absolute'>View More</div>
      </div>

      <div className='flex flex-col justify-center items-center bg-gray-600'>

        <div className='h-screen w-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className=' h-24 flex items-center  font-bold text-3xl '>New Collection</div>
            <div className='h-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, quia.</div>
          </div>

          <div className=' bg-orange-400 flex flex-row gap-6'>
            <div className='h-96 w-96 bg-white flex justify-center'>
              {/* <img></img> */}
              <div className='h-12 w-52 bg-red-300 flex justify-center items-center'>XYZ</div>
            </div>

            <div className='h-96 w-96 bg-white flex justify-center'>
              {/* <img></img> */}
              <div className='h-12 w-52 bg-red-300 flex justify-center items-center'>XYZ</div>
            </div>

            <div className='h-96 w-96 bg-white flex justify-center'>
              {/* <img></img> */}
              <div className='h-12 w-52 bg-red-300 flex justify-center items-center'>XYZ</div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-fit w-screen bg-purple-600 flex flex-col justify-center items-center'>
        <div className=' gap-10 flex flex-row bg-pink-800'>
          <div className=' bg-green-700 rounded-tl-3xl hover:rounded-tl-5xl h-96 w-96 '></div>
          <div className='flex flex-col h-96 w-96 bg-green-400 gap-4'>
            <div className=' font-bold text-2xl pt-4 '>BEST IN SELLING SINCE 2020</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minima veniam commodi praesentium beatae earum eveniet quibusdam quae ut saepe voluptatem tempora deleniti.
              Ut culpa, harum id dolorem autem iure!</div>
          </div>
        </div>

        <div className=' bg-yellow-300 gap-10 mt-16 flex flex-row justify-center items-center'>
          <div className='flex flex-col w-96 h-96 bg-blue-400 gap-10'>
            <div className='font-bold text-2xl '>Best Selling Product</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minima veniam commodi praesentium beatae earum eveniet quibusdam quae ut saepe voluptatem tempora deleniti.
              Ut culpa, harum id dolorem autem iure!</div>
            <div className='h-12 w-24 border-2  flex items-center justify-center bg-green-300'>SEE MORE</div>
          </div>

          <div className='flex flex-col w-96 h-96 bg-blue-400 gap-8'>
            <div className='font-bold text-2xl '>Best Selling Product</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minima veniam commodi praesentium beatae earum eveniet quibusdam quae ut saepe voluptatem tempora deleniti.
              Ut culpa, harum id dolorem autem iure!</div>
            <div className='h-12 w-24 border-2  flex items-center justify-center bg-green-300'>SEE MORE</div>
          </div>

          <div className='flex flex-col w-96 h-96 bg-blue-400 gap-8'>
            <div className='font-bold text-2xl '>Best Selling Product</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minima veniam commodi praesentium beatae earum eveniet quibusdam quae ut saepe voluptatem tempora deleniti.
              Ut culpa, harum id dolorem autem iure!</div>
            <div className='h-12 w-24 border-2  flex items-center justify-center bg-green-300'>SEE MORE</div>
          </div>

        </div>
      </div>



      {/* <div className='h-96 bg-yellow-300 gap-6 flex flex-row justify-center items-center'>
        <div className='flex flex-col w-72 h-72 bg-blue-400 gap-8'>
          <div className='font-bold text-2xl '>Best Selling Product</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minima veniam commodi praesentium beatae earum eveniet quibusdam quae ut saepe voluptatem tempora deleniti.
            Ut culpa, harum id dolorem autem iure!</div>
          <div className='h-12 w-24 border-2  flex items-center justify-center bg-green-300'>SEE MORE</div>
        </div>

        <div className='flex flex-col w-72 h-72 bg-blue-400 gap-8'>
          <div className='font-bold text-2xl '>Best Selling Product</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minima veniam commodi praesentium beatae earum eveniet quibusdam quae ut saepe voluptatem tempora deleniti.
            Ut culpa, harum id dolorem autem iure!</div>
          <div className='h-12 w-24 border-2  flex items-center justify-center bg-green-300'>SEE MORE</div>
        </div>

        <div className='flex flex-col w-72 h-72 bg-blue-400 gap-8'>
          <div className='font-bold text-2xl '>Best Selling Product</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, minima veniam commodi praesentium beatae earum eveniet quibusdam quae ut saepe voluptatem tempora deleniti.
            Ut culpa, harum id dolorem autem iure!</div>
          <div className='h-12 w-24 border-2  flex items-center justify-center bg-green-300'>SEE MORE</div>
        </div>





      </div> */}

      <div className='flex flex-col bg-indigo-600'>
        <div className=' h-32 flex items-center justify-center bg-red-300 font-bold text-3xl '>OUR PRODUCT</div>

        <div className='flex flex-col gap-10 px-10 py-10'>
          <div className='flex flex-row px-10 justify-between items-center'>
            <div className='flex flex-col h-96 w-96 bg-green-500'>
              <div className=' h-96 w-96 '>
                <div
                  onClick={handleFlip}
                  className={`relative card ${activeCard ? 'cardFlip' : ''}`}>
                  {/* front */}
                  <div className='front'>
                    <img src={candle2} alt='image' className='w-96 h-96 absolute bg-cover bg-no-repeat ' />
                    <div className='relative '><button className='border flex flex-row gap-2 items-center px-5 py-2  text-white hover:bg-black bg-orange-500'> View Detail <BsArrowRightShort /></button></div>
                  </div>

                  {/* back */}
                  <div className=' top-0 back absolute w-96 h-96'>
                    {/* <img src={candle1} alt='image' className='w-72 h-72' /> */}
                    <div className=' flex flex-col ml-6 h-96 w-96 items-center mt-56 relative'>
                      <div className=' font-bold text-lg bg-red-500'>Product Name</div>
                      <div className='font-bold text-base'>RS.250</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='flex flex-col h-96 w-96 bg-green-500'>
              <div className=' h-96 w-96 '>
                <div
                  onClick={handleFlip}
                  className={`relative card ${activeCardTwo ? 'cardFlip' : ''}`}>
                  {/* front */}
                  <div className='front'>
                    <img src={candle2} alt='image' className='w-96 h-96 absolute bg-cover bg-no-repeat ' />
                    <div className='relative '><button className='border flex flex-row gap-2 items-center px-5 py-2  text-white hover:bg-black bg-orange-500'> View Detail <BsArrowRightShort /></button></div>
                  </div>


                  {/* back */}
                  <div className=' top-0 back absolute w-96 h-96'>
                    {/* <img src={candle1} alt='image' className='w-72 h-72' /> */}
                    <div className=' flex flex-col ml-6 h-96 w-96 items-center mt-56 relative'>
                      <div className=' font-bold text-lg bg-red-500'>Product Name</div>
                      <div className='font-bold text-base'>RS.250</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='flex flex-col h-96 w-96 bg-green-500'>
              <div className=' h-96 w-96 '>
                <div
                  onClick={handleFlip}
                  className={`relative card ${activeCard ? 'cardFlip' : ''}`}>
                  {/* front */}
                  <div className='front'>
                    <img src={candle2} alt='image' className='w-96 h-96 absolute bg-cover bg-no-repeat ' />
                    <div className='relative '><button className='border flex flex-row gap-2 items-center px-5 py-2  text-white hover:bg-black bg-orange-500'> View Detail <BsArrowRightShort /></button></div>
                  </div>

                  {/* back */}
                  <div className=' top-0 back absolute w-96 h-96'>
                    {/* <img src={candle1} alt='image' className='w-72 h-72' /> */}
                    <div className=' flex flex-col ml-6 h-96 w-96 items-center mt-56 relative'>
                      <div className=' font-bold text-lg bg-red-500'>Product Name</div>
                      <div className='font-bold text-base'>RS.250</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='flex flex-col gap-10 px-10 py-10'>
          <div className='flex flex-row px-10 justify-between items-center'>
            <div className='flex flex-col h-96 w-96 bg-green-500'>
              <div className=' h-96 w-96 '>
                <div
                  onClick={handleFlip}
                  className={`relative card ${activeCard ? 'cardFlip' : ''}`}>
                  {/* front */}
                  <div className='front'>
                    <img src={candle2} alt='image' className='w-96 h-96 absolute bg-cover bg-no-repeat ' />
                    <div className='relative '><button className='border flex flex-row gap-2 items-center px-5 py-2  text-white hover:bg-black bg-orange-500'> View Detail <BsArrowRightShort /></button></div>
                  </div>

                  {/* back */}
                  <div className=' top-0 back absolute w-96 h-96'>
                    {/* <img src={candle1} alt='image' className='w-72 h-72' /> */}
                    <div className=' flex flex-col ml-6 h-96 w-96 items-center mt-56 relative'>
                      <div className=' font-bold text-lg bg-red-500'>Product Name</div>
                      <div className='font-bold text-base'>RS.250</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='flex flex-col h-96 w-96 bg-green-500'>
              <div className=' h-96 w-96 '>
                <div
                  onClick={handleFlip}
                  className={`relative card ${activeCardTwo ? 'cardFlip' : ''}`}>
                  {/* front */}
                  <div className='front'>
                    <img src={candle2} alt='image' className='w-96 h-96 absolute bg-cover bg-no-repeat ' />
                    <div className='relative '><button className='border flex flex-row gap-2 items-center px-5 py-2  text-white hover:bg-black bg-orange-500'> View Detail <BsArrowRightShort /></button></div>
                  </div>


                  {/* back */}
                  <div className=' top-0 back absolute w-96 h-96'>
                    {/* <img src={candle1} alt='image' className='w-72 h-72' /> */}
                    <div className=' flex flex-col ml-6 h-96 w-96 items-center mt-56 relative'>
                      <div className=' font-bold text-lg bg-red-500'>Product Name</div>
                      <div className='font-bold text-base'>RS.250</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='flex flex-col h-96 w-96 bg-green-500'>
              <div className=' h-96 w-96 '>
                <div
                  onClick={handleFlip}
                  className={`relative card ${activeCard ? 'cardFlip' : ''}`}>
                  {/* front */}
                  <div className='front'>
                    <img src={candle2} alt='image' className='w-96 h-96 absolute bg-cover bg-no-repeat ' />
                    <div className='relative '><button className='border flex flex-row gap-2 items-center px-5 py-2  text-white hover:bg-black bg-orange-500'> View Detail <BsArrowRightShort /></button></div>
                  </div>

                  {/* back */}
                  <div className=' top-0 back absolute w-96 h-96'>
                    {/* <img src={candle1} alt='image' className='w-72 h-72' /> */}
                    <div className=' flex flex-col ml-6 h-96 w-96 items-center mt-56 relative'>
                      <div className=' font-bold text-lg bg-red-500'>Product Name</div>
                      <div className='font-bold text-base'>RS.250</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className=' h-32 flex items-end bg-red-800 font-bold text-3xl'>What People Say About Us</div>
        <div className='text-xl h-16 flex items-center bg-sky-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A id sit fugit ipsa harum reiciendis</div>
      </div>

      <div className='flex flex-row mt-10 bg-orange-500 gap-10 justify-center'>
        <div className='h-96 w-96 gap-5 bg-teal-900 flex flex-col justify-center items-center'>
          <div className='w-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Harum maiores tenetur laborum quibusdam, eius cum mollitia autem, consectetur, nostrum facilis cupiditate libero quis quod.
            Commodi ipsam excepturi omnis explicabo debitis!</div>

          <div className='h-20 w-20 rounded-full bg-gray-900'></div>
          <div className='font-bold'>GANGA SARU</div>
        </div>

        <div className='h-96 w-96 gap-8 bg-teal-900 flex flex-col justify-center items-center'>
          <div className='w-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Harum maiores tenetur laborum quibusdam, eius cum mollitia autem, consectetur, nostrum facilis cupiditate libero quis quod.
            Commodi ipsam excepturi omnis explicabo debitis!</div>

          <div className='h-20 w-20 rounded-full bg-gray-900'></div>
          <div className='font-bold'>GANGA SARU</div>
        </div>

        <div className='h-96 w-96 gap-5 bg-teal-900 flex flex-col justify-center items-center'>
          <div className='w-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Harum maiores tenetur laborum quibusdam, eius cum mollitia autem, consectetur, nostrum facilis cupiditate libero quis quod.
            Commodi ipsam excepturi omnis explicabo debitis!</div>

          <div className='h-20 w-20 rounded-full bg-gray-900'></div>
          <div className='font-bold'>GANGA SARU</div>
        </div>
      </div>

    </div>
  )
}

export default Home