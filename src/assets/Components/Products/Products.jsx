import React from 'react'
import Img1 from "../../Images/women/women-eth.jpg"
import Img2 from "../../Images/women/women.jpg"
import Img3 from "../../Images/women/goggles.jpg"
import Img4 from "../../Images/women/printed-t-shirt.jpg"
import Img5 from "../../Images/women/fashion.jpg"
import {FaStar} from "react-icons/fa6"


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200"
    },{
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400"
    },{
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600"
    },{
        id: 5,
        img: Img5,
        title: "Fashin T-Shirt",
        rating: 4.5,
        color: "Pink",
        aosDelay: "800"
    }
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mx-auto max-w-[600px] mb-10'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dignissimos fuga sequi.
                </p>
            </div>
            {/* Body Section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* Card Section */}
                    {
                        ProductsData.map((data)=>(
                            <div
                            data-aos = "fade-up"
                            data-aos-delay = {data.aosDelay}
                            key={data.id} className='space-y-3'>
                                <img className='object-cover rounded-md h-[220px] w-[150px]' src={data.img}/>
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-gray-600 text-sm'>{data.color}</p>
                                    <div className='flex gap-1 items-center'>
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* view all button */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white
                    py-1 px-5 rounded-md'>View All Button</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products