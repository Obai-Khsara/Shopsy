import React, { useEffect, useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Products from './assets/Components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './assets/Components/TopProducts/TopProducts'
import Banner from './assets/Components/Banner/Banner'
import Subscribe from './assets/Components/Subscribe/Subscribe'
import Testimonials from './assets/Components/Testimonials/Testimonials'
import Footer from './assets/Components/Footer/Footer'
import Popup from './assets/Components/Popup/Popup'

const App = () => {

  const [orderPopup, setOrderPopup] = useState(false)


  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    })
    AOS.refresh()
  }, [])
  
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App