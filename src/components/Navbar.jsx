import React from 'react'
import logoimg from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='bg-[#F1F1F3]'>
    <div className="container w-11/12 flex items-center justify-between mx-auto gap-10 font-be-vietnam-pro py-5 px-16 border-b border-[#e6e6e6]">
      <div className='navbar-left flex items-center gap-10'>
        <div className='logo'>
         <img className='bg-[#FF9500] p-2 rounded-lg w-10 h-10' src={logoimg} alt=""/>
        </div>
        <div className='nav-link'>
          <ul className='flex items-center gap-5'>
            <li className='font-normal leading-7 text-lg text-[#262626] bg-[#F1F1F3] py-1 px-3 rounded-md'><Link to='/'>Home</Link></li>
            <li className='font-normal leading-7 text-lg text-[#262626]'>
              <Link to='/courses-open'>Course</Link></li>
            <li className='font-normal leading-7 text-lg text-[#262626]'>
            <Link to='/about-us'>About Us</Link></li>
            <li className='font-normal leading-7 text-lg text-[#262626]'>
            <Link to='/pricing'>Pricing</Link></li>
            <li className='font-normal leading-7 text-lg text-[#262626]'>
            <Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
       </div> 
       <div className='navbar-right '>
             <ul className='sign-up flex items-center gap-10'>
               <li className='font-normal leading-7 text-lg text-[#262626]'>
                <Link to='/sign-up'>Sign Up</Link></li>
               <li className='font-normal leading-7 text-lg text-[#FFFFFF] bg-[#FF9500] py-1 px-3 rounded-md'><Link to='/login'>Login</Link></li>
             </ul>
            
        </div> 
    </div>
     
    </nav>
  )
}

export default Navbar


