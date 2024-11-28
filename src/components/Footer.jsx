import React from 'react'
import foimg from "../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className='bg-[#FCFCFD]'>
        <div className='container font-be-vietnam-pro'>
         <div className='flex w-10/12 justify-between mx-auto py-10  border-b border-[#e6e6e6]'>
         <div className='single-item'>
            <img className='bg-[#FF9500] p-2 rounded-lg w-10 h-10 mb-10'src={foimg} alt="" />
           <p className='font-normal leading-7 text-lg text-[#262626] items-center flex  gap-2'>
           <IoMdMail />hello@skillbridge.com</p>
           <p className='font-normal leading-7 text-lg text-[#262626] items-center flex  gap-2'>
           <IoCall />+91 91813 23 2309</p>
           <p className='font-normal leading-7 text-lg text-[#262626] items-center flex gap-2'>
           <FaLocationDot />Somewhere in the World</p>
         </div>
         <div className='single-item'>
           <h6 className='text-xl font-semibold leading-8 text-[#262626] mb-3'>Home</h6>
           <p className='font-normal leading-7 text-lg text-[#59595A]'>Benefits</p>
           <p className='font-normal leading-7 text-lg text-[#59595A]'>Our Courses</p>
           <p className='font-normal leading-7 text-lg text-[#59595A]'>Our Testimonials</p>
           <p className='font-normal leading-7 text-lg text-[#59595A]'>Our FAQ</p>
         </div>
         <div className='single-item'>
           <h6 className='text-xl font-semibold leading-8 text-[#59595A] mb-3'>About Us</h6>
           <p className='font-normal leading-7 text-lg text-[#59595A]'>Company</p>
           <p className='font-normal leading-7 text-lg text-[#59595A]'>Achievements</p>
           <p className='font-normal leading-7 text-lg text-[#59595A]'>Our Goals</p>
           </div>
         <div className='single-item'>
           <h6 className='text-xl font-semibold leading-8 text-[#59595A] mb-3'>Social Profiles</h6>
            <div className='social-icons flex gap-3'>
             <span className='bg-[#F1F1F3] p-3 rounded-md inline-flex items-center justify-center text-[#333333] text-lg' ><FaFacebook/></span>
             <span className='bg-[#F1F1F3] p-3 rounded-md inline-flex items-center justify-center text-[#333333] text-lg' ><FaTwitter /></span>
             <span className='bg-[#F1F1F3] p-3 rounded-md inline-flex items-center justify-center text-[#333333] text-lg' ><IoLogoLinkedin /></span>
          </div>
           </div>
         </div>
         <div> 
       <p className='font-normal leading-7 text-lg text-[#59595A] text-center pt-8 pb-6'> © 2023 Skillbridge. All rights reserved.</p>
        </div>
        </div>
       
    </footer>
  )
}

export default Footer


