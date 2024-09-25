import React from 'react'
import { Link } from 'react-router-dom'

function CategoriesCard({image,name}:any) {
  return (     
    <div>
        <Link to={'/shop'}>
        <div className='border border-black rounded-md hover:scale-105 transiton-all 
     drop-shadow-md hover:shadow-md cursor-pointer ease-in-out
     duration-700 delay-100 p-3  '>
        <div className=' w-64 h-64   shadow-md '><img src={image} alt={name} className="w-full h-full object-cover" /></div>
        <div className="text-center mt-4">
        
              <h3 className="text-xl font-semibold capitalize">{name}</h3>
             
          </div>
          </div>
          </Link>
          </div>
 
  )
}

export default CategoriesCard
