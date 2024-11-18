import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import ContentWrapper from '../../Components/ContentWrapper'
const Category = () => {
    const [cards, setCards] = useState([])
    // below function if for getting all cards
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/getAllCategory')

            if (data?.success) {
                toast.success(data?.message)
                setCards(data?.data)
                console.log(cards)
            }
        } catch (error) {
            console.log(error)
            // toast.error('something went wrong')
        }
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    const handleDelete = async (cardId) => {
        try {
            const { data } = await axios.delete(`/api/v1/category/deleteCategory/${cardId}`)
            if (data.success) {
                toast.success(data.message)
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
            // toast.error('something went wrong')
        }
    }

    const handleUpdate = async (cardId) => {
        try {
            let userInput = prompt('Enter the category name')
            userInput = String(userInput)
            const { data } = await axios.put(`/api/v1/category/update-category/${cardId}`, { name: userInput })
            if (data?.success) {
                toast.success(data.message)
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
            // toast.error('something went wrong')
        }
    }

    const handleCreate = async () => {
        try {
            let userInput = prompt('Enter the name of new category to be created')
            userInput = String(userInput)
            const { data } = await axios.post('/api/v1/category/create-category', { name: userInput })
            if (data?.success) {
                toast.success(data.message)
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ContentWrapper>
            <div className="flex flex-wrap justify-center mt-20 " >
                {cards?.map((card) => (

                    <div className="  bg-indigo-50 mx-2 px-4 mt-8 rounded-3xl  h-[130px] min-w-[250px] transform transition-all hover:scale-110 duration-300 flex">
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-poppins text-indigo-600 font-bold">
                                {card.keyword}
                            </h5>


                            <Link type="button" href="#" className="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 text-black" onClick={() => { handleUpdate(card._id) }}>
                                <i class="fa-solid fa-pen"></i>
                            </Link>
                            <Link type="button" href="#" className="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 text-black" onClick={() => { handleDelete(card._id) }}>
                                <i class="fa-solid fa-trash"></i>
                            </Link>
                        </div>
                    </div>

                ))
                }
            </div>
            <div className='w-full flex justify-center md:justify-end p-4'>
                <button className='mt-10 px-4 py-2 bg-indigo-600 text-white rounded-xl' onClick={handleCreate}>create new</button>
            </div>
        </ContentWrapper>
    )
}

export default Category
