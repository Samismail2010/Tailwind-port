import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const onButtonClick = () => {
        fetch('Resume2022.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume2022.pdf';
                alink.click();
            })
        })
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#112858]
    text-slate-300'>
        <div>
            
        </div>
        {/* Menu */}
            <ul className='hidden md:flex'>
            <li><Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li><Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li><Link to="skills" smooth={true}  duration={500}>
                    Skills
                </Link>
            </li>
            <li><Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li><Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            <li>
                <button onClick={onButtonClick} type="submit" className='bg-pink-600 hover:bg-pink-500 font-bold rounded px-4 mx-auto flex items-center'> Download Resume</button>
            </li>
            </ul>
       
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
       <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#112858] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
            </Link></li>
        <li className='py-6 text-3xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
            </Link></li>
        <li className='py-6 text-3xl'>
            <Link onClick={handleClick} to="skills" smooth={true}  duration={500}>
                    Skills
            </Link></li>
        <li className='py-6 text-3xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
            </Link></li>
        <li className='py-6 text-3xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
            </Link></li>
        <li className='py-6 text-3xl'>
           <button onClick={onButtonClick} type="submit" className='bg-pink-600 hover:bg-pink-500 font-bold rounded px-4 mx-auto flex items-center'> Download Resume </button>
        </li>
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