import React, { useState, useEffect } from 'react'
// this page will be showing the post additional info
import axios from 'axios'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import ContentWrapper from '../Components/ContentWrapper'
const ArtworkInfoPage = () => {
    const artistId = localStorage.getItem('Artist')
    const params = useParams()
    const [info, setInfo] = useState({})
    const [artist, setArtist] = useState('')
    const [category, setCategory] = useState('')
    const [data, setData] = useState(null)
    const getPostDetails = async () => {
        try {
            const { pid } = params
            const { data } = await axios.get(`/api/v1/artwork/get-single-post/${pid}`)
            setData(data?.post?.artist)
            setInfo(data?.post)
            getArtist(data?.post?.artist)
            getCategoryDetails(data?.post?.category?._id)
            // console.log(data?.post?.category?._id)

        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }
    // here now we need to get the deatils of the artist and the catgeory
    const getArtist = async (artist) => {
        try {
            // console.log('this is artist', artist)
            const { data } = await axios.get(`/api/v1/artist/getArtistDetails/${artist}`)
            setArtist(data?.artist)

        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }

    const getCategoryDetails = async (categoryid) => {
        try {
            // console.log('this is artist', artist)
            const { data } = await axios.get(`/api/v1/category/getSingleCategory/${categoryid}`)
            setCategory(data?.data?.keyword)

        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }
    useEffect(() => { getPostDetails() }, [])
    return (<ContentWrapper>
        <div className=' dark:bg-gray-800 py-8 font-roboto mt-10'>
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 px-4">
                <div className="flex flex-col md-flex-row -mx-4">
                    <div className="md-flex-1 px-4">
                        <div className='h-[460px] rounded-lg  w-auto dark:bg-gray-700 mb-4'>
                            <img src={`/api/v1/artwork/post-photo/${info?._id}`} className='w-full h-full object-contain' alt="" />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                {(artistId !== data) ? (<button className='w-full bg-indigo-800 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 dark:hover:bg-gray-700'>Add to Cart</button>) : (<button className='w-full bg-indigo-800 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 dark:hover:bg-gray-700'>Your Artwork</button>)}

                            </div>
                            <div class="w-1/2 px-2">
                                {(artistId !== data) ? (<button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>) : (<button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Edit</button>)}

                            </div>
                        </div>
                    </div>

                    <div className="md:flex-1 px-4">
                        <h2 className='text-2xl font-bold dark:text-white mb-2'><span className='font-bold text-lg text-indigo-600 lg:text-[1.6rem]'>Post name</span>: <span className='font-pacifco font-extralight'>{info?.name}</span></h2>
                        <p className='dark:text-gray-300s  text-sm  md:text-lg  mb-4'>
                            <span className='font-bold text-lg text-indigo-600 lg:text-[1.4rem]'>Description </span>:{info?.description}
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className='font-bold text-lg   dark:text-gray-400 mr-6'><span className='font-bold text-lg text-indigo-600 lg:text-[1.4rem]'>Artist</span>:{" "} <span className='text-[1.7rem] font-pacifco font-extralight'>{artist?.name}</span></span>
                                <span className='font-bold text-lg  dark:text-gray-300 mr-6'><span className='font-bold text-lg text-indigo-600 lg:text-[1.4rem]' >category-type</span>:{" "} <span className='text-[1.4rem] font-roboto'>{category}</span></span>
                            </div>
                        </div>

                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className='font-bold text-lg  dark:text-gray-300 mr-6'><span className='font-bold text-lg text-indigo-600 lg:text-[1.4rem]'>Price</span>:{" "} RS {" "} <span className='text-[1.4rem] font-roboto'>{info?.price}</span></span>
                                <span className='font-bold text-lg dark:text-gray-300 mr-6'><span className='font-bold text-lg text-indigo-600 lg:text-[1.4rem]'>Dimension</span>:{" "} <span className='text-[1.4rem] font-roboto'>{info?.dimension}</span></span>
                            </div>
                        </div>
                        <div className="flex-mb-4">
                            <div className="mr-4">
                                <span className='font-bold text-lg  dark:text-gray-300'><span className='font-bold text-lg text-indigo-600 lg:text-[1.4rem]'>Shipping Details</span>:{" "} <span className='text-[1.4rem] font-roboto'>{info?.shippingDetails}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>


    )
}

export default ArtworkInfoPage
