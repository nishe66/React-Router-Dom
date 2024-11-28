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
        <div className=''>
        <div className='text-center'>
       <img className='line-img w-9 h-10 absolute top-52 left-96' 
       src={lineimg} alt=""/>
       <div className='flex items-center w-[55%] mx-auto py-2 bg-[#FCFCFD] justify-center rounded-lg'>
       <img className='bg-[#FFF4E5] p-2 rounded-lg w-12 h-12 mr-3' 
       src={iconimg} alt=""/>
       <h1 className='text-5xl font-medium leading-[72px] items-center relative inline-block  text-[#1A1A1A] rounded-md'>
      <span className=' text-[#FF9500] mr-2'>Unlock</span>Your Creative Potential</h1>
      </div>
      <h2 className='text-4xl font-medium leading-[57px] text-[#262626] mt-5'>with Online Design and Development Courses.</h2>
        <p className='text-lg font-normal leading-7'>Learn from Industry Experts and Enhance Your Skills.</p>
      </div>
       <div className='explore-link flex gap-5 items-center justify-center mt-16 text-lg font-semibold leading-7'>
        <div ><Link className='bg-[#FF9500] text-[#FFFFFF] py-5 px-8 rounded-md'>Explore Courses</Link></div>
        <div><Link className=' bg-[#FCFCFD]  py-5 px-8 rounded-md  text-[#262626]'>View Pricing</Link></div>
       </div>
        </div>
      <div className='flex items-center w-[60%] py-8 mt-20 bg-[#FCFCFD] rounded-lg mx-auto justify-evenly'>
      <img className="w-16  h-8  pr-5  border-r-2 border-[#e6e6e6]" src={zaimg} alt="" />
      <img  className="w-16 h-6  pr-5  border-r-2 border-[#e6e6e6] "src={spoimg} alt="" />
      <img className="w-12  h-4  pr-5  border-r-2 border-[#e6e6e6]" src={zooimg} alt="" />
      <img className="w-16  h-4  pr-5  border-r-2 border-[#e6e6e6]" src={amaimg} alt="" />
      <img className="w-16  h-7  pr-5  border-r-2 border-[#e6e6e6] " src={adoimg} alt="" />
      <img className="w-16  h-8  pr-5  border-r-2 border-[#e6e6e6]" src={notimg} alt="" />
      <img className="w-16  h-4  pr-5  border-r-2  border-[#e6e6e6]" src={netimg} alt="" />
      </div>
       </div>
     </div>
    </section>
  )
} 

export default Hero



