import React from 'react'
import Banner from "../../Images/website/orange-pattern.jpg"


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}

const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={BannerImg}>
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='sm:text-4xl sm:text-left text-2xl text-center font-semibold'>Get Notified About New Products</h1>
                <input className='w-full p-3 focus:outline-none text-black' data-aos="fade-up" placeholder='Enter Your Email'/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe