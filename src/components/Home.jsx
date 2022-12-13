import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#112858]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sam Ismail</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack Developer</h2>
            <p className='text-[#ffffff] py-4 max-w-[700px]'>I am passionate about creating interactive applications and awesome experiences on the web</p>

            <div><Link to="projects" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center
                 hover:bg-pink-600 hover:border-pink-600'> View Projects 
                 <span className='group-hover:rotate-90 duration-300'>
                 <HiArrowNarrowRight className='ml-3'/>
                 </span>
                 </button>
                 </Link>
            </div>

        </div>

    </div>
  )
}

export default Home