import React from 'react'
import Img1 from "../../Images/shirt/shirt.png"
import Img2 from "../../Images/shirt/shirt2.png"
import Img3 from "../../Images/shirt/shirt3.png"
import {FaStar} from "react-icons/fa"
const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Causal Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore rerum nesciunt rem sit magni porro ipsum sunt repellat, culpa eaque eos voluptatum nulla illum? Est repudiandae qui numquam tenetur."
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore rerum nesciunt rem sit magni porro ipsum sunt repellat, culpa eaque eos voluptatum nulla illum? Est repudiandae qui numquam tenetur."
    },
    {
        id: 3,
        img: Img3,
        title: "Women Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore rerum nesciunt rem sit magni porro ipsum sunt repellat, culpa eaque eos voluptatum nulla illum? Est repudiandae qui numquam tenetur."
    }
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='container'>
            {/* Header Section */}
            <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dignissimos fuga sequi.
                </p>
            </div>
            {/* Body Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data)=>(
                        <div
                        data-aos="zoom-in"
                        className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                        hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
                        key={data.id}>
                            {/* image section */}
                            <div className='h-[100px]'>
                                <img
                                className='block max-w-[140px] mx-auto
                                transform -translate-y-20 group-hover:scale-105 duration-300
                                drop-shadow-md' src={data.img}/>
                            </div>
                            {/* details section */}
                            <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className='flex gap-1 items-center w-full justify-center'>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300
                                text-sm line-clamp-2'>{data.description}</p>
                                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4
                                rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                onClick={handleOrderPopup}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts