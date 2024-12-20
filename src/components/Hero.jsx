import React from 'react'
import { Link } from 'react-router-dom'
import iconimg from "../assets/Icon.png"
import lineimg from "../assets/Abstractline.png"
import zaimg from "../assets/zapier.png"
import spoimg from "../assets/spotify.png"
import zooimg from "../assets/zoom.png"
import amaimg from "../assets/amazon.png"
import adoimg from "../assets/adobe.png"
import notimg from "../assets/notion.png"
import netimg from "../assets/netflix.png"

const Hero = () => {
  return (
    <section className='bg-[#F1F1F3]'>
     <div className='container font-be-vietnam-pro mx-auto'>
       <div className='pt-20 pb-16 h-auto mx-auto'>
        <div>
        <div className='text-center relative'>
       <img className='w-9 h-10 absolute -top-8 left-48' 
       src={lineimg} alt=""/>
       <div className='flex items-center mx-auto w-[65%] py-3 bg-slate-50  justify-center rounded-lg'>
       <img className='bg-[#FFF4E5] p-2 rounded-lg w-12 h-12 mr-3' 
       src={iconimg} alt=""/>
       <h1 className='text-5xl font-medium  leading-[72px] items-center  
       text-[#1A1A1A] rounded-md'>
      <span className=' text-[#FF9500] mr-2'>Unlock</span>Your Creative Potential</h1>
      </div>
      <h2 className='text-4xl font-medium leading-[57px] text-[#262626] mt-5'>with Online Design and Development Courses.</h2>
        <p className='text-lg font-normal leading-7'>Learn from Industry Experts and Enhance Your Skills.</p>
      </div>
       <div className='explore-link flex gap-5 items-center justify-center mt-16 text-lg font-semibold leading-7'>
        <div ><Link className='bg-[#FF9500] text-[#FFFFFF] py-4 px-6 rounded-md'>Explore Courses</Link></div>
        <div><Link className=' bg-[#FCFCFD]   py-4 px-6 rounded-md  text-[#262626]'>View Pricing</Link></div>
       </div>
        </div>
      <div className='flex items-center w-10/12 py-7 px-10 mt-20 bg-[#FCFCFD] rounded-lg mx-auto justify-evenly'>
      <img className="w-18  h-6  pr-5  border-r-2 border-[#e6e6e6]" src={zaimg} alt="" />
      <img  className="w-20 h-5  pr-5  border-r-2 border-[#e6e6e6] "src={spoimg} alt="" />
      <img className="w-16  h-3  pr-5  border-r-2 border-[#e6e6e6]" src={zooimg} alt="" />
      <img className="w-20  h-3  pr-5  border-r-2 border-[#e6e6e6]" src={amaimg} alt="" />
      <img className="w-20  h-6  pr-5  border-r-2 border-[#e6e6e6] " src={adoimg} alt="" />
      <img className="w-20  h-6  pr-5  border-r-2 border-[#e6e6e6]" src={notimg} alt="" />
      <img className="w-20  h-3  pr-5  border-r-2  border-[#e6e6e6]" src={netimg} alt="" />
      </div>
       </div>
     </div>
   </section>
  )
} 

export default Hero



