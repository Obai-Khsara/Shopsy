import React from 'react'
import footerLogo from "../../Images/logo.png"
import Banner from "../../Images/website/footer-pattern.jpg"
import { FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { CiLocationArrow1 } from "react-icons/ci";
import { BiMobileAlt } from "react-icons/bi";


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    }
]

const Footer = () => {
  return (
    <div className='text-white' style={BannerImg}>
        <div className='container'>
            <div
            data-aos="zoom-in"
            className='grid md:grid-cols-3 pt-5 pb-44'>
                {/* Company Details */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        <img src={footerLogo} className='max-w-[50px]'/>
                        Shopsy
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Atque maxime nesciunt consequuntur unde nostrum tempora.
                    </p>
                </div>
                {/* Footer Links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1  className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                                Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li key={link.title} className='cursor-pointer hover:text-primary
                                        hover:translate-x-1 duration-300 text-gray-200'>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='py-8 px-4'>
                            <h1  className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                                Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li key={link.title} className='cursor-pointer hover:text-primary
                                        hover:translate-x-1 duration-300 text-gray-200'>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <CiLocationArrow1 />
                                <p>Noida, Uttra Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <BiMobileAlt />
                                <p>+961 0123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer