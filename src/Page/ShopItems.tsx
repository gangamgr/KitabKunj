// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";


// function ShopItems(){
//   const [contactdata, setContactData] = useState([]);
//     //   const [UpdateData, setUpdateData] = useState<any>([]);/
    
//       const getContact = () => {
//         try {
//           axios
//             .get("http://localhost:3005/content")
//             .then((res) => {
//               console.log(res);
//               setContactData(res?.data);
//             })
//             .catch(() => {
//                 console.log ("error fetching data")
//             //   toast.error("Could not fetch data");
//             });
//         } catch (error) {
//             console.log ("error on fetching")
//             setContactData([]); 
//         //   toast.error("Server error");
//         }
//       };
    
//     //   const DeleteData = (id: any) => {
//     //     try {
//     //       axios
//     //         .delete(https://backend.lophoabroad.com/footer/${id})
//     //         .then((res) => {
//     //           console.log(res);
//     //           getContact();
//     //         })
//     //         .catch((err) => {
//     //           console.log(err);
//     //         });
//     //     } catch (error) {
//     //       console.log(error);
//     //     }
//     //   };
//       useEffect(() => {
//         getContact();
//       }, []);
    


// return(
// <div className='flex flex-col items-center w-11/12 mx-auto'>
//       <div className='h-48 w-full mt-24 bg-red-500 flex justify-center items-center'>
//         <div className='font-serif text-white font-bold text-4xl'>OUR COLLECTION</div>
//       </div>

//       <div className="mt-16 w-full max-w-6xl px-4">
//         <h2 className="text-3xl font-bold text-center text-red-600">Discover Books</h2>
//         <p className="text-center text-gray-600 mb-8">Explore our comprehensive collection of books.</p>
//     <div className="grid grid-cols-4">
//     {contactdata.map((contact:any,i:number) => {
// return(
//     <div  key={contact.id}  className="h-full w-full mx-auto gap-6 px-4 bg-red-200 grid grid-cols-4">



// <div className=" mt-20 h-fit w-fit">
// <div className=" h-fit w-fit gap-10 bg-green-300">
//       <div className=' w-64 h-64  bg-white shadow-md '>
//         {/* <img src={contact.bookname} alt={contact.bookname}
//          className="w-full h-full object-cover" /></div> */}
//       {/* <div className="product-info"> */}
//       </div>
//       <div className='text-center mt-4'>
//         <h3 className="mt-2 mb-1 text-lg font-semibold text-gray-900">{contact.bookname}</h3>
//         <h3 className="mb-1 text-lg font-semibold text-gray-900">{}</h3>
//         <p className="text-black mb-1 font-semibold">Rs.{contact.bookprice}</p> 
//         </div>   

// <div className='justify-center  flex'>
// <button className=" border-2 border-black hover:border-orange-500 font-medium py-2 mt-2 px-8 rounded-full hover:bg-orange-500 hover:text-white  flex items-center justify-center">
//                 <span>Add to Cart</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 ml-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" />
//                 </svg>
//               </button>
//               </div>
//               </div>

// </div>



// {/* <div className=" mt-20 h-1/2 w-1/4 bg-green-200">
// lalal
// </div>
// <div className=" mt-20 h-1/2 w-1/4 bg-green-200">
// lalal
// </div>
// <div className=" mt-20 h-1/2 w-1/4 bg-green-200">
// lalal
// </div>
// <div className=" mt-20 h-1/2 w-1/4 bg-green-200">
// lalal
// </div> */}


//     </div>
// )}

// )
// }
// </div>
// </div>
// </div>
// );
// }
// export default ShopItems;
import React from 'react'

function ShopItems() {
  return (
    <div>
      erf
    </div>
  )
}

export default ShopItems
