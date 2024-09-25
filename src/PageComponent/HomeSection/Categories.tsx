import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';
import candle1 from "../../Resources/candle1.jpg"
import candle2 from "../../Resources/candle2.jpg"
import R from "../../Resources/R.jpg"
import axios from "../../HOC/Axios/axios"
import bookshelf from "../../Resources/bookself 1.jpg"
import image1 from "../../Resources/123.jpeg"
import image2 from "../../Resources/2.jpg"
import image3 from "../../Resources/3.jpeg"
import image4 from "../../Resources/4.jpeg"
import image5 from "../../Resources/6.jpg"
import cat3 from "../../Resources/category1.avif"

import fiction from "../../Resources/fiction.jpg"
import nonfiction from "../../Resources/nonfiction.jpg"
import horror from "../../Resources/horror.jpg"
import biography from "../../Resources/biography.jpg"
import manga from "../../Resources/manga.jpg"
import comics from "../../Resources/comic.jpg"
import academic from "../../Resources/academic.jpg"

function Categories ()  {

  const list=[
    {
        image:fiction,
        name:"Fiction",
        },
        {
            image:manga,
            name:"Manga",
            },
        {
            image:nonfiction,
            name:"Non Fiction",
            },
    {
    image:cat3,
    name:"Literature",
    },
    {
      image:horror,
      name:"Horror",
      },
      {
        image:academic,
        name:"Academics",
        },
      {
        image:biography,
        name:"Biography",
        },
    
      {
        image:comics,
        name:"Comics",
        },
       
  ];

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(()=>{
    const fetch=async()=>{
      try{
        await axios.get(`/category`).then((res:any)=>{
          console.log(res);
          setData(res.data.result);
        });
      }catch(error){
        console.log(error);
      };
      fetch();
    };
  },[]);

 

  return (
    <div>
      
     {/* Categories Section */}
     <div className="h-fit w-11/12  mx-auto ">
       <h2 className="text-4xl font-bold text-center">Categories</h2>
       <p className="text-center text-lg text-gray-600 mb-10 py-2">Browse our featured categories</p>

        </div>
      
      {/* categories card */}
      <div className='grid grid-cols-4 w-11/12 mx-auto h-fit gap-10 '>
        {list.map((item,i) => {
          return(
           <CategoriesCard
           key={i}
           image={item.image}
           name={item.name}
        
           />
          
        );
})}
      </div>
    </div>
  );
}

export default Categories;
