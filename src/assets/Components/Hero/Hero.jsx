import React from 'react'
import Image1 from "../../Images/hero/50.png"
// import Image2 from "../../Images/hero/shopping.png"
import Image2 from "../../Images/hero/30.png"
import Image3 from "../../Images/hero/sale.png"
import Slider from "react-slick"

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Up to 50% off on all men's wear",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet, sed saepe officiis provident hic repellendus assumenda modi.Maxime tempora sapiente a illo commodi suscipit quasi quo quas officia optio."
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all women's wear",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet, sed saepe officiis provident hic repellendus assumenda modi.Maxime tempora sapiente a illo commodi suscipit quasi quo quas officia optio."
    },
    {
        id: 3,
        img: Image3,
        title: "Up to 70% off on all products's sale",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet, sed saepe officiis provident hic repellendus assumenda modi.Maxime tempora sapiente a illo commodi suscipit quasi quo quas officia optio."
    }
]
const Hero = ({handleOrderPopup}) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToscroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
        </div>
        {/* hero section */}
        <div className='sm:pb-0 pb-8 container'>
            <Slider {...settings}>
                {ImageList.map((data)=>(
                    <div key={data.id}>
                        <div className='grid sm:grid-cols-2 grid-cols-1'>
                            {/* text content section */}
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0
                            text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className='sm:text-6xl text-5xl lg:text-7xl font-bold'>{data.title}</h1>
                                <p
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className='text-sm'>{data.description}</p>
                                <div
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="300"
                                >
                                    <button className='bg-gradient-to-r from-primary to-secondary
                                    hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                                    onClick={handleOrderPopup}>Order Now</button>
                                </div>
                            </div>
                            {/* image section */}
                            <div className='order-1 sm:order-2'>
                                <div
                                data-aos="zoom-in"
                                data-aos-once="true"
                                className='relative z-10'>
                                    <img className='sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain
                                    w-[300px] h-[300px] mx-auto lg:scale-120' src={data.img}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            
            </Slider>
        </div>
    </div>
  )
}

export default Hero