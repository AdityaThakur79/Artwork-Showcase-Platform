import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFlip } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


const TrendingArtwork = () => {
    const [allarts, setAllarts] = useState([])

    // below is the function for getting all the artwork
    const getArts = async () => {
        try {
            const arts = await axios.get('/api/v1/artwork/get-post');
            setAllarts(arts?.data?.post)
            // console.log(arts?.data?.post)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getArts() }, [])
    const slice = allarts?.slice(0, 6)
    // console.log('slice is', slice)
    return (
        <>
            <div className='max-w-[1320px] md:py-[80] py-5 mx-auto'>
                <h1 className='text-4xl text-center text-indigo-700 font-extrabold font-ubuntu'>Trending Arts</h1>
            </div>


            <div className="flex flex-wrap justify-center ">

                <Swiper
                    // install Swiper modules

                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                    effect='coverflow'
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        520: {
                            slidesPerView: 2,

                        },
                        1000: {
                            slidesPerView: 3,

                        }
                    }}
                >

                    {slice.map((item) => (
                        <SwiperSlide className='mb-4'>
                            <Link key={item._id} to={`/artwork-info/${item._id}`}>
                                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 font-poppins" key={item._id}>

                                    <div className="relative mb-2" >
                                        <img className="w-full " src={`/api/v1/artwork/post-photo/${item._id}`} alt="Card image" style={{ height: '200px', width: '100%' }} />
                                    </div>

                                    <div className="px-6">

                                        <p className=" font-bold ms-3">
                                            <span className='font-roboto text-indigo-700 text-[1.3rem]'> {item?.name}</span>
                                        </p>
                                    </div>

                                    <div className="px-6 py-3">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full font-roboto">
                                            more deatils
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </>
    )
}

export default TrendingArtwork


