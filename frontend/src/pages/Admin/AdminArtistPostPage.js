import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import ContentWrapper from '../../Components/ContentWrapper'
const AdminArtistPostPage = () => {
    const params = useParams()
    const [artistArtwork, setArtistArtwork] = useState([])
    const getArtistArtwork = async () => {
        try {
            const { artistId } = params

            const { data } = await axios.get(`/api/v1/artist/getArtistArtwork/${artistId}`)
            console.log(data?.data)
            setArtistArtwork(data?.data);

        } catch (error) {
            console.log(error)
        }
    }





    useEffect(() => { getArtistArtwork(); }, [])
    return (
        <ContentWrapper>
            <div>
                <div classname="p-16">



                    <p className='text-center text-3xl mt-20 font-medium font-roboto text-indigo-700 uppercase'>
                        Posts
                    </p>
                    <div className="flex flex-wrap justify-center mt-10">

                        {
                            artistArtwork?.map((art) => (
                                <Link key={art._id} to={`/artwork-info/${art._id}`}>
                                    <div key={art._id} className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 font-poppins hover:transform hover:scale-110 transition-all duration-300">
                                        <div className="relative mb-2">
                                            <img src={`/api/v1/artwork/post-photo/${art?._id}`} alt="" className='w-full' style={{ height: '200px', width: '300px' }} />
                                        </div>
                                        <div className="px-2 py-6">
                                            <p className="font-bold ms-3">
                                                <span className='text-indigo-700 text-[1.3rem]'>{art?.name}</span>
                                            </p>

                                        </div>
                                    </div>
                                </Link>
                            ))
                        }


                    </div>


                </div>

            </div>
        </ContentWrapper>



    )
}

export default AdminArtistPostPage
