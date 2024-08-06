import React from 'react'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className='mt-[125px]' style={{ minHeight: '82vh' }}>
            <div className='container flex flex-wrap items-center justify-center mx-auto  md:flex lg:max-w-full'>
                <div className="mb-14 lg:mb-0 lg:w-1/2  lg:max-w-full lg:flex flex-col lg:items-center">
                    <div className='lg:flex flex-col lg:justify-center lg:items-center'>
                        <h1 className='max-w-xl text-[2.9rem] leading-none text-indigo-700 font-semibold text-center lg:text-left lg:leading-tight mb-5 lg:text-5xl text-tight font-pacifco'>Artwork Showcase platform</h1>
                        <p className='max-w-xl text-center text-gray-600 lg:text-left font-semibold lg:max-w-md font-roboto leading-l1 lg:text-[1.3rem] mb-2'>
                            Showcasing Talent on Atwork, the Premier Creative Platform !
                        </p>
                        <p className='max-w-xl text-center text-gray-600 lg:text-left font-semibold lg:max-w-md font-roboto leading-l1 lg:text-[1.3rem] mb-2'>
                            Explore the Best of Artistic Expression on <span className='lg:text-[1.8rem] font-pacifco text-indigo-800 font-light'>Atwork Showcase Platform!</span>
                        </p>
                        <div className="flex justify-center mt-10 lg:text-center">
                            <button type='button' className='text-white bg-indigo-700 font-mdeium rounded-lg px-4 py-2 hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out font-roboto' onClick={() => { navigate('/artwork') }}>Explore Now</button>
                            <button type='button' className='ml-4 text-gray-700 bg-gray-200 font-mdeium rounded-lg px-4 py-2 hover:bg-gray-300 hover:drop-shadow-md transition duration-300 ease-in-out font-roboto font-semibold'>Learn More</button>
                        </div>
                    </div>

                </div>
                <div className='lg:w-1/2 bg-indigo-50 lg:py-20 rounded-full'>
                    <img className=' lg:w-[400px] mx-auto rounded-xl opacity-90' src={require('../images/banner.jpg')} alt="hero-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero
