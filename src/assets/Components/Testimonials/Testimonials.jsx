import React from 'react'
import Slider from "react-slick"

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quo corrupti magnam, nemo accusantium minima ea exercitationem? Nemo adipisci expedita, vero illo velit, eos sunt delectus quis omnis, quos blanditiis.",
    img: "https://picsum.photos/101/101"
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quo corrupti magnam, nemo accusantium minima ea exercitationem? Nemo adipisci expedita, vero illo velit, eos sunt delectus quis omnis, quos blanditiis.",
    img: "https://picsum.photos/102/102"
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quo corrupti magnam, nemo accusantium minima ea exercitationem? Nemo adipisci expedita, vero illo velit, eos sunt delectus quis omnis, quos blanditiis.",
    img: "https://picsum.photos/103/103"
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quo corrupti magnam, nemo accusantium minima ea exercitationem? Nemo adipisci expedita, vero illo velit, eos sunt delectus quis omnis, quos blanditiis.",
    img: "https://picsum.photos/104/104"
  }
]

const Testimonials = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

  return (
    <div className='py-10 mb-10'>
        <div className='container'>
          {/* Header Section */}
          <div className='text-center mx-auto max-w-[600px] mb-10'>
                <p data-aos="fade-up" className='text-sm text-primary'>What Our Customers Are Saying</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonial</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dignissimos fuga sequi.
                </p>
          </div>
          {/* Testimonial cards */}
          <div data-aos="zoom-in">
          <Slider {...settings}>
            {
              TestimonialData.map((data)=> (
                <div className='my-6'>
                  <div key={data.id}
                  className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 dark:bg-gray-800
                  relative'>
                    <div className='mb-4'>
                      <img src={data.img} className='w-20 h-20 rounded-full'/>
                    </div>
                    <div className='flex flex-col gap-4 items-center'>
                      <div className='space-y-3'>
                        <p className='text-xs text-gray-400'>{data.text}</p>
                        <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                      </div>
                    </div>
                    <p className='text-9xl text-black/20 font-serif absolute top-0 right-0'>,,</p>
                  </div>
                </div>
              ))
            }
          </Slider>
          </div>
        </div>
    </div>
  )
}

export default Testimonials