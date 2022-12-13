import React from 'react'
import WorkImg from '../assets/MIT-Evaluating-Performance_0-2.jpg'
import DeepThoughts from '../assets/Deep-Thoughts.png'
import Collab from '../assets/Collab.png'
import Portfolio from '../assets/Portfolio.png'
import PizzaHunt from '../assets/pizza-hunt.png'
import Zookeepr from '../assets/zookeeper.png'
import TeamGen from '../assets/TeamGenerator.png'

const Work = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#112858]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
                <p className='py-6'>Check out some  of my recent work</p>
            </div>

            {/* Container */}
            <div
             className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* Grid Item */}

                <div style={{backgroundImage: `url(${DeepThoughts})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl justify-center font-bold text-white tracking-wider">
                        <h2>"Deep Thoughts"</h2>
                        MERN App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://bejewelled-pony-9b7b2c.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="https://github.com/Samismail2010/deep-thoughts">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${Collab})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                            <h2>"Dougie Deliveries"</h2>
                        MERN App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://dougie-deliveries2022.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="https://github.com/TaylorH07/dougie-deliveries">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${Portfolio})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        <h2>"React Portfolio"</h2>
                        MERN App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://zippy-salmiakki-b7a40e.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="https://github.com/Samismail2010/portfolio">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${PizzaHunt})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        <h2>"Pizza-Hunt</h2>
                        React Js App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://happy-hen-outerwear.cyclic.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="https://github.com/Samismail2010/pizza-hunt">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${Zookeepr})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 ease-in duration-500'>
                        <span className="text-2xl font-bold text-white tracking-wider">
                        <h2>"Zoo-Keepr</h2>
                        Web App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://real-tan-reindeer-wear.cyclic.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                            </a>
                            <a href="https://github.com/Samismail2010/ZooKeepr">
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
                            <a href="https://github.com/Samismail2010/Team-Profile-Generator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
                <p className='py-8 text-red-600 font-bold'> * Disclaimer: Some apps cannot be demoed due to the apps being deployed on Heroku. I am current seeking an alternative *</p>
        </div>
    </div>
  )
}

export default Work