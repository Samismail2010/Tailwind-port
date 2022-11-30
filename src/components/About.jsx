import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#112858] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-9 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-4xl font-bold '>
                        <p>Hi. I'm Sam. Please take a look around</p>
                    </div>
                    <div>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eligendi iste repellat perferendis vitae ratione quasi eos mollitia accusamus ex optio deleniti voluptas soluta, ea autem exercitationem corporis id dolorem.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About