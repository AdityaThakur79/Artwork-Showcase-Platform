import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const ShopCategory = () => {
    // with the help of below function will be getting all categories
    const [category, setCategory] = useState([])
    const getAllcategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/getAllCategory')
            if (data?.success) {
                setCategory(data?.data)
            }
        } catch (error) {
            toast.error('something went wrong')
        }
    }
    useEffect(() => { getAllcategory() }, [])
    return (
        <>
            <div className='max-w-[1320px] md:py-[80] py-5 mx-auto'>
                <h1 className='text-4xl text-center text-indigo-700 font-extrabold font-ubuntu'>Current categories</h1>
            </div>

            <div className='max-w-[1200px] gap-6 mx-auto grid py-[50px] lg:grid-cols-4 sm:grid-cols-2 '>
                {category && category.map((item) => (
                    <Link to={`/category-arts/${item?._id}`}>
                        <div className="hover:drop-shadow-lg hover:transform hover:scale-110 s p-4 text-center bg-indigo-50 rounded-3xl trasnition-all duration-300 transition-ease-in-out ">
                            <h3 className='text-xl py-2 text-indigo-700 font-poppins font-extrabold '>{item.keyword}</h3>
                            <div>
                                <p className='font-poppins'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minus corrupti fugit?</p>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>


        </>
    )
}

export default ShopCategory
