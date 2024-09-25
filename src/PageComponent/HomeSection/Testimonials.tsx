import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import React, { useRef } from "react";

import TestimonialCard from "./TestimonialCard";
// import Slider from "react-slick";
import Slider from "react-slick";

function Testimonials() {
  const data = [
    {
      message:
        "In the last few months, the most I have enjoyed about the e learning is its flexibility and convenience. I am able to be a full-time employee as well as a full-time student without any struggles.Abcd is very convenient since you can complete your course syllabus anywhere where there is computer access",
      photo:
        "https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
      color: "#006699",
      name: "Jessika Pun",
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    {
      message:
        "Edutech has helped me to saves alot of my time. If your busy person who have to work as well as learn and level up your skills set, Sikkai is the best platform for your need. I'm enjoying my time with abcd.",
      photo:
        "https://images.unsplash.com/photo-1622038094167-a2e40e21df17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      color: "#da4167",
      name: "Anju Bhandari",
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    {
      message:
        "What eased my fears about the online education is the easy navigation panel on Blackboard as well as the help from course instructors and classmates.",
      photo:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      color: "#87c38f",
      name: "Mahesh Shrestha",
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    {
      message:
        "Talking online classes here at Abcd e-learning platform has been a major benefit to me. As I try to earn and learn through the platform, I have been able to take advantage of several online classes and packages which has allowed me to be home for my family and work on my passive income when I have time.",
      photo:
        "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      color: "#ffcf56",
      name: "Ashish khanal",
      facebook: "",
      twitter: "",
      linkedin: "",
    },
  ];
  const sliderRef = useRef(null);
//  const sliderRef=useRef<Slider | null>(null);

  const sliderSetting = {
    dots: false,
    dotsClass: "slick-dots line-indicator",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <div className=" w-11/12 mx-auto">
      <div className=" flex justify-center pt-10 text-4xl font-bold text-gray-900">
        TESTIMONIALS
      </div>
      <div className="flex justify-center pt-2 font-semibold text-gray-700">
        what our clients has to say...
      </div>

      <div className="sm:grid sm:grid-cols-12 gap-8">
        {/* left section of grid  */}
        {/* <div className="sm:col-span-5 md:col-span-6 bg-black lg:col-span-4"> */}
        {/* <div className="sm:py-24 lg:mx-8 bg-pink-600"> */}
        {/* <p className="text-primary font-semibold">Highly Rated</p> */}
        {/* <h1 className="text-4xl md:text-4xl leading-snug  text-gray-700 tracking-tighter">
          Do not take our word for it. Take{" "}
          <span className="text-primary">theirs...</span>
        </h1> */}

        {/* <div className="flex items-center bg-white justify-end"> */}
        {/* <div className="h-10 w-10 rounded-full p-2 text-white bg-green-600 cursor-pointer transition opacity-90 hover:opacity-100 shoadow-lg text-center">
            <FaAngleLeft
              className="mx-auto text-2xl"
              onClick={() => sliderRef.current.slickPrev()}
            />
          </div> */}
        {/* <div className="h-10 w-10 rounded-full p-2 text-white last:bg-green-600 cursor-pointer transition opacity-90 hover:opacity-100 shoadow-lg text-center cuspi">
            <FaAngleRight
              className="mx-auto text-2xl"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

        {/* right section of grid  */}
        <div className="flex justify-center"></div>
        <div className="flex items-center justify-end ">
          <div className="h-8 w-8 rounded-full p-1 text-white bg-orange-400 cursor-pointer transition opacity-90 hover:opacity-100 shoadow-lg text-center">
            <FaAngleLeft
              className="mx-auto text-2xl "
            //   onClick={() => sliderRef.current.slickPrev()}
            />
          </div>
        </div>
        <div className="sm:col-span-7 md:col-span-6 lg:col-span-8">
          {/* slider section starts  */}
          <div>
            <Slider {...sliderSetting} ref={sliderRef}>
              {data.map((item, i) => (
                <TestimonialCard
                  key={i}
                  name={item.name}
                  message={item.message}
                  photo={item.photo}
                  color={item.color}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="h-8  w-8 rounded-full p-1 text-white last:bg-orange-400 cursor-pointer transition opacity-90 hover:opacity-100 shoadow-lg text-center cuspi">
            <FaAngleRight
              className="mx-auto text-2xl mr-10"
            //   onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>
        {/* slider section ends  */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Testimonials;