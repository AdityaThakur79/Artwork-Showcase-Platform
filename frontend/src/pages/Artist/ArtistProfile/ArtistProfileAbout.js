import React, { useState, useEffect } from 'react'
import ArtistProfileMain from './ArtistProfileMain'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ArtistProfileAbout = () => {
    const [artistInfo, setArtistInfo] = useState()
    const params = useParams()
    const getArtistDetails = async () => {
        try {
            const { artistId } = params
            const { data } = await axios.get(`/api/v1/artist/getArtistDetails/${artistId}`)
            // console.log(data)
            setArtistInfo(data?.artist)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getArtistDetails() }, [])
    return (
        <ArtistProfileMain>
            <div className='text-start ms-12 mt-4'>
                <div>
                    <div>
                        <p className='text-3xl font-extrabold font-roboto leading-tight relative'>About Me
                            <span className='absolute top-5 left-36  bg-red-600 w-48 h-[3px]'></span></p>
                        <p className='mt-3 text-gray-700 text-md font-poppins'>{artistInfo?.description}
                        </p>
                    </div>

                    <div>
                        <p className='text-2xl font-bold font-roboto leading-tight relative mt-8'>What I Do!
                        </p>
                        <p className='mt-3 text-gray-700 text-md font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet eos dolorem nam, esse facere rerum quidem quos iusto officiis!
                        </p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold font-roboto leading-tight relative mt-8'>Achievements
                        </p>
                        <p className='mt-3 text-gray-700 text-md font-poppins'>{artistInfo?.achievement.join(' , ')}
                        </p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold font-roboto leading-tight relative mt-8'>Past Events
                        </p>
                        <p className='mt-3 text-gray-700 text-md font-poppins'>{artistInfo?.event}
                        </p>
                    </div>
                </div>

            </div>
        </ArtistProfileMain>
    )
}

export default ArtistProfileAbout
