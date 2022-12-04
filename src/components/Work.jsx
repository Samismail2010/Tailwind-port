import React from 'react'
import WorkImg from '../assets/MIT-Evaluating-Performance_0-2.jpg'
import DeepThoughts from '../assets/Deep-Thoughts.png'
import Collab from '../assets/Collab.png'
import FoodFest from '../assets/food-fest.png'
import PizzaHunt from '../assets/pizza-hunt.png'
import Zookeepr from '../assets/zookeeper.png'
import TeamGen from '../assets/TeamGenerator.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#112858]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                <p className='py-6'>Check out some  of my recent work</p>
            </div>

            {/* Container */}
            <div
             className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* Grid Item */}

                <div style={{backgroundImage: `url(${DeepThoughts})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${Collab})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${FoodFest})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${PizzaHunt})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${Zookeepr})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${TeamGen})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Work