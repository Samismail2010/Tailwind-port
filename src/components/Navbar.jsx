import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from '../assets/si logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#112858]
    text-slate-300'>
        <div>
            
        </div>
        {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
       
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
       <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#112858] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl'>Home</li>
        <li className='py-6 text-3xl'>About</li>
        <li className='py-6 text-3xl'>Skills</li>
        <li className='py-6 text-3xl'>Work</li>
        <li className='py-6 text-3xl'>Contact</li>
        <li className='py-6 text-3xl'>Resume</li>
       </ul>

       {/* Social icon */}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-700'>
                <a className='flex justify-between items-center w-full text-slate-300'
                href="/">
                  LinkedIn <FaLinkedin size={30}/>  
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-700'>
                <a className='flex justify-between items-center w-full text-slate-300' 
                href="/">
                  Github <FaGithub size={30}/>  
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500'>
                <a className='flex justify-between items-center w-full text-slate-300'
                 href="/">
                  Resume <BsFillPersonLinesFill size={30}/>  
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
                <a className='flex justify-between items-center w-full text-slate-300'
                 href="/">
                  Email <HiOutlineMail size={30}/>  
                </a>
            </li>
        </ul>

       </div>

    </div>
  )
}

export default Navbar