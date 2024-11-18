import React from 'react'
import ContentWrapper from '../../Components/ContentWrapper'

const About = () => {
    return (
        <ContentWrapper>




            <div className="flex items-center justify-center flex-column mt-16  " >
                <div className='md:w-[700px] mt-20 bg-white drop-shadow-2xl flex justify-center  flex-column p-3 rounded-xl' style={{ height: '50vh' }}>
                    <p className='text-3xl font-extrabold'>Artwork Showcase Platform</p>
                    <div>
                        <div className='text-start text-xl font-bold font-poppins text-gray-600 mt-1 relative'>About Us
                            <span className='absolute bg-green-700 h-[3px] top-3 left-28 w-[140px]'>
                            </span>
                        </div>
                    </div>
                    <p className='text-start text-gray-700 mt-4'>Welcome to our artwork showcase platform, a vibrant digital gallery where artists of all styles and mediums converge. Discover captivating paintings, sculptures, and digital creations curated for your inspiration. Explore diverse perspectives, connect with talented creators, and elevate your space with original artworks. Immerse yourself in a world of creativity, where every piece tells a unique story.</p>
                </div>

            </div>






        </ContentWrapper>
    )
}

export default About
