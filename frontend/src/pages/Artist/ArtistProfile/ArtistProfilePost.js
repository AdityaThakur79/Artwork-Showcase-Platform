import React, { useState, useEffect } from 'react'
import ArtistProfileMain from './ArtistProfileMain'
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
const ArtistProfilePost = () => {
    const params = useParams()
    const [artistArtwork, setArtistArtwork] = useState([])
    const { artistId } = params
    const getArtistArtwork = async () => {
        try {
            // const ArtistId = localStorage.getItem('Artist')
            const { data } = await axios.get(`/api/v1/artist/getArtistArtwork/${artistId}`)
            console.log(data?.data)
            setArtistArtwork(data?.data);
            // setInitialArtistArtwork(data?.data?.slice(0, intialNo))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getArtistArtwork() }, [])
    // below is the function for deleting the post
    const DeleteArtistPost = async (postId) => {
        try {
            console.log('delete post clicked')
            const { data } = await axios.delete(`/api/v1/artwork/delete-post/${postId}`)
            console.log(data)
            if (data?.success) {
                toast.success('post deleted successfully')
                window.location.reload()
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ArtistProfileMain>
            <p className='text-start ms-12 mt-4 text-3xl font-bold font-Roboto relative leading-tight'>
                Posts
                <span className='absolute top-5 w-48 left-24 h-[3px] bg-indigo-800'></span>
            </p>
            <div className="flex flex-wrap justify-center mt-10">

                {
                    artistArtwork?.map((art) => (

                        <div key={art._id} className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-3 font-poppins hover:transform hover:scale-110 transition-all duration-300 h-auto">
                            <Link key={art._id} to={`/artwork-info/${art._id}`}>
                                <img src={`/api/v1/artwork/post-photo/${art?._id}`} alt="" className='object-cover h-48 w-64 ' />
                                {/* this is the div for editing and deleting the post */}


                                <div className='text-lg font-bold font-poppins text-black mt-2'>
                                    {art?.name}
                                </div>
                            </Link>
                            <div className='flex justify-between align-center mt-2 px-3 py-3'>
                                <div className='font-bold font-poppins'>
                                    {'Rs  '}{art.price}
                                </div>
                                <div className='flex gap-1 -mt-1'>

                                    <div className='text-red-700 bg-white px-2 py-1 rounded-full ms-auto' style={{ zIndex: '1000' }} onClick={() => DeleteArtistPost(art?._id)}><i class="fa-solid fa-trash"></i></div>
                                    <div className='text-blue-700 bg-white px-2 py-1 rounded-full '><i class="fa-solid fa-pen"></i></div>

                                </div>
                            </div>


                        </div>

                    ))
                }


            </div>
        </ArtistProfileMain>
    )
}

export default ArtistProfilePost
