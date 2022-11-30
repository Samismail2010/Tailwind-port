import React from 'react'
import HTML from '../assets/html.png'
import Java from '../assets/Java-Logo.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Mongodb from '../assets/58481021cef1014c0b5e494b.png'
import Node from '../assets/node.png'
import API from '../assets/api.png'
import Graphql from '../assets/graphql.png'


const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#112858] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>Procficent Technologies</p>
            </div>
            {/* Container for all icons */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto py-4" src={Java} alt="HTML icon" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto " src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>React.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Mongodb} alt="HTML icon" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={API} alt="HTML icon" />
                    <p className='my-4'>RESTful API</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Graphql} alt="HTML icon" />
                    <p className='my-4'>Graphql</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills