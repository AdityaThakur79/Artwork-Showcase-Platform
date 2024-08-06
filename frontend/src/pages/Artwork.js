import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import ContentWrapper from '../Components/ContentWrapper'
import { useCart } from '../Context/cart'

const Artwork = () => {
    const [cart, setCart] = useCart()
    const [post, setPost] = useState([])
    const location = useLocation()
    const artistId = localStorage.getItem('Artist')
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const getAllPost = async () => {
        try {
            const { data } = await axios.get('/api/v1/artwork/get-post')
            if (data?.success) {
                setPost(data?.post)
                console.log(data?.post)
                // toast.success(data?.message)

            }

        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }

    useEffect(() => { getAllPost() }, [])

    const addToCart = async (item) => {
        try {
            console.log('cart button clicked')
            const { data } = await axios.post('/api/v1/artist/artistAddcart', { artistId: artistId, item: item })
            if (data?.success) {
                toast.success('Item Added to the cart')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        //   here we will be fetching all the artworks
        <ContentWrapper>
            <div className="flex flex-wrap justify-center mt-20">

                {post.map((item) => (

                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 font-poppins hover:transform hover:scale-110 transition-all duration-300" key={item._id}>
                        <Link key={item._id} to={`/artwork-info/${item._id}`}>
                            <div className="relative mb-2" >
                                <img className="w-full " src={`/api/v1/artwork/post-photo/${item._id}`} alt="Card image" style={{ height: '200px', width: '300px' }} />
                            </div>
                        </Link>
                        <div className=' px-2'>
                            <div className="ms-2">

                                <p className=" font-bold ">
                                    <span className='font-roboto text-indigo-700 text-[1.3rem]'> {item?.name}</span>
                                </p>
                            </div>

                        </div>
                        <div className='ms-3'>
                            <p className='font-bold font-roboto text-lg'>{'Rs '}{item?.price}</p>
                        </div>

                        <div className="flex justify-between px-2 mt-2 mb-3">
                            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg font-roboto ">
                                more deatils <span className='ms-1 text-white' onClick={() => navigate(`/artwork-info/${item._id}`)}><i class="fa-solid fa-arrow-right"></i></span>
                            </button>
                            {(artistId !== item?.artist) ? (<button className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg font-roboto' onClick={() => { addToCart(item) }}>cart
                                <span className='text-white ms-1'><i class="fa-solid fa-cart-shopping"></i></span></button>) : (<button className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg font-roboto' >Creator
                                </button>)}
                        </div>
                    </div>


                ))}
            </div>


        </ContentWrapper >
    )
}

export default Artwork
