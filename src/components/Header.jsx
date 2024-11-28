import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Header = () => {
  return (
  <header className='bg-[#F1F1F3]'>
    <div className='container mx-auto pt-5 font-be-vietnam-pro'>
    <div className='py-4  bg-[#FF9500] rounded-md w-11/12 mx-auto'>
    <h4 className='text-center text-lg font-normal leading-7 text-[#FFFFFF] flex items-center gap-3 justify-center'>Free Courses <span className='text-[#FFFFFF]'>🌟</span> Sale Ends Soon, Get It Now 
    <FaArrowRight /></h4>
    </div>
    </div>
  </header>
  
  )
}

export default Header




