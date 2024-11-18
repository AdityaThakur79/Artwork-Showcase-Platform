import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import ContentWrapper from '../../Components/ContentWrapper'
const ArtByCategory = () => {
    const [product, setProduct] = useState([])
    const params = useParams()
    // below is the function for getting all the artwork by category
    const getArt = async () => {
        try {
            const { id } = params
            console.log(id)
            const product = await axios.get(`/api/v1/category/getArtByCategory/${id}`)
            setProduct(product.data.art)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getArt() }, [])
    return (
        <ContentWrapper>
            <div className="flex flex-wrap justify-center mt-20">

                {product.map((item) => (
                    <Link key={item._id} to={`/artwork-info/${item._id}`}>
                        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 font-poppins" key={item._id}>

                            <div className="relative mb-2" >
                                <img className="w-full " src={`/api/v1/artwork/post-photo/${item._id}`} alt="Card image" style={{ height: '200px', width: '300px' }} />
                            </div>

                            <div className="px-6">

                                <p className="text-gray-700 font-bold ms-3">
                                    {item?.name}
                                </p>
                            </div>

                            <div className="px-6 py-3">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    more deatils
                                </button>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </ContentWrapper>
    )
}

export default ArtByCategory
