import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ContentWrapper from '../../Components/ContentWrapper'
const CreatePost = () => {
    const artistid = localStorage.getItem('Artist')
    // console.log(artistid)
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const [price, setPrice] = useState("")
    const [photo, setPhoto] = useState("")
    const [dimension, setDimension] = useState("")
    const [shippingDetails, setShippingDetails] = useState("")
    const [artist, setArtist] = useState("")
    const [check, setCheck] = useState([])

    // gere below we are getting all the category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/getAllCategory')
            console.log(data)
            if (data?.success) {
                setCategories(data?.data)
            }
        } catch (error) {
            console.log(error);

        }
    }
    // below we are getting the artist details
    const getArtistDetails = async () => {
        try {
            const { data } = await axios.get(`/api/v1/artist/getArtistDetails/${artistid}`)
            if (data?.success) {
                setArtist(data?.artist)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleCreate = async (e) => {
        e.preventDefault()
        try {

            const postData = new FormData()
            postData.append('name', name);
            postData.append('description', description);
            postData.append('category', category);
            postData.append('price', price);
            postData.append('photo', photo);
            postData.append('dimension', dimension);
            postData.append('shippingDetails', shippingDetails)
            postData.append('artist', artist._id)
            postData.append('artistName', artist?.name)
            console.log('this is category', category)
            const { data } = await axios.post(`/api/v1/artwork/create-artwork/${artistid}`, postData)
            if (data?.success) {
                toast.success('product has been created successfully');
                navigate('/artwork')
            }

        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }


    useEffect(() => { getAllCategory(); getArtistDetails() }, [])
    return (
        <ContentWrapper>
            <form onSubmit={handleCreate} className='flex flex-col justify-center align-middle mt-10'>
                <div className="space-y-12 w-50% px-20">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900" >Description</label>
                                <div className="mt-2">
                                    <textarea id="description" name="description" rows={3} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Give Your Post A Description</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Post photo</label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        {!photo && <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                        </svg>}
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                {!photo && <span>Upload a file</span>}
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} />
                                                {photo && <img src={URL.createObjectURL(photo)} alt="post_photo" className='img img-responsive' style={{ height: '300px' }} />}
                                            </label>
                                            {!photo && <p className="pl-1">or drag and drop</p>}
                                        </div>
                                        {!photo && <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Post Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="artistname" className="block text-sm font-medium leading-6 text-gray-900">Artist Name</label>
                                <div className="mt-2">
                                    <input type="text" name="artistname" id="artistname" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={artist?.name} readOnly />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Art Name</label>
                                <div className="mt-2">
                                    <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>


                            <div className="sm:col-span-3">
                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                                <div className="mt-2">
                                    <select id="category" name="category" aria-placeholder='select a category' autoComplete="category-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={(e) => { setCategory(e.target.value) }}>
                                        <option >Select Category</option>
                                        {categories?.map((item) => (
                                            <>
                                                <option key={item?._id} value={item._id}>{item?.name}</option>
                                            </>

                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900" >Price</label>
                                <div className="mt-2">
                                    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="dimension" className="block text-sm font-medium leading-6 text-gray-900" >dimension</label>
                                <div className="mt-2">
                                    <input type="text" name="dimension" id="dimension" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={dimension} onChange={(e) => { setDimension(e.target.value) }} />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="shippingDetails" className="block text-sm font-medium leading-6 text-gray-900">Shipping Details</label>
                                <div className="mt-2">
                                    <input type="text" name="shippingDetails" id="shippingDetails" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={shippingDetails} onChange={(e) => { setShippingDetails(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
                </div>
            </form>
        </ContentWrapper>

    )
}

export default CreatePost
