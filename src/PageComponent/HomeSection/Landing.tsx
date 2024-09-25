// import './Landing.css'
// import land from '../../asset/brand/men2.png'
import candle2 from '../../Resources/candle2.jpg'
import { Link } from "react-router-dom"
import { Button } from '@mui/material';

const Landing = () => {
    return ( 
        <div className=" w-11/12 mx-auto h-72 flex justify-center items-center ">
            <div className=" h-full w-full bg-orange-400 rounded-3xl hover:scale-105 transiton-all 
      cursor-pointer ease-in-out duration-700 delay-100 ">
                <div className=" h-full w-full  mx-auto flex flex-col justify-center items-center">
                    <h3 className=" text-2xl text-left  px-6">UP TO 15% DISCOUNT</h3>
                    <h1 className="text-5xl font-bold py-4 mb-6">Checkout The Best Variety Of Books</h1>
                    <Link to="/shop">
                    
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>SHOP NOW</Button>
                    </Link>
                </div>
            </div>
            {/* <div className=" w-full h-full flex justify-center items-center bg-green-400">
                <img className="h-full w-full z-10" src={candle2} alt=""/>
            </div> */}
        </div>
     );
}
 
export default Landing;